import { Props } from 'react-select/lib/Select';

export type SelectProps<T> = {}
  & Props<T>;

export type StyledSelectProps = {
  withValue?: boolean;
}
