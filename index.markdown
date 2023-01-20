---
title : IN1080 Kompendium
date: now
layout : post
usemathjax : true
---

> Denne siden dekker ikke hele pensum

{% for category in site.categories %}
<h3>{{ category[0] }}</h3>
  <div class="button-grid">
    {% for post in category[1] %}
    <button onclick="location.href='{{ post.url }}';" class="neumorphic-button">
      {{post.title}}
    </button>
    {% endfor %}
  </div>
{% endfor %}
