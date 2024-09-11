---
title: Adaptive dotted background pattern
link: https://codepen.io/myf/pen/poXYLNB?editors=0100
published: 2024-09-11T10:09:48-0400
---

```css
html {
  background-image: radial-gradient(circle at center, transparent, Canvas),
    radial-gradient(
      circle at center,
      color-mix(in oklch, Canvastext 33%, Canvas) 0.8px,
      transparent 1.3px
    );
  background-size:
    200px 200px,
    40px 40px;
  background-repeat: round, space;
}
```
