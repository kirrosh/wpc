import * as React from 'react';
import ReactSelect from 'react-select';
import { SelectProps } from './types';
import { StyledSelect } from './styles';

const NO_OPTIONS_MESSAGE = 'No results match';
class Select<OptionType = { label: string; value: string }> extends React.PureComponent<SelectProps<OptionType>> {
  noOptionsMessage = (obj: { inputValue: string }) => `${NO_OPTIONS_MESSAGE} "${obj.inputValue}"`
  render() {
    return(
      <StyledSelect>
        <ReactSelect
        {...this.props}
        classNamePrefix="react-select"
        isSearchable={true}
        noOptionsMessage={this.noOptionsMessage}/>
      </StyledSelect>
    );
  }
}

export default Select;
