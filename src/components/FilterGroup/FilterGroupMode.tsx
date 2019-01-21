import * as React from 'react';
import { StyledFilterGroupMode } from './styled';
import Select from 'common/Select';
import MinMax from 'common/MinMax';
import Button from 'common/Button';
import { FilterGroupModeProps } from './types';
import { MinMaxValues } from 'common/MinMax/types';

class FilterGroupMode extends React.PureComponent<FilterGroupModeProps> {
  onRemove = () => {
    const { onModeRemove, modeId } = this.props;
    onModeRemove(modeId);
  }
  onMinMaxChange = (values: MinMaxValues) => {
    const { modeValues, onModeValuesChange, modeId } = this.props;
    onModeValuesChange(modeId, {
      ...modeValues,
      values,
    });
  }
  render() {
    const { name, values } = this.props.modeValues;
    return (
      <StyledFilterGroupMode>
        <Select value={name}/>
        <MinMax value={values} onChange={this.onMinMaxChange}/>
        <Button text={'X'} onClick={this.onRemove}/>
      </StyledFilterGroupMode>
    );
  }
}

export default FilterGroupMode;
