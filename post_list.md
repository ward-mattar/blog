---
layout: default
---
<h1>רשימת הפוסטים</h1>
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="post-list">
<label>חיפוש לפי כותרת</label>
<input class="search" />
<br />
<label>סינון לפי קטגוריה</label>
<select id="category-filter-list">
  <option value="הכל">הכל</option>
  {% for category in site.categories %}
  <option value="{{category.name}}">{{category.name}}</option>
  {% endfor %}
</select>
<br />
  <button class="sort" data-sort="name">מיון על פי שם</button>
  <button class="sort" data-sort="timestamp">מיון על פי תאריך</button>
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

$('#category-filter-list').change(function() {
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
