import React from 'react';
import { StyledGridLayout } from './styled';
import { SimpleContent } from 'styled/grid';
import { GridLayoutProps } from 'components/GridLayout/types';


class GridLayout extends React.PureComponent<GridLayoutProps> {
  render() {
    return (
      <StyledGridLayout columnSize={this.props.columnSize} className={this.props.className}>
        <SimpleContent>
          {this.props.children}
        </SimpleContent>
      </StyledGridLayout>
    );
  }
}

export default GridLayout;
