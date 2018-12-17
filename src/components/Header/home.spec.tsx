import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';
import { Title, Actions, SubActions, ColorSwitcher } from './styled';

const emptyFunc = () => {};

test('basic', () => {
  const home = shallow(<Header switchTheme={emptyFunc}/>);

  expect(home.find(Title)).toHaveLength(1);
  expect(home.find(Actions)).toHaveLength(1);
  expect(home.find(SubActions)).toHaveLength(1);
  expect(home.find(ColorSwitcher)).toHaveLength(2);
});
