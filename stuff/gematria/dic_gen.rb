# encoding: utf-8
TRANSLATE_TABLE = {
    'א'=> 1,
    'ב'=> 2,
    'ג'=> 3,
    'ד'=> 4,
    'ה'=> 5,
    'ו'=> 6,
    'ז'=> 7,
    'ח'=> 8,
    'ט'=> 9,
    'י'=> 10,
    'כ'=> 20,
    'ך'=> 20,
    'ל'=> 30,
    'מ'=> 40,
    'ם'=> 40,
    'נ'=> 50,
    'ן'=> 50,
    'ס'=> 60,
    'ע'=> 70,
    'פ'=> 80,
    'ף'=> 80,
    'צ'=> 90,
    'ץ'=> 90,
    'ק'=> 100,
    'ר'=> 200,
    'ש'=> 300,
    'ת'=> 400
}

def compute_value(word)
  word.split("").reject{|s| not TRANSLATE_TABLE[s]}.inject(0){|sum, s| sum + TRANSLATE_TABLE[s]}
end

def clean_word(word)
  word.split("").reject{|s| not TRANSLATE_TABLE[s] and not s == " "}.join("")
end

def js_format(result)
  content_string = result.to_a.collect{|x| "#{x[0]}: #{x[1].inspect}"}.join(",\n")
  "var dic = {\n#{content_string}\n}"
end

raise "Needs Ruby 1.9.x to run (unicode stuff)" if /1.8.\d+/ =~ RUBY_VERSION

words = File.open(ARGV[0], "r"){|f| f.read.split("\n").collect{|s| clean_word(s)}}
result = Hash.new{|hash, key| hash[key] = []}
words.each{|w| result[compute_value(w)] << w unless w == ""}
puts js_format(result)