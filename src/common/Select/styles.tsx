import styled from 'styled';
import { StyledSelectProps } from './types';

export const StyledSelect = styled.div<StyledSelectProps>`
  .react-select__control {
    background: ${({ theme }) => theme.select.background};
    border: ${({ theme, withValue }) => withValue ? theme.select.withValueBorder : theme.select.border};
    height: 2.3125em;
    min-height: 2.3125em;
    border-radius: 0;
  }

  .react-select__single-value {
    font-size: .875em;
    line-height: 2.25em;
    color: ${({ theme }) => theme.select.color};
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.select.color};
  }

  .react-select__dropdown-indicator {
    color: ${({ theme }) => theme.select.color};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors.background.primary};
    border: ${({ theme }) => theme.select.border};
    color: ${({ theme }) => theme.select.color};
    border-radius: 0;
  }

  .react-select__option--is-focused {
    color: ${({ theme }) => theme.colors.link.hovered};
    background-color: ${({ theme }) => theme.colors.background.body};
  }

  .react-select__option--is-selected {
    color: ${({ theme }) => theme.colors.link.hovered};
    background-color: ${({ theme }) => theme.colors.background.body};
    border: ${({ theme }) => theme.select.border};
  }

  .react-select__input {
    font-size: .875em;
    line-height: 2.25em;
    color: ${({ theme }) => theme.select.color};
  }
`;
