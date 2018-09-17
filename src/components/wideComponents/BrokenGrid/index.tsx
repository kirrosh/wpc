import React from 'react';
import { StyledBrokenGrid, GridElement } from './elements/styled';
import BigColoredLabel from 'components/wideComponents/BrokenGrid/elements/BigColoredLabel';
import MainText from 'components/wideComponents/BrokenGrid/elements/MainText';

/**
 * Asymmetry and broken grid layouts
 * One big change in 2017 was the introduction of asymmetrical and unconventional ‘broken’ layouts,
 *  and this web trend will still be going strong in 2018.
 * The appeal of the asymmetrical layout is that it is unique, distinctive and sometimes experimental.
 */

class BrokenGrid extends React.PureComponent {
  render() {
    return (
      <StyledBrokenGrid {...this.props}>
        <BigColoredLabel/>
        <MainText/>
      </StyledBrokenGrid>
    );
  }
}

export default BrokenGrid;
