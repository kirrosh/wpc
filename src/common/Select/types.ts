import { Props } from 'react-select/lib/Select';

export type OptionType = {
  label: string;
  value: string;
} | null | undefined | {
  label: string;
  value: string;
}[] ;

export type SelectProps<T> =
  & Props<T>
  & { };

export type StyledSelectProps = {
  withValue?: boolean;
};
