import { InputProps } from 'common/Input/types';

export type SearchOptionProps = {
  onClick: (id: string, name: string) => void;
} & SearchOption;

type SearchOption = {
  id: string;
  name: string;
};

export type SearchProps<T extends SearchOption = SearchOption> = {
  options: T[];
} & InputProps;

export type SearchState = {
  showOptions: boolean;
};
