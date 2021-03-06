import { Reducer } from 'redux';
import { DynamicModesActionTypes, DynamicModesState, DynamicModesAction } from './types';
import { createNewModeGroup, createNewMode } from './utils';

const initialState: DynamicModesState = {
  ...createNewModeGroup(),
};

const reducer: Reducer<DynamicModesState, DynamicModesAction> = (state = initialState, action) => {
  switch (action.type) {
    case DynamicModesActionTypes.CHANGE_MODE_VALUES: {
      const { groupId, modeId, value } = action.payload;
      return {
        ...state,
        [groupId]: {
          ...(state[groupId] || {}),
          modes: {
            ...state[groupId].modes,
            [modeId]: value,
          },
        },
      };
    }
    case DynamicModesActionTypes.ADD_MODE_GROUP: {
      return {
        ...state,
        ...createNewModeGroup(),
      };
    }
    case DynamicModesActionTypes.ADD_MODE: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          modes: {
            ...state[action.payload].modes,
            ...createNewMode(),
          },
        },
      };
    }
    case DynamicModesActionTypes.REMOVE_MODE: {
      const { groupId, modeId } = action.payload;
      const group = { ...state[groupId] };
      delete group.modes[modeId];
      return {
        ...state,
        [groupId]: group,
      };
    }
    case DynamicModesActionTypes.REMOVE_MODE_GROUP: {
      const groups = { ...state };
      delete groups[action.payload];
      return groups;
    }
    default: {
      return state;
    }
  }
};

export { reducer as dynamicModeGroupsReducer };
