import * as React from 'react';
import { StyledFilterGroupMode } from './styled';
import Select from 'common/Select';
import MinMax from 'common/MinMax';
import Button from 'common/Button';

class FilterGroupMode extends React.PureComponent {
  render() {
    const value = {
      max: '',
      min: '',
    };
    return (
      <StyledFilterGroupMode>
        <Select/>
        <MinMax value={value} onChange={console.log}/>
        <Button text={'X'}/>
      </StyledFilterGroupMode>
    );
  }
}

export default FilterGroupMode;
