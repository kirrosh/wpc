import styled from 'styled';

export const StyledHeader = styled.div`
  height: 100px;
  padding: 0 15px;
  display: grid;
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
  color: ${({ theme }) => theme.colors.text.secondary};
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
  line-height: 1.2125em;
  font-size: 1.6875em;
  background-color: ${({ theme }) => theme.colors.background.reversed};
  color: ${({ theme }) => theme.colors.text.reversed};
`;
