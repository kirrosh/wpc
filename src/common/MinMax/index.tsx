import * as React from 'react';
import { MinMaxProps } from './types';
import { MinMaxInput, StyledMixMax } from './styled';

class MinMax extends React.PureComponent<MinMaxProps> {
  onMinChange = (min: string) => {
    const { onChange, value } = this.props;
    onChange({
      ...value,
      min,
    });
  }

  onMaxChange = (max: string) => {
    const { onChange, value } = this.props;
    onChange({
      ...value,
      max,
    });
  }

  render() {
    const { value } = this.props;
    return (
      <StyledMixMax>
        <MinMaxInput onChange={this.onMinChange} value={value.min} placeholder={'min'}/>
        <MinMaxInput onChange={this.onMaxChange} value={value.max} placeholder={'max'}/>
      </StyledMixMax>
    );
  }
}

export default MinMax;
