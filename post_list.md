---
layout: default
---
Hello world, we test lists today
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="post-list">
<select id="category-filter-list">
  <option value="הכל">הכל</option>
  {% for category in site.categories %}
  <option value="{{category.name}}">{{category.name}}</option>
  {% endfor %}
</select>
  <button id="filter-category" >Filter</button>
  <input class="search" />
  <span class="sort" data-sort="name">Sort by name</span>
  <span class="sort" data-sort="timestamp">Sort by date</span>
  <ul class="list">
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  {%- for post in site.posts -%}
    <li>
    <a class="post-link" href="{{ post.url | relative_url }}">
    <h3 class="name">{{ post.title }}</h3>
    </a>
       <p class="date post-meta timestamp" data-timestamp="{{post.date | date_to_xmlschema}}">{{ post.date | date: date_format }}</p>
       <span>
       {% for category in post.categories %}
       <a href="{{site.baseurl}}{{category.url}}">{{category.name}}</a>{% if forloop.last == false %}, {% endif %}
       {% endfor %}
       </span>
       <div hidden class="category">{% for category in post.categories %}{{category.name}}{% if forloop.last == false %}, {% endif %}{% endfor %}</div>
    </li>
  {% endfor %}
  </ul>
</div>

<script type="text/javascript">
$(document).ready(function(){
var options = {
  valueNames: [ 'name', 'date', { name: 'timestamp', attr: 'data-timestamp' }, 'category']
};
var postList = new List('post-list', options);

$('#filter-category').click(function() {
    postList.filter(function(item) {
        var item_categories = item.values().category.split(", ")
        if ($('#category-filter-list').val() == "הכל" || item_categories.indexOf($('#category-filter-list').val()) != -1) {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

});
</script>
