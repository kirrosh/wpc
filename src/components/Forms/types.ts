import { MinMaxValues } from 'common/MinMax/types';
import { SocketColorsValues } from 'common/SocketColors/types';

export type FormState = {
  name: string;
  damage: MinMaxValues;
  sockets?: SocketColorsValues;
};
