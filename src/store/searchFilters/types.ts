import { MinMaxValues } from 'common/MinMax/types';
import { SocketColorsValues } from 'common/SocketColors/types';
import { OptionType } from 'common/Select/types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export enum SearchFiltersActionTypes {
  SET_OPTION_VALUE = 'SET_OPTION_VALUE',
  SET_STRING_VALUE = 'SET_STRING_VALUE',
  SET_MIN_MAX_VALUES = 'SET_MIN_MAX_VALUES',
  SET_SOCKET_COLOR_VALUES = 'SET_SOCKET_COLOR_VALUES',
}

export type SearchFiltersAction = ActionType<typeof actions>;

export type SearchFiltersState = {
  // Main
  type: OptionType;
  league: OptionType;
  base: OptionType;
  name: string;
  // Offense
  damage: MinMaxValues;
  aps: MinMaxValues;
  crit: MinMaxValues;
  dps: MinMaxValues;
  eDps: MinMaxValues;
  pDps: MinMaxValues;
  // Defense
  armour: MinMaxValues;
  evasion: MinMaxValues;
  shield: MinMaxValues;
  block: MinMaxValues;
  // Sockets
  sockets: MinMaxValues;
  links: MinMaxValues;
  colors: SocketColorsValues;
  linked: SocketColorsValues;
  // Requirements
  level: MinMaxValues;
  strength: MinMaxValues;
  dexterity: MinMaxValues;
  intelligence: MinMaxValues;
};
