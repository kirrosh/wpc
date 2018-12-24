import styled from 'styled';

export const StyledForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    "league type base"
    "name name name"
    ". . ."
    "damage . ."
  ;
`;

export const FormHeader = styled.div`
  font-size: 1.125em;
  padding: 0 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`;
