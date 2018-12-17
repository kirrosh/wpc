import { Reducer } from 'redux';
import { LayoutActionTypes, LayoutState } from './types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type LayoutAction = ActionType<typeof actions>;
// Type-safe initialState!
const initialState: LayoutState = {
  theme: 'dark',
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<LayoutState, LayoutAction> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SWITCH_THEME: {
      return { ...state, loading: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as layoutReducer };
