import * as React from 'react';
import { SearchOptionProps } from './types';
import { StyledSearchOption, MatchedString } from './styled';

class SearchOption extends React.PureComponent<SearchOptionProps> {
  onClick = () => {
    const { value, label, onClick } = this.props;
    onClick(value, label);
  }

  formatLabel = () => {
    const { label, inputValue } = this.props;
    if (inputValue) {
      const startIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
      if (startIndex > -1) {
        return (
        <>
          {label.substring(0, startIndex)}
          <MatchedString>{label.substring(startIndex, inputValue.length + startIndex)}</MatchedString>
          {label.substring(startIndex + inputValue.length)}
        </>);
      }
      return label;
    }
    return label;
  }

  render() {
    return (
      <StyledSearchOption onClick={this.onClick}>
        {this.formatLabel()}
      </StyledSearchOption>
    );
  }
}

export default SearchOption;
