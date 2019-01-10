import * as React from 'react';
import ReactSelect from 'react-select';
import { shallow } from 'enzyme';
import Select from '.';
import { StyledSelect } from './styled';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

test('Select', () => {
  const select = shallow(<Select value={options[0]} options={options}/>);

  expect(select.find(StyledSelect)).toHaveLength(1);
  expect(select.find(ReactSelect)).toHaveLength(1);
  expect(select.find(ReactSelect).prop('value')).toEqual(options[0]);
});
