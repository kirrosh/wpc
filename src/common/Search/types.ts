import { InputProps } from 'common/Input/types';

export type SearchOptionProps = {
  onClick: (id: string, name: string) => void;
  value: string;
} & SearchOptionType;

export type SearchOptionType = {
  id: string;
  name: string;
};

export type SearchProps<T extends SearchOptionType = SearchOptionType> = {
  options: T[];
} & InputProps;

export type SearchState = {
  showOptions: boolean;
};
