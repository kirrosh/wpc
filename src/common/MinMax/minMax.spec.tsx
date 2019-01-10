import * as React from 'react';
import { shallow } from 'enzyme';
import MinMax from '.';
import { StyledMixMax, MinMaxInput } from './styled';


const emptyFunc = () => {};

test('MinMax', () => {
  const value = {
    min: '0',
    max: '2',
  };
  const search = shallow(<MinMax onChange={emptyFunc} value={value}/>);

  expect(search.find(StyledMixMax)).toHaveLength(1);
  expect(search.find(MinMaxInput)).toHaveLength(2);
});
