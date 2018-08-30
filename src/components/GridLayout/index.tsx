import React from 'react';
import { StyledGridLayout } from './styled';
import { GridLayoutProps } from 'components/GridLayout/types';
import { makeItGridy } from 'components/GridLayout/utils';

class GridLayout extends React.PureComponent<GridLayoutProps> {
  render() {
    const children = makeItGridy(this.props.children);
    return (
      <StyledGridLayout columnSize={this.props.columnSize} className={this.props.className} >
        {children}
      </StyledGridLayout>
    );
  }
}

export default GridLayout;
