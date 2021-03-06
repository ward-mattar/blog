# encoding: utf-8

require 'rexml/document'
require 'open-uri'

EXPECTED_LENGTH = 300000

def get_raw_text
  page = open('http://he.wikipedia.org/w/api.php?format=xml&action=query&list=random&rnnamespace=0&rnlimit=10', 'User-Agent' => 'gadialBot/0.1').read
  p = REXML::Document.new page 
  page_id_string = p.elements.collect("api/query/random/page"){|e| e.attributes['id']}.join("%7C")
  pages = open("http://he.wikipedia.org/w/api.php?format=xml&action=query&pageids=#{page_id_string}&prop=revisions&rvprop=content", 'User-Agent' => 'gadialBot/0.1').read
  p = REXML::Document.new pages
  final_text = p.elements.collect("api/query/pages/page/revisions/rev"){|e| e.text}.join("").gsub(/[^\xD7\x90-\xD7\xAA]/,'')
end


raise "Needs Ruby 1.9.x to run (unicode stuff)" if /1.8.\d+/ =~ RUBY_VERSION

result = ""

while (result.length < EXPECTED_LENGTH)
  result += get_raw_text
end

puts result

# pages = open('http://he.wikipedia.org/w/api.php?format=xml&action=query&pageids=134432%7C144389&prop=revisions&rvprop=content', 'User-Agent' => 'gadialBot/0.1').read

# puts page
# puts p.inspect

# puts p.elements
# p.elements.each("api/query/page"){|e| puts e}
# html = open('http://he.wikipedia.org/w/api.php?format=xml&action=query&titles=%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&prop=revisions&rvprop=content', 'User-Agent' => 'gadialBot/0.1').read
# html = open('http://en.wikipedia.org/w/api.php?format=xml&action=query&titles=Special:Random&prop=revisions&rvprop=content', 'User-Agent' => 'gadialBot/0.1').read
# puts html
