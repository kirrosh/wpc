import styled, { css } from 'styled';
import { GridLayoutProps } from 'components/GridLayout/types';
import { createDefaultGrid } from 'components/GridLayout/mixins';
import { styledMediaTemplates } from 'styled/styledMediaTemplates';

export const StyledGridLayout = styled.div`
  ${({ columnSize }: GridLayoutProps) => {
    return css`
      display: grid;
      grid-template-columns: 0.5fr 0.5fr ${columnSize ? columnSize : '10fr'} 0.5fr 0.5fr;
      ${styledMediaTemplates.desktop(createDefaultGrid('50fr'))}
    `;
  }};
`;
