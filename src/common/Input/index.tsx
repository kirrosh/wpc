import * as React from 'react';
import { StyledInput } from './styled';
import { InputProps } from './types';

class Input extends React.PureComponent<InputProps> {
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e.currentTarget.value, e);
  }
  render() {
    const { value, className, placeholder } = this.props;
    return (
      <StyledInput value={value} onChange={this.onChange} className={className} placeholder={placeholder}/>
    );
  }
}

export default Input;
