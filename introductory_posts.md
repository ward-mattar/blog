---
layout: default
---
<h1>פוסטים למתחילים</h1>
הבלוג מיועד לכולם - גם סטודנטיות למתמטיקה, גם תלמידי בית ספר וגם לכל מי שיש אצלנו התעניינות כללית במתמטיקה. בשל כך רמת הפוסטים מאוד לא אחידה ויש פוסטים טכניים או שדורשים ידע מוקדם.

בדף הזה ריכזתי פוסטים שאני מקווה שבאמת יהיו מעניינים ונגישים לכולם, גם בלי ידע מוקדם במתמטיקה וגם למי שמתקשים עם החלקים הטכניים יותר.

<div class="row">
  {% for post in site.data.introductory_posts %}
  <figure class="col-md-4">
    <a class="black-text" href="{{site.baseurl}}{{site.post_images}}/intro/{{post.image}}">
      <img alt="picture" src="{{site.baseurl}}{{site.post_images}}/intro/{{post.image}}" class="img-fluid">
      <h3><a href="{{site.baseurl}}{{post.url}}">{{ post.title }}</a></h3>
      <p>{{post.text}}</p>
    </a>
  </figure>
  {% endfor %}
</div>