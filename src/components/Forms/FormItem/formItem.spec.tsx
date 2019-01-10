import * as React from 'react';
import { shallow } from 'enzyme';
import FormItem from '.';
import { StyledFormItem, StyledLabel } from './styled';

test('FormItem with label', () => {
  const TEST_LABEL = 'testLabel';
  const GRID_AREA = 'testArea';
  const formItem = shallow(<FormItem label={TEST_LABEL} gridArea={GRID_AREA}/>);

  expect(formItem.find(StyledFormItem)).toHaveLength(1);
  expect(formItem.find(StyledFormItem).prop('gridArea')).toEqual(GRID_AREA);
  expect(formItem.find(StyledLabel)).toHaveLength(1);
});

test('FormItem without label', () => {
  const formItem = shallow(<FormItem/>);

  expect(formItem.find(StyledFormItem)).toHaveLength(1);
  expect(formItem.find(StyledLabel)).toHaveLength(0);
});
