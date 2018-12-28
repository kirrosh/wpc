import { Reducer } from 'redux';
import { SearchFiltersState, SearchFiltersActionTypes } from './types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type LayoutAction = ActionType<typeof actions>;
// Type-safe initialState!
const initialState: SearchFiltersState = {
  // Main
  type: null,
  league: null,
  base: null,
  name: '',
  // Offense
  damage: {
    max: '',
    min: '',
  },
  aps: {
    max: '',
    min: '',
  },
  crit: {
    max: '',
    min: '',
  },
  dps: {
    max: '',
    min: '',
  },
  eDps: {
    max: '',
    min: '',
  },
  pDps: {
    max: '',
    min: '',
  },
  // Defense
  armour: {
    max: '',
    min: '',
  },
  evasion: {
    max: '',
    min: '',
  },
  shield: {
    max: '',
    min: '',
  },
  block: {
    max: '',
    min: '',
  },
  // Sockets
  sockets: {
    max: '',
    min: '',
  },
  links: {
    max: '',
    min: '',
  },
  colors: {
    blue: '',
    green: '',
    red: '',
    white: '',
  },
  linked: {
    blue: '',
    green: '',
    red: '',
    white: '',
  },
  // Requirements
  level: {
    max: '',
    min: '',
  },
  strength: {
    max: '',
    min: '',
  },
  dexterity: {
    max: '',
    min: '',
  },
  intelligence: {
    max: '',
    min: '',
  },
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const searchFiltersReducer: Reducer<SearchFiltersState, LayoutAction> = (state = initialState, action) => {
  switch (action.type) {
    case SearchFiltersActionTypes.SET_OPTION_VALUE: {
      const { fieldName, value } = action.payload;
      return { ...state, [fieldName]: value };
    }
    case SearchFiltersActionTypes.SET_STRING_VALUE: {
      const { fieldName, value } = action.payload;
      return { ...state, [fieldName]: value };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export default searchFiltersReducer;
