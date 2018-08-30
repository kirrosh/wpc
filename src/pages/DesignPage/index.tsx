import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';
import { BoldBorder } from './styled';

class DesignPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <BoldBorder>simple Design</BoldBorder>
        <WideComponent>Wide Component</WideComponent>
      </MainLayout>
    );
  }
}

export default DesignPage;
