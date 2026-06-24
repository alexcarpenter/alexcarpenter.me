---
title: Nano Stores Form
description: Tiny headless forms for Nano Stores.
link: https://github.com/alexcarpenter/nanostores-form
---

Tiny headless forms for [Nano Stores](https://github.com/nanostores/nanostores).

- **Small.** One core entrypoint and no runtime dependencies except Nano Stores.
- **Nano Stores native.** A form is a store with `get()`, `listen()`,
  `subscribe()`, and form actions.
- **Headless.** Use it with React, Preact, Vue, Svelte, Solid, or vanilla JS.
- **Flat by design.** Field names are top-level keys. Schema adapters and
  framework helpers can live in separate entrypoints later.

```js
import { form } from "nanostores-form";

export const $login = form(
  {
    email: "",
    password: "",
  },
  {
    validate: ({ values }) => ({
      email: values.email.includes("@") ? undefined : "Invalid email",
      password: values.password ? undefined : "Required",
    }),
    onSubmit: async ({ values }) => {
      await api.login(values);
    },
  },
);

$login.setValue("email", "alex@example.com");
await $login.handleSubmit();
```

## Install

```sh
pnpm add nanostores nanostores-form
```

## Guide

### TanStack-style config

If you prefer the TanStack Form shape, use `createForm()` with
`defaultValues` and `validators`.

```js
import { createForm } from "nanostores-form";

export const $login = createForm({
  defaultValues: {
    email: "",
    password: "",
  },
  validators: {
    onChange: ({ values }) => ({
      email: values.email.includes("@") ? undefined : "Invalid email",
    }),
    onChangeAsync: async ({ value }) => {
      if (value && !(await api.isEmailAvailable(value)))
        return "Email is taken";
    },
    onSubmit: ({ values }) => ({
      password: values.password ? undefined : "Required",
    }),
  },
  onChangeAsyncDebounceMs: 300,
  onSubmit: async ({ values }) => {
    await api.login(values);
  },
});
```

`form(defaultValues, opts)` is kept as the smaller direct style.

### Form state

```js
$form.get();
//=> {
//=>   values: { email: '' },
//=>   errors: {},
//=>   touched: {},
//=>   dirty: {},
//=>   isSubmitting: false,
//=>   isValidating: false,
//=>   submitCount: 0,
//=>   canSubmit: true
//=> }
```

### Validation

A validator receives the form values. Return an object of field errors for form
validation.

```js
const $form = form(
  { email: "" },
  {
    validate: ({ values }) => ({
      email: values.email ? undefined : "Required",
    }),
  },
);

await $form.validate();
```

When a single field is validated, `field` and `value` are provided. Return the
field error directly.

```js
const $form = form(
  { email: "" },
  {
    validate: ({ field, value }) => {
      if (field === "email" && !value) return "Required";
    },
  },
);

await $form.validate("email", "blur");
```

Validators can be async. Late async results are ignored if a newer validation
started first. TanStack-style `onChangeAsync`, `onBlurAsync`, and
`onSubmitAsync` validators are also supported, with
`onChangeAsyncDebounceMs`, `onBlurAsyncDebounceMs`, `onSubmitAsyncDebounceMs`,
or shared `asyncDebounceMs` options.

```js
const $form = form(
  { username: "" },
  {
    validate: async ({ field, value }) => {
      if (field === "username") {
        let available = await api.isUsernameAvailable(value);
        if (!available) return "Username is taken";
      }
    },
  },
);
```

### Fields

Fields are created lazily and are backed by the form store.

```js
const email = $form.field("email");

email.set("alex@example.com");
await email.blur();

email.get();
//=> {
//=>   name: 'email',
//=>   value: 'alex@example.com',
//=>   errors: [],
//=>   touched: true,
//=>   dirty: true
//=> }
```

### Submit

```js
const $form = form(
  { email: "" },
  {
    validate: ({ values }) => ({
      email: values.email ? undefined : "Required",
    }),
    onSubmit: async ({ values }) => {
      await fetch("/login", {
        body: JSON.stringify(values),
        method: "POST",
      });
    },
  },
);

let ok = await $form.handleSubmit();
```

`handleSubmit(event?)` prevents the event default when provided, touches all
fields, validates the form, and only calls `onSubmit` when valid.

```js
$form.resetField("email");
await $form.validateField("email");
```

## Optional modules

Optional features live in separate entrypoints so they are not included by
core imports.

### Standard Schema

Use any validator that supports Standard Schema, such as Zod or Valibot.

```js
import { standardSchema } from "nanostores-form/standard-schema";

const $form = form(
  { email: "" },
  {
    validate: standardSchema(schema),
  },
);
```

### Debounce

```js
import { debounce } from "nanostores-form/debounce";

const username = debounce($form.field("username"), 300);

username.set("alex");
username.cancel();
username.flush();
```

### Path

```js
import { path } from "nanostores-form/path";

const email = path($form, "user.email");
email.set("alex@example.com");
```

### Array

```js
import { array } from "nanostores-form/array";

const items = array($form, "items");
items.push({ title: "" });
items.insert(0, { title: "First" });
items.replace(0, { title: "Updated" });
items.move(0, 1);
items.swap(0, 1);
items.remove(0);
```

### Select

Create a small derived store for a slice of form state. Useful for React when a
component should re-render only for one value.

```js
import { select } from "nanostores-form/select";

const $canSubmit = select($form, (form) => form.canSubmit);
const $email = select($form, (form) => form.values.email);
```

### Debug

```js
import { debug } from "nanostores-form/debug";

let stop = debug($form, { name: "login" });
```

### React

Use the normal Nano Stores React binding:

```tsx
import { useStore } from "@nanostores/react";
import { select } from "nanostores-form/select";
import { $login } from "./stores/login";

const $canSubmit = select($login, (form) => form.canSubmit);

export function LoginForm() {
  let canSubmit = useStore($canSubmit);
  let email = useStore($login.field("email").$state);

  return (
    <form onSubmit={$login.handleSubmit}>
      <input
        value={email.value}
        onBlur={() => $login.field("email").handleBlur()}
        onInput={(event) =>
          $login.field("email").handleChange(event.currentTarget.value)
        }
      />
      {email.errors[0]}
      <button disabled={!canSubmit}>Submit</button>
    </form>
  );
}
```
