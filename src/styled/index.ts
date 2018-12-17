/**
 * Типизирование темы через переопределение модуля
 */

import * as styledComponents from 'styled-components';

import theme  from './darkTheme';
const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, typeof theme>;

type ThemeVariant = 'light' | 'dark';

export { css, keyframes, ThemeProvider, ThemedStyledProps, ThemeVariant };
export default styled;
