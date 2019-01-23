import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { MinMaxValues } from 'common/MinMax/types';

export enum DynamicModesActionTypes {
  CHANGE_MODE_VALUES = 'CHANGE_MODE_VALUES',
  ADD_MODE_GROUP = 'ADD_MODE_GROUP',
  REMOVE_MODE_GROUP = 'REMOVE_MODE_GROUP',
  ADD_MODE = 'ADD_MODE',
  REMOVE_MODE = 'REMOVE_MODE',
}

export type DynamicModesState = Record<string, DynamicModeGroup>;

export type DynamicModeGroup = {
  modes: Record<string, DynamicMode>;
  type: string;
};

export type DynamicMode = {
  name: string;
  values: MinMaxValues;
};

export type DynamicModesAction = ActionType<typeof actions>;
