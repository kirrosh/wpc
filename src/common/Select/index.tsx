import * as React from 'react';
import ReactSelect from 'react-select';
import { SelectProps } from './types';
import { StyledSelect } from './styles';

class Select<OptionType = { label: string; value: string }> extends React.PureComponent<SelectProps<OptionType>> {
  render() {
    return(
      <StyledSelect>
        <ReactSelect {...this.props} classNamePrefix="react-select"/>
      </StyledSelect>
    );
  }
}

export default Select;
