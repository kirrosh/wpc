import { combineReducers, createStore } from 'redux';
import { layoutReducer } from './layout/reducer';
import { ReducerState } from 'types/helpers';

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
const reducerObject = {
  layout: layoutReducer,
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers(reducerObject);
export type ApplicationState = ReducerState<typeof rootReducer>;

export const store = createStore(rootReducer);
