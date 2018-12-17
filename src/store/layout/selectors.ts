import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import darkTheme from 'styled/darkTheme';
import lightTheme from 'styled/lightTheme';

export const getLayoutState = (state: ApplicationState) => state.layout;

export const themeSelector = createSelector(
  getLayoutState,
  state => state.theme === 'dark' ? darkTheme : lightTheme,
);
