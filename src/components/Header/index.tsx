import * as React from 'react';
import { StyledHeader, Title, Actions, ColorSwitcher, SubActions } from './styled';
class Header extends React.PureComponent {
  render() {
    return (
        <StyledHeader>
          <Title>
            Path of Exile auction house
          </Title>
          <Actions>
            currency market →
          </Actions>
          <SubActions>
            Theme:
            <ColorSwitcher>
              Dark
            </ColorSwitcher>
            /
            <ColorSwitcher>
              Light
            </ColorSwitcher>
          </SubActions>
        </StyledHeader>
    );
  }
}

export default Header;
