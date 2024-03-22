---
title: auto-grid utility
published: 2024-03-21
link: https://9elements.com/blog/building-a-rock-solid-auto-grid/
tags:
  - css
---

```css
.auto-grid {
  --max-column-width: 100% / var(--auto-grid-max-columns, infinity) - var(--auto-grid-gap);
  --column-width: max(
    var(--max-column-width),
    min(var(--auto-grid-min-size, 10rem), 100%)
  );
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));
  gap: var(--auto-grid-gap-vertical, var(--auto-grid-gap, 1rem)) var(
      --auto-grid-gap,
      1rem
    );
}
```
