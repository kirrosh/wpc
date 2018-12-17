import * as React from 'react';
import { connect } from 'react-redux';
import { StyledHeader, Title, Actions, ColorSwitcher, SubActions } from './styled';
import { switchTheme } from 'store/layout/actions';
import { HeaderProps } from './types';
import { DispatchPropsSignature } from 'types/helpers';

type AllProps = HeaderProps
  & DispatchPropsSignature<typeof mapDispatchToProps>;

export class Header extends React.PureComponent<AllProps> {
  onColorSwitcherLightClick = () => {
    this.props.switchTheme('light');
  }
  onColorSwitcherDarkClick = () => {
    this.props.switchTheme('dark');
  }
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
            <ColorSwitcher onClick={this.onColorSwitcherDarkClick}>
              Dark
            </ColorSwitcher>
            /
            <ColorSwitcher onClick={this.onColorSwitcherLightClick}>
              Light
            </ColorSwitcher>
          </SubActions>
        </StyledHeader>
    );
  }
}

const mapDispatchToProps = {
  switchTheme,
};

export default connect(null, mapDispatchToProps)(Header);
