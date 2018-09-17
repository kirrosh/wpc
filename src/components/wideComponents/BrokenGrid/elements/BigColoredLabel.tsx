import React from 'react';
import { GridElement, StyledBigColoredLabel, LabelRight } from './styled';
import { GridElementProps } from './types';

const gridOptions: GridElementProps = {
  columnStart: 2,
  columnEnd: 6,
  rowStart: 2,
  rowEnd: 12,
};

class BigColoredLabel extends React.PureComponent {
  render() {
    return (
      <GridElement {...gridOptions}>
        <StyledBigColoredLabel/>
        <LabelRight/>
      </GridElement>
    );
  }
}

export default BigColoredLabel;
