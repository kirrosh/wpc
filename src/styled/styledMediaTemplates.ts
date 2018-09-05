import { css, InterpolationValue } from 'styled-components';

export type DisplaySizes = {
  desktop: number;
  tablet: number;
  phone: number;
};

export type MediaTemplates = Record<keyof DisplaySizes, (args: TemplateStringsArray | InterpolationValue[]) => InterpolationValue[]>;


const sizes: DisplaySizes = {
  desktop: 1170,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const styledMediaTemplates: MediaTemplates = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label as keyof DisplaySizes] / 16;
  const foo = (args: TemplateStringsArray | InterpolationValue[]) => css`
    @media (max-width: ${emSize}em) {
      ${args}
    }
  `;
  return {
    ...acc,
    [label]: foo,
  };
}, {} as MediaTemplates);
