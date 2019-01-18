import { Reducer } from 'redux';
import { DynamicModesActionTypes, DynamicModesState, DynamicModesAction } from './types';

const initialState: DynamicModesState = {
  name: '',
  values: {
    max: '',
    min: '',
  },
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<DynamicModesState, DynamicModesAction> = (state = initialState, action) => {
  switch (action.type) {
    case DynamicModesActionTypes.CHANGE_MODE_NAME: {
      return { ...state, name: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as dynamicModesReducer };
