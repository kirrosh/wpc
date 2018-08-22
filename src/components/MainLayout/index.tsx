import React from 'react';
import { StyledMainLayout, SimpleContent } from './styled';

class MainLayout extends React.PureComponent {
  render() {
    return (
      <StyledMainLayout>
        <SimpleContent>
          Loren Ipsum
        </SimpleContent>
      </StyledMainLayout>
    );
  }
}

export default MainLayout;
