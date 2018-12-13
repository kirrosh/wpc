import * as React from 'react';
import { StyledHeader, Title, Actions } from './styled';
class Header extends React.PureComponent {
  render() {
    return (
        <StyledHeader>
          <Title>
            Path of Exile auction house
          </Title>
          <Actions>
            Currency market
          </Actions>
        </StyledHeader>
    );
  }
}

export default Header;
