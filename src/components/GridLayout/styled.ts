import styled from 'styled-components';
import { createDefaultGrid } from 'styled/grid/mixins';
import { GridLayoutSize } from 'components/GridLayout/types';

export const StyledGridLayout = styled.div<GridLayoutSize>`
  ${({ columnSize }: GridLayoutSize) => createDefaultGrid(columnSize ? columnSize : '10fr')}
`;
