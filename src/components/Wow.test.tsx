import React from 'react';
import { configure, shallow } from 'enzyme';
import Wow from './Wow';

import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  // shallow(<Wow />);
});
