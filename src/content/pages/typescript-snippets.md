---
title: TypeScript snippets
description: Collection of useful TypeScript snippets
published: 2024-01-26
---

## Array subset type

```ts
let arr1 = ["one", "two", "three"] as const;

type ArraySubset<T extends readonly string[]> = T[number][];

let arr2: ArraySubset<typeof arr1> = ["one", "two"]; // No error
let arr3: ArraySubset<typeof arr1> = ["one", "two", "four"]; // Errors because 'four' is not within arr1
```
