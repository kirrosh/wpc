import * as React from 'react';
import { StyledLayout, LayoutContent } from './styled';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <StyledLayout>
        <LayoutContent>
          {children}
        </LayoutContent>
      </StyledLayout>
    );
  }
}

export default Layout;
