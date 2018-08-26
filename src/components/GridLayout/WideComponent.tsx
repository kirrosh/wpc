import React from 'react';
import { StyledWideComponent } from 'components/GridLayout/styled';

class WideComponent extends React.PureComponent {
  render() {
    return (
      <StyledWideComponent {...this.props}/>
    );
  }
}

export default WideComponent;
