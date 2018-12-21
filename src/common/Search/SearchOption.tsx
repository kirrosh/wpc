import * as React from 'react';
import { SearchOptionProps } from './types';
import { StyledSearchOption, MatchedString } from './styled';

class SearchOption extends React.PureComponent<SearchOptionProps> {
  onClick = () => {
    const { id, name, onClick } = this.props;
    onClick(id, name);
  }

  formatLabel = () => {
    const { id, name, value } = this.props;
    if (value) {
      const startIndex = name.toLowerCase().indexOf(value.toLowerCase());
      if (startIndex > -1) {
        return (
        <>
          {name.substring(0, startIndex)}
          <MatchedString>{name.substring(startIndex, value.length + startIndex)}</MatchedString>
          {name.substring(startIndex + value.length)}
        </>);
      }
      return name;
    }
    return name;
  }

  render() {
    const { id, name, value } = this.props;
    return (
      <StyledSearchOption onClick={this.onClick}>
        {this.formatLabel()}
      </StyledSearchOption>
    );
  }
}

export default SearchOption;
