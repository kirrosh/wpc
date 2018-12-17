import { combineReducers, createStore } from 'redux';
import { layoutReducer } from './layout/reducer';
import { LayoutState } from './layout/types';
import { Connect, connect } from 'react-redux';

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
export interface ApplicationState {
  layout: LayoutState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
});

export const store = createStore(rootReducer);
