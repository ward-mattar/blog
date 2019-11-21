$BOOKS = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"]

text = ""

for bookname in $BOOKS do
  raw_text = File.open("#{bookname}.html", "r"){|f| f.read}
  text += raw_text.scan(/<nobr>(.*)?<\/nobr>/).flatten.collect{|t| t.gsub(/(<\/a>)/,"").gsub(/(<a.*?>)/,"").reverse}.join(" ").gsub(/;psbn&|:| |-|\n/, "")
end

File.open("result.txt", "w"){|f| f.write(text)}