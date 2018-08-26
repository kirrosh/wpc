import React from 'react';
import { StyledGridLayout, SimpleContent, WideContent } from './styled';
import { GridLayoutProps } from 'components/GridLayout/types';
import { getSimleAndWideComponents } from 'components/GridLayout/utils';


class GridLayout extends React.PureComponent<GridLayoutProps> {
  render() {
    const filteredChildren = getSimleAndWideComponents(this.props.children);
    return (
      <StyledGridLayout columnSize={this.props.columnSize} className={this.props.className}>
        <SimpleContent>
          {filteredChildren.simpleComponents}
        </SimpleContent>
        <WideContent>
          {filteredChildren.wideComponents}
        </WideContent>
      </StyledGridLayout>
    );
  }
}

export default GridLayout;
