import { ThemeVariant } from 'styled';

export type LayoutState = {
  theme: ThemeVariant;
};

export const enum LayoutActionTypes {
  SWITCH_THEME = '@@layout/SWITCH_THEME',
}
