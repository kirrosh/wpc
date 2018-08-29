import React from 'react';
import styled from 'styled-components';
import { GridOptions } from './types';


const performComponent = (Component: React.ReactElement<any>, gridOptions: GridOptions) => {
  const SC = styled(Component.type as any)`
    grid-column-start: ${gridOptions.gridColumnStart};
    grid-column-end: ${gridOptions.gridColumnEnd};
  `;
  return (<SC {...Component.props}/>);
};

export const performSimple = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 3, gridColumnEnd: 4 });
export const performWide = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 1, gridColumnEnd: 6 });
