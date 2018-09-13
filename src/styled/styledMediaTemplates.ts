import { css, InterpolationValue, FlattenInterpolation } from 'styled-components';

export type DisplaySizes = {
  desktop: number;
  tablet: number;
  phone: number;
};

export type MediaTemplatesFuntion = (args: TemplateStringsArray | InterpolationValue[] | FlattenInterpolation<any>[]) => InterpolationValue[] | FlattenInterpolation<any>[];
export type MediaTemplates = Record<keyof DisplaySizes, MediaTemplatesFuntion>;


const sizes: DisplaySizes = {
  desktop: 1170,
  tablet: 768,
  phone: 376,
};


// iterate through the sizes and create a media template
// can be used in 2 ways:
// styledMediaTemplates.desktop(css`{some styles}`)
// styledMediaTemplates.desktop`{some styles}`
export const styledMediaTemplates: MediaTemplates = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label as keyof DisplaySizes] / 16;
  const foo: MediaTemplatesFuntion = args => css`
    @media (max-width: ${emSize}em) {
      ${args}
    }
  `;
  return {
    ...acc,
    [label]: foo,
  };
}, {} as MediaTemplates);
