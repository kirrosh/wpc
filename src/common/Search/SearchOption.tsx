import * as React from 'react';
import { SearchOptionProps } from './types';
import { StyledSearchOption } from './styled';

class SearchOption extends React.PureComponent<SearchOptionProps> {
  onClick = () => {
    const { id, name, onClick } = this.props;
    onClick(id, name);
  }

  render() {
    const { id, name } = this.props;
    return (
      <StyledSearchOption onClick={this.onClick}>
        {name}
      </StyledSearchOption>
    );
  }
}

export default SearchOption;
