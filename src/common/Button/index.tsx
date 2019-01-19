import * as React from 'react';
import { StyledButton } from './styled';

// foundation-icons
type ButtonProps = {
  text?: string;
  onClick?: (e: any) => void;
};

class Button extends React.PureComponent<ButtonProps> {
  render() {
    return (
      <StyledButton {...this.props}>
        {this.props.text}
      </StyledButton>
    );
  }
}

export default Button;
