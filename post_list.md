---
layout: default
---
Hello world, we test lists today
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="post-list">
  <input class="search" />
  <span class="sort" data-sort="name">Sort by name</span>
  <span class="sort" data-sort="date">Sort by date</span>
  <ul class="list">
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  {%- for post in site.posts -%}
    <li>
    <h3 class="name">{{ post.title }}</h3>
    <span class="post-meta">
       <p class="date">{{ post.date | date: date_format }}</p>
    </span>      
    </li>
  {% endfor %}
  </ul>
</div>

<script type="text/javascript">
$(document).ready(function(){
    console.log("Hello world");
var options = {
  valueNames: [ 'name', 'date' ]
};
var hackerList = new List('post-list', options);
});
</script>
