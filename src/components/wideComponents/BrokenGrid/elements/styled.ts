import styled from 'styled';
import { GridElementProps } from './types';

export const StyledBrokenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: repeat(24, 0.5fr);
  height: 50vh;
`;

const createBrokenGridElement = (layout: GridElementProps) => {
  return `
    grid-column-start: ${layout.columnStart};
    grid-column-end: ${layout.columnEnd};
    grid-row-start: ${layout.rowStart};
    grid-row-end: ${layout.rowEnd};
  `;
};


export const StyledBigColoredLabel = styled.div`
  background-color: #f13503;
  height: 100%;
  width: 100%;
`;

export const LabelRight = styled.div`
  position: absolute;
    top: 0;
    left: 63%;
    width: 58%;
    height: 100%;
    background-color: #ff3600;
    -webkit-transform: skewX(-22deg);
    transform: skewX(-22deg);
    overflow: hidden;
`;

export const GridElement = styled.div<GridElementProps>`
  ${createBrokenGridElement}
  position: relative;
`;
