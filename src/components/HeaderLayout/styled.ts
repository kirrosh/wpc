import styled, { css } from 'styled-components';
import GridLayout from 'components/GridLayout';

const HEADER_HEIGHT = '60px';

export const StyledHeaderLayout = styled(GridLayout)`
  background-color: #f9f9f9;
  background-color: ${props => props.theme.colors.main};
  width: 100%;
  position: fixed;
  z-index: 500;
  top: 0;
  height: ${HEADER_HEIGHT};
`;

export const HeaderSpacer = styled.div`
  height: ${HEADER_HEIGHT};
  position: relative;
  z-index: 100;
  top: 0;
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
