import Input from 'common/Input';
import styled from 'styled';
import { SocketColorsInputProps } from './types';

export const SocketColorsInput = styled(Input)<SocketColorsInputProps>`
  width: 12px;
  font-size: .875em;
  border-bottom: 1px solid ${({ socketColor }) => socketColor};
`;

export const StyledSocketColors = styled.div`
  display: flex;
`;
