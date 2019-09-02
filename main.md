---
layout: carousel
---
{% assign nav_data = site.data.navigation %}
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">לא מדויק</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        {% for navitem in nav_data.navbar %}
            {% if navitem.dropdown %}
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown{{forloop.index0}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{navitem.title}}</a>
            <div class="dropdown-menu" aria-labelledby="dropdown{{forloop.index0}}">
            {% for item in navitem.dropdown %}
            <a class="dropdown-item text-right" href="{{site.baseurl}}{{item.url}}">{{item.title}}</a>
            {% endfor %}
           </div>
            </li>
            {% else %}
            <li class="nav-item">
                <a class="nav-link" href="{{site.baseurl}}{{navitem.url}}">{{navitem.title}}</a>
            </li>
            {% endif %}
        {% endfor %}
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="חיפוש" aria-label="חיפוש">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">חיפוש</button>
      </form>
    </div>
  </nav>
</header>

<main role="main">

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    {% for carousel_item in nav_data.carousel %}
      <li data-target="#myCarousel" data-slide-to="{{ forloop.index0 }}"{% if forloop.first %} class="active"{% endif %}></li>
    {% endfor %}
    </ol>
    <div class="carousel-inner">
    {% for carousel_item in nav_data.carousel %}
      <div class="carousel-item{% if forloop.first %} active{% endif %}">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>{{ carousel_item.title }}</h1>
            <p>{{ carousel_item.subtitle }}</p>
            <p><a class="btn btn-lg btn-primary" href="{{site.baseurl}}{{ carousel_item.url }}" role="button">לפוסט</a></p>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">הקודם</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">הבא</span>
    </a>
  </div>


  
  <div class="container marketing">
    <div class="row">
    {% for header in nav_data.headers %}
      <div class="col-lg-4 ">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>{{ header.title }}</h2>
        <p>{{ header.subtitle }}</p>
        <p><a class="btn btn-secondary" href="{{site.baseurl}}{{ header.url }}" role="button">לדף &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      {% endfor %}
    </div><!-- /.row -->

   <hr class="featurette-divider">
   {% for feature in nav_data.features %}
   <div class="row featurette">
      <div class="col-md-7{% cycle '', ' order-md-2' %} text-right">
      <a href="{{site.baseurl}}{{feature.url}}"><h2 class="featurette-heading">{{feature.title}}</h2></a>
      <p class="lead">{{feature.subtitle}}</p>
      </div>
      <div class="col-md-5{% cycle '', ' order-md-1' %}">
      <a href="{{site.baseurl}}{{feature.url}}"><svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg></a>
      </div>
    </div>
    <hr class="featurette-divider">
   {% endfor %}
  </div><!-- /.container -->
