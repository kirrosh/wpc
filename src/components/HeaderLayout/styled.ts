import styled from 'styled-components';
import GridLayout from 'components/GridLayout';
import Link from 'react-router-dom';

export const StyledHeaderLayout = styled(GridLayout)`
  background-color: #f9f9f9;
  border-bottom: 1px solid #16e3f1;
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  height: 100%;
  a {
    text-decoration: none;
    height: 100%;
  }
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-gap: 8px; */
`;

export const HeaderLink = styled.div`
  text-decoration: none;
  height: 100%;
  height: 32px;
  align-items: center;
  display: flex;
  background-color: #f9f9f9;
  border: 1px solid red;
  margin-right: 8px;
`;
