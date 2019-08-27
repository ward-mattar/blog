---
layout: default
---
Hello world, we test lists today
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<div id="hacker-list">
  <input class="search" />
  <span class="sort" data-sort="name">Sort by name</span>
  <span class="sort" data-sort="date">Sort by date</span>
  <ul class="list">
  {%- for post in site.posts -%}
    <li>
       <p class="date">{{ post.date | date: date_format }}</p>
       <h3 class="name">{{ post.title }}</h3>
       {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
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
var hackerList = new List('hacker-list', options);
});
</script>
