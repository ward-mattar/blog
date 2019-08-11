require 'FileUtils'
Jekyll::Hooks.register :site, :post_write do |post|
    Dir.mkdir 'docs' unless Dir.exists? 'docs'
    FileUtils.cp_r(Dir.glob('_site/*'), 'docs')
end