import React from 'react';
import { StyledHeaderLayout } from './styled';

class HeaderLayout extends React.PureComponent {
  render() {
    return (
      <StyledHeaderLayout>
        <button>123</button>
        <button>345</button>
      </StyledHeaderLayout>
    );
  }
}

export default HeaderLayout;
