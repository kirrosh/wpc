import React from 'react';
import { GridElement, StyledBigColoredLabel } from './styled';
import { GridElementProps } from './types';

const gridOptions: GridElementProps = {
  columnStart: 2,
  columnEnd: 18,
  rowStart: 2,
  rowEnd: 9,
};

class BigColoredLabel extends React.PureComponent {
  render() {
    return (
      <GridElement {...gridOptions}>
        <StyledBigColoredLabel/>
      </GridElement>
    );
  }
}

export default BigColoredLabel;
