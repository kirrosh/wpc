import * as React from 'react';
import { shallow, } from 'enzyme';
import HomePage from '.';

test('basic', () => {
  const home = shallow(<HomePage/>);
  expect(home.find('Layout')).toHaveLength(1);
});
