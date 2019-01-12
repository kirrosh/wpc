import * as React from 'react';
import FilterGroupMode from './FilterGroupMode';
import { StyledFilterGroup } from './styled';

class FilterGroup extends React.PureComponent {
  render() {
    return(
      <StyledFilterGroup>
        <FilterGroupMode/>
      </StyledFilterGroup>
    );
  }
}

export default FilterGroup;
