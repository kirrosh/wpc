import * as React from 'react';
import { SocketColorsInput, StyledSocketColors } from './styled';
import { SocketColorsProps, SocketColorStyle } from './types';

class SocketColors extends React.PureComponent<SocketColorsProps> {

  render() {
    const { value } = this.props;
    return (
      <StyledSocketColors>
        <SocketColorsInput
          onChange={console.log}
          value={value.red}
          placeholder={'R'}
          socketColor={SocketColorStyle.Red}
        />
        <SocketColorsInput
          onChange={console.log}
          value={value.green}
          placeholder={'G'}
          socketColor={SocketColorStyle.Green}
        />
        <SocketColorsInput
          onChange={console.log}
          value={value.blue}
          placeholder={'B'}
          socketColor={SocketColorStyle.Blue}
        />
        <SocketColorsInput
          onChange={console.log}
          value={value.white}
          placeholder={'W'}
          socketColor={SocketColorStyle.White}
        />
      </StyledSocketColors>
    );
  }
}

export default SocketColors;
