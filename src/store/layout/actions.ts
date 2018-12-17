import { action } from 'typesafe-actions';
import { LayoutActionTypes } from './types';
import { ThemeVariant } from 'styled';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const switchTheme = (variant: ThemeVariant) => action(LayoutActionTypes.SWITCH_THEME, variant);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.

// export const fetchSuccess = (data: Hero[]) => action(HeroesActionTypes.FETCH_SUCCESS, data)
// export const fetchError = (message: string) => action(HeroesActionTypes.FETCH_ERROR, message)
