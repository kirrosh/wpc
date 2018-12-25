import * as React from 'react';
import { FormItemProps } from './types';
import { StyledFormItem, StyledLabel } from './styled';

class FormItem extends React.PureComponent<FormItemProps> {
  render() {
    const { children, label, gridArea } = this.props;
    return(
      <StyledFormItem gridArea={gridArea}>
        {label && <StyledLabel>{label}</StyledLabel>}
        {children}
      </StyledFormItem>
    );
  }
}

export default FormItem;
