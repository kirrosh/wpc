import styled from 'styled-components';
import { GridLayoutProps } from 'components/GridLayout/types';
import { createDefaultGrid } from 'components/GridLayout/mixins';

export const StyledGridLayout = styled.div`
  ${({ columnSize }: GridLayoutProps) => createDefaultGrid(columnSize ? columnSize : '10fr')}
`;
