import { ReactNode } from 'react';

export type GridLayoutProps = {
  className?: string;
  columnSize?: string;
};

export type FilteredReactChildren = {
  simpleComponents: ReactNode[];
  wideComponents: ReactNode[];
};
