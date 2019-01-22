import { combineReducers, createStore, Store, ReducersMapObject, Reducer } from 'redux';
import { layoutReducer } from './layout/reducer';
import { ReducerState } from 'types/helpers';
import searchFiltersReducer from './searchFilters/reducer';
import { dynamicModeGroupsReducer } from './dynamicModeGroups/reducer';

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
const reducerObject = {
  layout: layoutReducer,
  searchFilters: searchFiltersReducer,
  dynamicModeGroups: dynamicModeGroupsReducer,
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.

export const rootReducer = combineReducers(reducerObject);
export type ApplicationState = ReducerState<typeof rootReducer>;

/* eslint-disable no-underscore-dangle */
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
