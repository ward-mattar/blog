links = {}
Dir.glob("*.md").each do |f|
    f =~ /(\d+)-(\d+)-(\d+)-(.*)\.md/
    link = "#{$1}/#{$2}/#{$3}/#{$4}/"
    File.read(f) =~ /id: (\d+)/
    links[$1] = link
end

f = "2009-03-16-topological_proof_infinity_of_primes.md"
# text = File.read(f)
# text.gsub!(/<a href="http:\/\/www.gadial.net\/\?p=(\d+)">/){"<a href=\"http://www.gadial.net/#{links[$1.to_s]}\">"}
Dir.glob("*.md").each do |f|
    text = File.read(f)
    text.gsub!(/<a href="http:\/\/www.gadial.net\/\?p=(\d+)">/){"<a href=\"http://www.gadial.net/#{links[$1.to_s]}\">"}
    File.open("#{f}", 'w') { |file| file.write(text) }
end