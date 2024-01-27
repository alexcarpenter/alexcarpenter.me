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

---

## forwardRef function

The same as `React.forwardRef` but passes the `ref` as a prop and returns a component with the same generic type.

```tsx
export function forwardRef<T extends React.FC<any>>(render: T) {
  const Role = React.forwardRef((props, ref) => render({ ...props, ref }));
  Role.displayName = render.displayName || render.name;
  return Role as unknown as T;
}
```

via [Ariakit](https://github.com/ariakit/ariakit/blob/main/packages/ariakit-react-core/src/utils/system.tsx)

---

## Polymorphic button

```tsx
function Button<T extends keyof React.JSX.IntrinsicElements>({
  as,
  ...props
}: React.ComponentProps<T> & { as: T }): React.ReactNode {
  return React.createElement(as, props);
}
```

```tsx
type ButtonOrLinkProps =
  | (React.JSX.InstrinsicElements["button"] & { href?: undefined })
  | (React.JSX.IntrinsicElements["a"] & { href: string });

function Button(props: ButtonOrLinkProps) {
  if (props.href !== null) {
    return <a {...props} />;
  }
  return <button {...props} />;
}
```

via [mattpocockuk](https://twitter.com/mattpocockuk/status/1713856343478542626)
