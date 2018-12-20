import styled from 'styled';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.background.primary};
  height: 34px;
  border: ${({ theme }) => theme.styles.border};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0 8px;
  &:focus {
    box-shadow: 0 0 5px #999;
    outline-color: rgb(190, 182, 152);
    outline-style: none;
  }
`;
