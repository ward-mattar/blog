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
        categories.keys.each{|c| site.pages << CategoryPage.new(site, site.source, c, 'category', categories[c])}
        tags.keys.each{|t| site.pages << CategoryPage.new(site, site.source, t, 'tag', tags[t])}
      end
    end
  
     class CategoryPage < Page
        def initialize(site, base, name, type, posts)
            @site = site
            @base = base
            @dir  = type
            @name = "#{name.to_s.gsub("?","").gsub('"',"")}.html"
            
            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'category.html')
            self.data['posts'] = posts
        end
     end
    #   def initialize(site, base, name, type)
    #     @site = site
    #     @base = base
    #     @dir  = ''
    #     @name = 'guide.html'
  
    #     self.process(@name)
    #     self.read_yaml(File.join(base, '_layouts'), 'guide.html')
    #     self.data['episodes'] = episodes
    #     # self.data['category'] = category
  
    #     # category_title_prefix = site.config['category_title_prefix'] || 'Category: '
    #     # self.data['title'] = "#{category_title_prefix}#{category}"
    #   end
    # end
end