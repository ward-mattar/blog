---
layout: page
title: קטגוריות
---
{% assign sorted_categories = site.categories | sort:"name" %}

קטגוריות הן נסיון לערוך קצת סדר בבלוג.

<ul>
{% for category in sorted_categories  %}
<li><a href="{{site.baseurl}}{{ category.url }}">{{ category.name }}</a>  ({{ category.posts | size }} פוסטים)</li>
{% endfor %}
</ul>