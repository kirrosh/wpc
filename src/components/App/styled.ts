import styled from 'styled';
import { productSansFont } from 'assets/fonts';

export const AppLayout = styled.div`
  ${productSansFont}
  font-family: Product Sans;
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.background.light};
  width: 100%;
`;
