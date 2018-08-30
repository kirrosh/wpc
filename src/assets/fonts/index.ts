import { css } from 'styled-components';
import ProductSansTTF from './ProductSans-Regular.ttf';
import ProductSansEOT from './ProductSans-Regular.eot';
import ProductSansWOFF from './ProductSans-Regular.woff';

export const productSansFont = css`
  @font-face {
    font-family: 'Product Sans';
    src: url(${ProductSansEOT});
    src: local('Product Sans'), local('ProductSans-Regular'),
      url(${ProductSansEOT}?#iefix) format('embedded-opentype'),
      url(${ProductSansWOFF}) format('woff'),
      url(${ProductSansTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
