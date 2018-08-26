import styled from 'styled-components';
import { GridLayoutProps } from 'components/GridLayout/types';
import { createDefaultGrid } from 'components/GridLayout/mixins';

export const StyledGridLayout = styled.div`
  ${({ columnSize }: GridLayoutProps) => createDefaultGrid(columnSize ? columnSize : '10fr')}
`;
export const StyledWideComponent = styled.div`
  grid-column-start: 0;
  grid-column-end: 5;
  height: 300px;
  background-color: blue;
`;

export const SimpleContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;
export const WideContent = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
`;
