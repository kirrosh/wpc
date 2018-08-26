import React, { ReactNode } from 'react';
import WideComponent from 'components/GridLayout/WideComponent';

export const getSimleAndWideComponents = (children: ReactNode | ReactNode[]) => {
  const simpleComponents: ReactNode[] = [];
  const wideComponents: ReactNode[] = [];
  React.Children.forEach(children, (child) => {
    if (typeof child === 'object' && child.type === WideComponent) {
      wideComponents.push(child);
    } else {
      simpleComponents.push(child);
    }
  });
  return {
    wideComponents,
    simpleComponents,
  };
};
