import * as React from 'react';
import ReactSelect from 'react-select';
import { SelectProps, OptionType } from './types';
import { StyledSelect } from './styles';

const NO_OPTIONS_MESSAGE = 'No results match';
class Select<T = OptionType> extends React.PureComponent<SelectProps<T>> {
  noOptionsMessage = (obj: { inputValue: string }) => `${NO_OPTIONS_MESSAGE} "${obj.inputValue}"`;
  render() {
    return(
      <StyledSelect>
        <ReactSelect<T>
          isSearchable={true}
          noOptionsMessage={this.noOptionsMessage}
          {...this.props}
          classNamePrefix="react-select"
        />
      </StyledSelect>
    );
  }
}

export default Select;
