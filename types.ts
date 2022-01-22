export type MDXFrontMatter = {
  date: string;
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: Array<string>;
};

export type PostFrontMatter = {
  date: string;
  title: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: Array<string>;
};

export type VideoFrontMatter = {
  date: string;
  title: string;
  description: string;
  id: string;
  tags?: Array<string>;
};

export type FeedFrontMatter = {
  date: string;
};

export type GridCols =
  | 'grid-cols-1'
  | 'sm:grid-cols-1'
  | 'md:grid-cols-1'
  | 'grid-cols-2'
  | 'sm:grid-cols-2'
  | 'md:grid-cols-2'
  | 'grid-cols-3'
  | 'sm:grid-cols-3'
  | 'md:grid-cols-3';
