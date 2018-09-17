import React, { ReactNode } from 'react';
import WideComponent from 'components/GridLayout/WideComponent';
import { performSimple, performWide } from 'components/GridLayout/hoc';
import wideComponents from 'components/wideComponents';


export const makeItGridy = (children: ReactNode | ReactNode[]) => {
  return React.Children.map(children, (child) => {
    if (typeof child === 'object') {
      // TODO: создать список широких компонентов?
      if ([WideComponent, ...wideComponents].some(c => child.type === c)) {
        return performWide(child);
      }
      return performSimple(child);
    }
  });
};

