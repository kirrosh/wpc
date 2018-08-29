import React from 'react';
import styled from 'styled-components';
import { Div } from 'styled';
import { GridOptions, StandartReactComponentType } from './types';

const createStyledGridItem = (type: StandartReactComponentType, gridOptions: GridOptions) => styled(type as any)`
  grid-column-start: ${gridOptions.gridColumnStart};
  grid-column-end: ${gridOptions.gridColumnEnd};
`;

export const performComponent = (Component: React.ReactElement<any>, gridOptions: GridOptions) => {
  const SC = createStyledGridItem(Component.type, gridOptions);
  return (<SC {...Component.props}/>);
};

export const performSimple = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 3, gridColumnEnd: 4 });
export const performWide = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 1, gridColumnEnd: 6 });
