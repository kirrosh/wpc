import * as React from 'react';
import { StyledFilterGroupMode } from './styled';
import Select from 'common/Select';
import MinMax from 'common/MinMax';
import Button from 'common/Button';
import { FilterGroupModeProps } from './types';

class FilterGroupMode extends React.PureComponent<FilterGroupModeProps> {
  render() {
    const { modeName, modeValues } = this.props;
    return (
      <StyledFilterGroupMode>
        <Select value={modeName}/>
        <MinMax value={modeValues} onChange={console.log}/>
        <Button text={'X'}/>
      </StyledFilterGroupMode>
    );
  }
}

export default FilterGroupMode;
