import * as React from 'react';
import FilterGroupMode from './FilterGroupMode';
import { StyledFilterGroup } from './styled';
import Button from 'common/Button';
import { injectDynamicModeReducer } from 'store';

class FilterGroup extends React.PureComponent {
  addMode = (e: any) => {
    console.log(e);
    const a = injectDynamicModeReducer('wer');
    debugger;
  }
  render() {
    const mm = {
      min: '',
      max: '',
    };
    return(
      <StyledFilterGroup>
        <FilterGroupMode
          modeName={''}
          modeValues={mm}
        />
        <Button text={'Add'} onClick={this.addMode}/>
      </StyledFilterGroup>
    );
  }
}

export default FilterGroup;
