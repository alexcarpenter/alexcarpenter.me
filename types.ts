import * as React from 'react';

export interface PageProps {
  title: string;
  description?: string;
  type?: 'post' | 'work';
  date?: string;
  link?: string;
  as?: 'div' | 'article';
  thumbnail?: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  slug: string;
  children: React.ReactNode;
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
