import { css } from 'styled-components';

export type GridColumns = [
  string?,
  string?,
  string?,
  string?,
  string?
];

export const createGrid = (temlate: GridColumns) => css`
  display: grid;
  grid-template-columns: ${temlate.reduce((acc, item) => `${acc} ${item}`, ``)};
` as any as TemplateStringsArray;

export const createDefaultGrid = (contentSize: string) => createGrid(['0.5fr', '0.5fr', contentSize, '0.5fr', '0.5fr']);
