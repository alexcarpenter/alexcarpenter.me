---
title: useStateWithPrev hook
published: 2025-01-14
link: https://gist.github.com/jamiebuilds/47b227913ec2dd76f6d7ba2d686a0109
tags:
  - engineering
---

```tsx
const [prevCount, count, setCount] = useStateWithPrev(0);

function onIncrement() {
  setCount((count) => count + 1);
}

// Initial: prevCount: null, count: 0
onIncrement(); // prevCount: 0, count: 1
onIncrement(); // prevCount: 1, count: 2
onIncrement(); // prevCount: 2, count: 3
```
