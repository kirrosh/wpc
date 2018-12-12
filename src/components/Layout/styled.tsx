import styled from 'styled';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.background.black};
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 10fr 0.5fr 0.5fr;
  min-height: 100%;
`;

export const LayoutContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  background-color: ${({ theme }) => theme.colors.background.dark};
  color: white;
`;
