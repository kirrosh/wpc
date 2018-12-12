/**
 * Типизирование темы через переопределение модуля
 */

import * as styledComponents from 'styled-components';

import theme  from './theme';
const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, typeof theme>;

export { css, keyframes, ThemeProvider, ThemedStyledProps };
export default styled;
