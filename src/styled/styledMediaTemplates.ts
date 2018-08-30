import { css, InterpolationValue } from 'styled-components';

export type DisplaySizes = {
  giant: number;
  desktop: number;
  tablet: number;
  phone: number;
};

export type MediaTemplates = Record<keyof DisplaySizes, (args: TemplateStringsArray) => InterpolationValue[]>;


const sizes: DisplaySizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const styledMediaTemplates: MediaTemplates = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label as keyof DisplaySizes] / 16;
  const foo = (args: TemplateStringsArray) => css`
    @media (max-width: ${emSize}em) {
      ${css(args)}
    }
  `;
  return {
    ...acc,
    [label]: foo,
  };
}, {} as MediaTemplates);
