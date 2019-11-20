---
layout: page
title: קטגוריות
---

קטגוריות הן נסיון לערוך קצת סדר בבלוג.

<ul>
{% for category in site.categories %}
<li><a href="{{site.baseurl}}{{ category.url }}">{{ category.name }}</a>  ({{ category.posts | size }} פוסטים)</li>
{% endfor %}
</ul>