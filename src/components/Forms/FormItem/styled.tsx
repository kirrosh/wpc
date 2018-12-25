import styled from 'styled';
import { StyledFormItemProps } from './types';

export const StyledFormItem = styled.div<StyledFormItemProps>`
  grid-area: ${({ gridArea }) => gridArea};
  grid-column-gap: 30px;
  display: grid;
  grid-template-columns: 76px auto;
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: .875em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
