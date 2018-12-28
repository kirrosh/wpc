import { createSelector } from 'reselect';
import { ApplicationState } from 'store';

export const getSearchFiltersState = (state: ApplicationState) => state.searchFilters;

export const mainFormSelector = createSelector(
  getSearchFiltersState,
  ({ name, league, base, type }) => ({ name, league, base, type }),
);
