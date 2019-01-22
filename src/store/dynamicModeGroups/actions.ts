import { action } from 'typesafe-actions';
import { DynamicModesActionTypes, DynamicMode } from './types';

export const setModeValues = (payload: {groupId: string; modeId: string; value: DynamicMode}) => {
  return action(DynamicModesActionTypes.CHANGE_MODE_VALUES, payload);
};

export const addModeGroup = () => {
  return action(DynamicModesActionTypes.ADD_MODE_GROUP);
};

export const addMode = (groupId: string) => {
  return action(DynamicModesActionTypes.ADD_MODE, groupId);
};

export const removeMode = (payload: {groupId: string; modeId: string}) => {
  return action(DynamicModesActionTypes.REMOVE_MODE, payload);
};
