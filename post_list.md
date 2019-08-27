---
layout: default
---
Hello world, we test lists today
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="post-list">
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
    </li>
  {% endfor %}
  </ul>
</div>

<script type="text/javascript">
$(document).ready(function(){
    console.log("Hello world");
var options = {
  valueNames: [ 'name', 'date', { name: 'timestamp', attr: 'data-timestamp' }]
};
var hackerList = new List('post-list', options);
});
</script>
