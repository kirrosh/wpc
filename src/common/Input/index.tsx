import * as React from 'react';
import { StyledInput } from './styled';
import { InputProps } from './types';

class Input extends React.PureComponent<InputProps> {
  render() {
    const { onChange, value } = this.props;
    return (
      <StyledInput value={value}/>
    );
  }
}

export default Input;
