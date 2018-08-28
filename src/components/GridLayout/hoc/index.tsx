import React from 'react';
import styled from 'styled-components';

export const performComponent = (Component: React.ReactElement<any>, gridOptions: {gridColumnStart: number; gridColumnEnd: number}) => {
  if (typeof Component.type !== 'string') {
    const ST = styled(Component.type)`
      grid-column-start: ${gridOptions.gridColumnStart};
      grid-column-end: ${gridOptions.gridColumnEnd};
      /* width: 100%; */
  `;
    return (<ST {...Component.props}/>);
  }
  return Component;
};

export const performSimple = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 3, gridColumnEnd: 4 });
export const performWide = (Component: React.ReactElement<any>) =>
  performComponent(Component, { gridColumnStart: 1, gridColumnEnd: 6 });
