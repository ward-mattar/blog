require "rexml/document"
include REXML
xmlfile = File.new(ARGV[0])
xmldoc = Document.new(xmlfile)
xmldoc.elements.each("rss/channel/item") do |post| 
    post_id = post.elements['wp:post_id'].text
    post_title = post.elements['title'].text.gsub('"', '\"')
    post_name = post.elements['wp:post_name'].text
    post_date = post.elements['wp:post_date'].text
    post_categories = []
    post_tags = []
    post.elements.each('category') do |c|
        post_categories << c.text if c['domain'] == 'category'
        post_tags << c.text if c['domain'] == 'post_tag'
    end
    
    post_content = post.elements['content:encoded'].text
    .gsub("\\(", "{::nomarkdown}\\(").gsub("\\)", "\\){:/nomarkdown}")
    .gsub("$latex", "{::nomarkdown}\\(").gsub("$", "\\){:/nomarkdown}")
    .gsub('{{', '{\ {').gsub('\text{%}','%').gsub('|',"\\|")
    post_filename = post_date.split(" ")[0] + "-" + post_name + ".md"
    File.open("_posts/#{post_filename}", "w") do |file|
        file.puts "---"
        file.puts "id: #{post_id}"
        file.puts "title: \"#{post_title}\""
        file.puts "date: #{post_date}"
        file.puts "layout: post"
        if not post_categories.empty?
            file.puts "categories: "
            post_categories.each {|c| file.puts "  - #{c}"}
        end
        if not post_tags.empty?
            file.puts "tags: "
            post_tags.each {|t| file.puts "  - #{t}"}
        end
        file.puts("---")
        file.puts post_content
    end
end