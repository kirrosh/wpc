import styled from 'styled';

export const StyledSearch = styled.div`
  position: relative;
  display: grid;
`;

export const SearchOptions = styled.div`
  position: absolute;
  top: 45px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: ${({ theme }) => theme.styles.border};
  width: 50%;
  /* left: 8px; */
`;

export const StyledSearchOption = styled.div`
  padding: 0 8px;
  height: 32px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.body};
  }
`;
