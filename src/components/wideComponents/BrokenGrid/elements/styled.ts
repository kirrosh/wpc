import styled from 'styled';
import { GridElementProps } from './types';

export const StyledBrokenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: repeat(12, auto);
  height: 50vh;
  border: 1px solid black;
`;

const createBrokenGridElement = (layout: GridElementProps) => {
  return `
    ${layout.columnStart && `grid-column-start: ${layout.columnStart}`};
    ${layout.columnEnd && `grid-column-end: ${layout.columnEnd}`};
    ${layout.rowStart && `grid-row-start: ${layout.rowStart}`};
    ${layout.rowEnd && `grid-row-end: ${layout.rowEnd}`};
  `;
};


export const StyledBigColoredLabel = styled.div`
  background-color: #f13503;
  height: 100%;
  width: 100%;
`;

export const GridElement = styled.div<GridElementProps>`
  ${createBrokenGridElement}
`;
