import * as React from 'react';
import { StyledButton } from './styled';

// foundation-icons
type ButtonProps = {
  text?: string;
};

class Button extends React.PureComponent<ButtonProps> {
  render() {
    return (
      <StyledButton>
        {this.props.text}
      </StyledButton>
    );
  }
}

export default Button;
