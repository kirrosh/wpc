import * as React from 'react';
import { shallow } from 'enzyme';
import SocketColors from '.';
import { StyledSocketColors, SocketColorsInput } from './styled';


const emptyFunc = () => {};

test('Input', () => {
  const value = {
    red: '0',
    green: '0',
    blue: '0',
    white: '0',
  };
  const input = shallow(<SocketColors onChange={emptyFunc} value={value} />);

  expect(input.find(StyledSocketColors)).toHaveLength(1);
  expect(input.find(SocketColorsInput)).toHaveLength(4);
});
