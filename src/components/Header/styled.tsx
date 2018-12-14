import styled, { css } from 'styled';

export const StyledHeader = styled.div`
  height: 100px;
  padding: 0 15px;
  display: grid;
  margin-top: 26px;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 56px 36px;
  grid-template-areas: 'title x actions'
                       'subtitle x subActions';
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 1.6875em;
  font-weight: bold;
  font-style: normal;
  color: ${({ theme }) => theme.colors.text.primary};
  text-rendering: optimizeLegibility;
  margin-top: .2em;
  margin-bottom: .5em;
  line-height: 1.2125em;
`;

export const Actions = styled.div`
  grid-area: actions;
  padding: 6px;
  font-weight: bold;
  font-style: normal;
  text-rendering: optimizeLegibility;
  margin-top: .2em;
  margin-bottom: .5em;
  line-height: 0.75em;
  /* line-height: 1.2125em; */
  font-size: 1.6875em;
  background-color: ${({ theme }) => theme.colors.background.reversed};
  color: ${({ theme }) => theme.colors.text.reversed};
`;

export const ColorSwitcher = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  margin: 0 4px;
`;
export const SubActions = styled.div`
  display: flex;
  grid-area: subActions;
  color: ${({ theme }) => theme.colors.link.primary};
  height: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  justify-content: flex-end;
  ${ColorSwitcher}:hover {
    color: ${({ theme }) => theme.colors.link.hovered};
  }
`;
