import * as React from 'react';
import { FormItemProps } from './types';

class FormItem extends React.PureComponent<FormItemProps> {
  render() {
    const { children, label } = this.props;
    return(
      <div>
        {label && <div>{label}</div>}
        {children}
      </div>
    );
  }
}

export default FormItem;
