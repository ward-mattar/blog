require 'json'
module Jekyll
    class CategoryGenerator < Generator
      safe true
      
      def generate(site)
        categories = Hash.new { |hash, key| hash[key] = Array.new }
        tags = Hash.new { |hash, key| hash[key] = Array.new }
        for post in site.posts.docs do
            post.data['categories'].each{|c| categories[c] << post}
            post.data['tags'].each{|c| tags[c] << post}
        end
        category_pages = {}
        categories.keys.each do |c|
            doc = site.collections['categories'].docs.find{|d| d.data['name'] == c}
            if not doc.nil?
                doc.data['posts'] = categories[c]
                category_pages[c] = doc
            else
                puts "Error: did not find category page for #{c}"
            end
        end
        for post in site.posts.docs do
            post.data['categories'] = post.data['categories'].find_all{|c| category_pages.key? c}.map{|c| category_pages[c]}
        end
      end
    end
end