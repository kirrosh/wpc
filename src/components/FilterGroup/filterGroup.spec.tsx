import * as React from 'react';
import { shallow } from 'enzyme';
import { StyledFilterGroupMode } from './styled';
import FilterGroupMode from './FilterGroupMode';
import { FilterGroupModeProps } from './types';
import Button from 'common/Button';
import Select from 'common/Select';

test('filter group mode', () => {
  const MODE: FilterGroupModeProps = {
    modeId: 'id',
    modeValues: {
      name: 'name',
      values: {
        max: 'max',
        min: 'min',
      },
    },
    onModeRemove: () => {},
    onModeValuesChange: () => {},
  };

  const element = shallow(<FilterGroupMode {...MODE}/>);

  expect(element.find(StyledFilterGroupMode)).toHaveLength(1);
  expect(element.find(Select)).toHaveLength(1);
  expect(element.find(Button)).toHaveLength(1);
});

