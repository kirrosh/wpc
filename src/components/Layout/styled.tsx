import styled from 'styled';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.background.body};
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 10fr 0.5fr 0.5fr;
  min-height: 100%;
`;

export const LayoutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: ${({ theme }) => theme.styles.border};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.styles.fontFamily};
`;

export const ContentWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;
