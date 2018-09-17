import React from 'react';
import { GridElement, StyledBigColoredLabel, LabelRight } from './styled';
import { GridElementProps } from './types';

const gridOptions: GridElementProps = {
  columnStart: 7,
  columnEnd: 20,
  rowStart: 15,
  rowEnd: 20,
};

class MainText extends React.PureComponent {
  render() {
    return (
      <GridElement {...gridOptions}>
        <h1>Asymmetry and broken grid layouts</h1>
        <p>One big change in 2017 was the introduction of asymmetrical and unconventional ‘broken’ layouts,
            and this web trend will still be going strong in 2018.
           The appeal of the asymmetrical layout is that it is unique,
            distinctive and sometimes experimental.</p>
      </GridElement>
    );
  }
}

export default MainText;
