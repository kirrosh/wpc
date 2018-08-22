import styled from 'styled-components';

export const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 32px 1fr;
  width: 100%;
  body {
    margin: 0px;
  }
`;

export const HeaderLayout = styled.div`
  background-color: #f9f9f9;
  grid-template-rows: 32px 1fr;
  border-bottom: 1px solid #16e3f1;
  width: 100%;
  height: 100%;
`;
