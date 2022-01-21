export interface Screencast {
  title: string;
  description: string;
  date: string;
  id: string;
  tags?: Array<string>;
}

const screencasts: Array<Screencast> = [
  {
    title: 'How to animate a modal dialog component with Framer Motion',
    description:
      'How to animate a React Aria modal dialog component using Framer Motion.',
    date: '2021-12-31',
    id: 'n1-XaRz4LHs',
    tags: ['react', 'framer-motion'],
  },
  {
    title: 'Create an animated nav shadow with Framer Motion',
    description:
      'How to create an animated nav shadow element using Framer Motion components.',
    date: '2021-12-23',
    id: 'CbSVUCQA2K4',
    tags: ['react', 'framer-motion'],
  },
];

export default screencasts;
