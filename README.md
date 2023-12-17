# alexcarpenter.me

- Framework: Next.js
- Deployment: Vercel
- Styling: Tailwind CSS
- Content: MDX - Contentlayer

## Running locally

```bash
git clone https://github.com/alexcarpenter/alexcarpenter.me.git
bun install
bun dev
```

## Pages

Content are pages that live within the `content` folder. There is no hierarchy, everything lives at the same level as a page.

Frontmatter options:

| key | description | required |
|-|-|-|
| title | The title of the page | true |
| description | Optional description for the page | false |
| published | The date the page was published | true |
| updated | The date the page was last updated | false |
| draft | A boolean value whether the page should be rendered in prod | false |

Example:

```yml
title: Hello world
description: This is an optinal description
published: 2023-12-14
updated: 2023-12-15
draft: true
```

## MDX components

### `<Image />`

### `<ButtonLink />`

### `<Columns />`

```md
<Columns>
- Lorem ipsum dolor
- Lorem ipsum dolor
- Lorem ipsum dolor
</Columns>
```

### `<DescriptionList />`

### `<ImageCarousel />`

### `<MediaObject />`

### `<Note />`

### `<Spacer />`

```md
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, pariatur.

<Spacer height="lg" />

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, pariatur.
```