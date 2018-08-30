import styled from 'styled-components';
import { productSansFont } from 'assets/fonts';

export const AppLayout = styled.div`
  ${productSansFont}
  font-family: Product Sans;
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.background.light};
  width: 100%;
  min-height: 1280px;
  body {
    margin: 0px;
  }
`;
