old_data = {}
#File.read('wordpress.2019-06-24.xml').scan(/<link>https:\/\/gadial.net\/(\d\d\d\d)\/(\d\d)\/(\d\d)\/(.*)\/<\/link>/) {old_data[$4] = "#{$1}-#{$2}-#{$3}"}
puts Dir.glob("docs/**/index.html")

# .join(" ").scan(/(\d\d\d\d-\d\d-\d\d)-(.*?)\.md/) do
#     if old_data[$2] != $1
#         puts "#{$2}: #{$1}"
#     end
#end
