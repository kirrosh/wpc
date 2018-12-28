import { OptionType } from 'common/Select/types';
import { action } from 'typesafe-actions';
import { SearchFiltersActionTypes } from './types';

export const setOptionValue = (fieldName: string, value: OptionType) => {
  return action(SearchFiltersActionTypes.SET_OPTION_VALUE, { fieldName, value });
};

export const setStringValue = (fieldName: string, value: string) => {
  return action(SearchFiltersActionTypes.SET_STRING_VALUE, { fieldName, value });
};
