import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { MinMaxValues } from 'common/MinMax/types';
export enum DynamicModesActionTypes {
  CHANGE_MODE_NAME = 'CHANGE_MODE_NAME',
  CHANGE_MODE_VALUES = 'CHANGE_MODE_VALUES',
}

export type DynamicModesState = {
  name: string;
  values: MinMaxValues;
};

export type DynamicModesAction = ActionType<typeof actions>;
