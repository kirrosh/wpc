import styled from 'styled-components';
import GridLayout from 'components/GridLayout';

export const StyledHeaderLayout = styled(GridLayout)`
  background-color: #f9f9f9;
  background-color: ${props => props.theme.colors.main};
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  a {
    text-decoration: none;
    height: 100%;
  }
`;

export const HeaderLink = styled.h3`
  text-decoration: none;
  align-items: center;
  display: flex;
  color: ${props => props.theme.colors.font.light};
  margin-right: 8px;
`;
