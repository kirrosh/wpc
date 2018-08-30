import React from 'react';
import { StyledHeaderLayout, HeaderLink, StyledHeader, HeaderSpacer } from './styled';
import { Link } from 'react-router-dom';

class HeaderLayout extends React.PureComponent {
  render() {
    return (
      <>
        <StyledHeaderLayout>
          <StyledHeader>
            <Link to={'/javascript'}><HeaderLink>Javascript</HeaderLink></Link>
            <Link to={'/css'}><HeaderLink>Css</HeaderLink></Link>
            <Link to={'/design'}><HeaderLink>Design</HeaderLink></Link>
          </StyledHeader>
        </StyledHeaderLayout>
        <HeaderSpacer/>
      </>
    );
  }
}

export default HeaderLayout;
