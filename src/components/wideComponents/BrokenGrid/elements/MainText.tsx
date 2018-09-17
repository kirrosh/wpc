import React from 'react';
import { GridElement } from './styled';
import { GridElementProps } from './types';

const gridOptions: GridElementProps = {
  columnStart: 7,
  columnEnd: 24,
  rowStart: 9,
  rowEnd: 24,
};

class MainText extends React.PureComponent {
  render() {
    return (
      <GridElement {...gridOptions}>
        <h3>Asymmetry and broken grid layouts</h3>
      </GridElement>
    );
  }
}

export default MainText;
