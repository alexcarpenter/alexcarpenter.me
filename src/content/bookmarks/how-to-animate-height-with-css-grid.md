---
title: Animate element's height with grid-template-rows
published: 2024-03-18
link: https://stefanjudis.com/snippets/how-to-animate-height-with-css-grid/
tags:
  - css
  - animation
---

#TIL you can animate an element's height with CSS grid.

```css
.disclosure {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-in-out;
}

.disclosure.open {
  grid-template-rows: 1fr;
}
```
