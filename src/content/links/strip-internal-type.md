---
title: StripInternal type helper
link: https://x.com/colinhacks/status/1824052417820021173/photo/1
published: 2024-09-18T16:57:39-0400
---

```ts
type StripInternal<T> = Omit<T, `__${string}`>;

interface Person {
  name: string;
  age: number;
  __id: boolean;
}

type PersonProps = StripInternal<Person>;
// => { name: string; age: number }
```
