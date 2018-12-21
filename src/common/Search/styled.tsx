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
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.body};
  }
`;

export const MatchedString = styled.h3`
  font-weight: bold;
  padding-bottom: 1px;
  line-height: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
