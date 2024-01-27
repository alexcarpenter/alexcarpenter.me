---
title: CSS snippets
description: Collection of useful CSS code snippets
published: 2024-01-26
---

## Dotted background

```css
.dotted-background {
  background-image: conic-gradient(
    at 92% 8%,
    #202128 90deg,
    transparent 0 225deg,
    transparent 0
  );
  background-size: 16px 16px;
}
```

via [brotzky\_](https://twitter.com/brotzky_/status/1749506883663327557)

## Gradient border

```css
.gradient-border {
  background: linear-gradient(black, black) padding-box, linear-gradient(
        to right,
        blue,
        red
      ) border-box;
  border: 1px solid transparent;
}
```

via [brotzky\_](https://twitter.com/brotzky_/status/1750568966555340844)

## Full width element

```css
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

```jsx
<div className="relative w-screen inset-x-1/2 mx-[-50vw]" />
```
