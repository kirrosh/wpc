import React, { ReactNode } from 'react';
import WideComponent from 'components/GridLayout/WideComponent';
import { performSimple, performWide } from 'components/GridLayout/hoc';
import SimpleComponent from 'components/GridLayout/SimpleComponent';

export const makeItGridy = (children: ReactNode | ReactNode[]) => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'object') {
      if (child.type === WideComponent) {
        return performWide(child);
      }
      if (child.type === SimpleComponent) {
        return performSimple(child);
      }
    }
  });
};

