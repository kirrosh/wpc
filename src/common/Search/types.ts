import { InputProps } from 'common/Input/types';

export type SearchOptionProps = {
  onClick: (value: string, label: string) => void;
  inputValue: string;
} & SearchOptionType;

export type SearchOptionType = {
  value: string;
  label: string;
};

export type SearchProps<T extends SearchOptionType = SearchOptionType> = {
  options: T[];
} & InputProps;

export type SearchState = {
  showOptions: boolean;
};
