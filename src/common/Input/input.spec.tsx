import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '.';
import { StyledInput } from './styled';


const emptyFunc = () => {};

test('Input', () => {
  const value = 'testValue';
  const input = shallow(<Input onChange={emptyFunc} value={value} />);

  expect(input.find(StyledInput)).toHaveLength(1);
});
