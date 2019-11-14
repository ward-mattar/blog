import os
import sys
import subprocess
import re
from datetime import datetime

LYX_EXE = r'c:\Program Files (x86)\LyX 2.3\bin\LyX2.3.exe'
BASIC_REPLACEMENTS = {
    r'\\char`\\"{}': r'"',
    r'\\char34\s?({})?' : r'"'
}
TAGS = {
    "title{}": "",
    "maketitle" : "",
    "selectlanguage{}" : "",
    "inputencoding{}" : "",
    "newpage": "",
    "textbf{}": r'<strong>\1</strong>',
    "href{}{}": r'<a href="\1">\2</a>',
    (r'\{\\beginL', r'\\endL\}'): r'\1',
    (r'\\item', r'(?=(?=\n\\item)|(?=\n\\end\{))'): r'<li>\1</li>',
    (r'\\begin{itemize}', r'\\end{itemize}'): r'<ul>\1</ul>',
    (r'\\begin{enumerate}', r'\\end{enumerate}'): r'<ol>\1</ol>',
    (r'\\begin{quote}', r'\\end{quote}'): r'<blockquote>\1</blockquote>',
    "section{}": r'<h2>\1</h2>',
    "section\*{}": r'<h2>\1</h2>',
    "subsection{}": r'<h3>\1</h3>',
    "subsection\*{}": r'<h3>\1</h3>',
    "paragraph\*{}": r'<h4>\1</h4>',
    "L{}": r'\1',
    'textquotedblright ': '"',
    'textquotedblright': '"',
    'textquotedblleft ': '"',
    'textquotedblleft{}': '"',
    'textquotedbl ' : '"',
    'textquotedbl{}': '"'
}

def re_search(regex, s, *params):
    """Assumes re has one capture group; returns it or None"""
    result = re.search(regex, s, *params)
    if result and len(result.groups()) > 0:
        return result.group(1)
    return None

def convert_lyx_to_tex(lyx_file):
    commandLine = [LYX_EXE, "--export", "latex", "{}.lyx".format(filename)]
    subprocess.Popen(commandLine)

def get_content(text):
    """The content is everything between and not including the \document tags"""
    return re_search(r'(?<=begin\{document\})(.*)(?=\\end\{document\})', text, re.DOTALL) or text

def find_problems(text):
    for bad_line in re.findall(r'^.*\\ensuremath.*$', text):
        print("WARNING: ensuremath found in line {}".format(bad_line))
    return text

def basic_replacements(text):
    for (target, result) in BASIC_REPLACEMENTS.items():
        text = re.sub(target, result, text, re.DOTALL)
    return text

def parentheses_fix(text):  # relies on the fact that parentheses in mathmode are of the form \left( and \right)
    replacement = {'(': ')', ')': '('}
    return re.sub(r'(?<!\\left)\(|(?<!\\right)\)', lambda s: replacement.get(s.group(0), s.group(0)), text)

def math_tag_replacements(text):  # relies on the fact that LyX converts math to \L{$...$} in my heb posts
    return re.sub(r'\\L\{\$([^\$]*)\$\}', r'\(\1\)', text)

def remove_comments(text):
    return re.sub(r'%.*', "", text)

def replace_tags(text):
    # print(text)
    for tag, replacement in TAGS.items():
        if isinstance(tag, str):
            regex = r'\\' + re.sub(r'{}', r'\\{(.*?)\\}', tag)
        if isinstance(tag, tuple):
            regex = r'{}\s?(.*?){}'.format(tag[0], tag[1])
        # print("Replacing via regex {}".format(regex))
        text = re.sub(regex, replacement, text, flags = re.DOTALL)
        # print(text)
    return text

def remove_linebreaks(text):
    # tex has linebreaks in the middle of paragraphs for no reason
    text = re.sub(r'(?<!\r\n)\r\n(?!\r\n)', " ", text)
    text = re.sub(r'(?<!\n)\n(?!\n)', " ", text)
    return text

def add_paragraph_tags(text):
    text = re.sub(r'\n(\S.*)', r'\n<p>\1</p>', text)
    return text

def remove_L_tag(text):
    idx = text.find("\L{")
    while idx != -1:
        count = 1
        text = text[:idx] + text[idx+3:]
        while count > 0:
            idx += 1
            if text[idx] == '{':
                count +=1
            if text[idx] == '}':
                count -=1
        text = text[:idx] + text[idx+1:]
        idx = text.find("\L{")
    return text

def front_matter(text):
    title = re_search(r'title\{(.*)\}', text)
    date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    categories = ['cat']
    tags = ['tagg']
    front_matter_elements = []
    front_matter_elements.append('---')
    front_matter_elements.append('title: {}'.format(title))
    front_matter_elements.append('date: {}'.format(date))
    front_matter_elements.append('layout: post')
    front_matter_elements.append('categories:')
    for c in categories:
        front_matter_elements.append('  - {}'.format(c))
    front_matter_elements.append('tags:')
    for t in tags:
        front_matter_elements.append('  - {}'.format(t))
    front_matter_elements.append('---')
    return "\n".join(front_matter_elements)

def perform_all_changes(text):
    text = get_content(text)
    text = find_problems(text)
    text = parentheses_fix(text)
    text = math_tag_replacements(text)
    text = remove_comments(text)
    text = remove_L_tag(text)
    text = replace_tags(text)
    text = remove_linebreaks(text)
    text = add_paragraph_tags(text)
    return text

if __name__ == '__main__':
    if len(sys.argv) == 1:
        print("Usage: {} FILENAME".format(sys.argv[0]))
        exit(0)
    filename = os.path.splitext(os.path.basename(sys.argv[1]))[0]
#    convert_lyx_to_tex(filename)
    with open(filename + ".tex") as texfile:
        text = texfile.read()
    text = front_matter(text) + perform_all_changes(text)
    with open(filename + ".blog", "w") as output_file:
        output_file.write(text)