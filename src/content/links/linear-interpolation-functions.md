---
title: Linear Interpolation Functions
link: https://trysmudford.com/blog/linear-interpolation-functions/
published: 2024-08-07T19:34:20-0400
---

```tsx
const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const range = (x1: number, y1: number, x2: number, y2: number, a: number) =>
  lerp(x2, y2, invlerp(x1, y1, a));
```
