import * as React from 'react';
import { StyledLayout, LayoutContent, ContentWrapper } from './styled';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <StyledLayout>
        <ContentWrapper>
          <LayoutContent>
            {children}
          </LayoutContent>
        </ContentWrapper>
      </StyledLayout>
    );
  }
}

export default Layout;
