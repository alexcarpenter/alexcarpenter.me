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

```jsx
<div className="bg-[conic-gradient(at_92%_8%,rgba(255,255,255,.5)_90deg,transparent_0_225deg,transparent_0)] bg-[length:15px_15px]" />
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

## Shadow stack

```css {1,3-4}
.shadow-stack {
  background: linear-gradient(#fff, rgb(0 0 0 / 0.02));
  --shadow-color: rgb(0 0 0 / 0.06);
  box-shadow: 0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color),
    0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color),
    0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color);
}
```

```jsx
<div className="shadow-[0px_0px_0px_1px,0px_1px_1px_-0.5px,0px_3px_3px_-1.5px,0px_6px_6px_-3px,0px_12px_12px_-6px,0px_24px_24px_-12px] shadow-black/[0.06] bg-gradient-to-b from-white to-black/[0.02]" />
```

via [PixelJanitor](https://twitter.com/PixelJanitor/status/1736834112223109411)
