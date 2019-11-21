# encoding: UTF-8

DEFAULT_MAX_JUMP_SIZE = 150
TEXTFILE = "torah.txt"
WORDSFILE = "words"
HEBREW_TERMINATORS = {
  "צ" => "ץ",
  "ץ" => "צ",
  "מ" => "ם",
  "ם" => "מ",
  "נ" => "ן",
  "ן" => "נ",
  "פ" => "ף",
  "ף" => "פ",
  "כ" => "ך",
  "ך" => "כ"}

def load_clean_text(filename)
  File.open(filename, "r"){|f| f.read}
end


class String
  def addHebrewTerrminators
    self.gsub(Regexp.new HEBREW_TERMINATORS.keys.join("|")){|s| "(#{s}|#{HEBREW_TERMINATORS[s]})"}
  end
end

def find_in_text(options)
  return [] unless options[:text] and options[:word]
  min_jump_size = options[:min_jump] || 1
  max_jump_size = options[:max_jump] || DEFAULT_MAX_JUMP_SIZE
  text, word = options[:text], options[:word]
  text = text[options[:text_start]..options[:text_end]] if options[:text_start] and options[:text_end]
  positive_jump_results = []
  negative_jump_results = []
  for jump_size in (min_jump_size..max_jump_size) do
    regexp = Regexp.new(word.split("").join(".{#{jump_size-1}}").addHebrewTerrminators)
    text.scan(regexp){positive_jump_results << [$~.begin(0) + (options[:text_start] || 0), jump_size]}
    return positive_jump_results[0] if not positive_jump_results.empty? and options[:find_minimal_jump]
    
    regexp = Regexp.new(word.reverse.split("").join(".{#{jump_size-1}}").addHebrewTerrminators)
    text.scan(regexp){negative_jump_results << [$~.begin(0) + ((options[:text_start] || 0)+jump_size*(word.length-1) || 0), -jump_size]}
  end
  return negative_jump_results[0] if options[:find_minimal_jump]
  return (positive_jump_results + negative_jump_results).sort
end

def enclosing_rectangle(word, word_start, jump)
  default_height = 30
  n = word.length
  start = word_start-(((default_height-n)/2)-1)*jump+jump/2
  ending = word_start+(((default_height+n)/2)-1)*jump+jump/2
  [start, ending]
end


def batch_proecess_files
  text = load_clean_text(TEXTFILE)

  for words in load_clean_text(WORDSFILE).split("----") do
    words = words.split(" ")
    main_word = words.shift
    main_word_location = find_in_text(:text => text, :word => main_word, :min_jump => 2, :max_jump => 200, :find_minimal_jump => true)
    if not main_word_location or main_word_location.empty?
      puts "#{main_word}: not found"
    else
      puts "#{main_word}: #{main_word_location.inspect}"
      rect = enclosing_rectangle(main_word, main_word_location[0], main_word_location[1].abs)
      for word in words do
	puts "#{word}: #{find_in_text(:text => text, :word => word, :text_start => rect[0], :text_end => rect[1]).inspect}"
      end
    end
    puts "-"*10
  end
end

batch_proecess_files

# word = "התאומים"
# text = load_clean_text(TEXTFILE)
# puts find_in_text(:text => text, :word => word, :min_jump => 2, :max_jump => 300).inspect




# puts find_in_text(:text => text, :word => words[0], :max_jump => 100).inspect
# min_find = find_in_text(:text => text, :word => words[0], :max_jump => 100, :find_minimal_jump => true)
# puts enclosing_rectangle(words[0], min_find[0], min_find[1]).inspect
