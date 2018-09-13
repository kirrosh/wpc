/**
 * Типизирование темы через переопределение модуля
 */

import * as styledComponents from 'styled-components';

import theme  from './theme';
// в 4 версии cs должны быть исправлены баги с типами
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, typeof theme>;

export { css, injectGlobal, keyframes, ThemeProvider, ThemedStyledProps };
export default styled;
