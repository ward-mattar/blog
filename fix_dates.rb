old_data = {}
File.read('wordpress.2019-06-24.xml').scan(/<link>https:\/\/gadial.net\/(\d\d\d\d)\/(\d\d)\/(\d\d)\/(.*)\/<\/link>/) {old_data[$4] = "#{$1}-#{$2}-#{$3}"}
Dir.glob("docs/**/index.html").join(" ").scan(/(\d\d\d\d)\/(\d\d)\/(\d\d)\/(.*?)\/index.html/) do
    date = "#{$1}-#{$2}-#{$3}"
    puts "#{$4}: #{date}" if old_data[$4] != date
end