export interface FrontMatter {
  title: string;
  description?: string;
  type?: 'post' | 'work';
  date?: string;
  link?: string;
  thumbnail?: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  slug: string;
}

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
