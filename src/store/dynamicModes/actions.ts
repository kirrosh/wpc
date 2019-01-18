import { OptionType } from 'common/Select/types';
import { action } from 'typesafe-actions';
import { MinMaxValues } from 'common/MinMax/types';
import { DynamicModesActionTypes } from './types';

export const setModeName = (value: string) => {
  return action(DynamicModesActionTypes.CHANGE_MODE_NAME, value);
};

export const setModeValue = (value: MinMaxValues) => {
  return action(DynamicModesActionTypes.CHANGE_MODE_VALUES, value);
};
