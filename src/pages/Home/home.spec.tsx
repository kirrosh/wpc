import * as React from 'react';
import { shallow } from 'enzyme';
import HomePage from '.';
import Layout from 'components/Layout';

test('basic', () => {
  const home = shallow(<HomePage/>);
  expect(home.find(Layout)).toHaveLength(1);
});
