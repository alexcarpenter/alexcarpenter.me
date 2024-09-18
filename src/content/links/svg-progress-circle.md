---
title: SVG progress circle
link: https://x.com/devongovett/status/1835692034104918053
published: 2024-09-18T06:24:53-0400
---

```tsx
function ProgressCircle({ percentage }) {
  return (
    <svg width={40} height={40} fill="none">
      <circle
        cx="50%"
        cy="50%"
        r="calc(50% - 2px)"
        strokeWidth={4}
        stroke="lightgray"
      />
      <circle
        cx="50%"
        cy="50%"
        r="calc(50% - 2px)"
        strokeWidth={4}
        stroke="blue"
        pathLength={100}
        strokeDasharray="100 200"
        strokeDashoffset={100 - percentage}
        strokeLinecap="round"
        transform="rotate(-90)"
        transform-origin="center"
      />
    </svg>
  );
}
```
