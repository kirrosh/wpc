import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';
import SimpleComponent from 'components/GridLayout/SimpleComponent';

class DesignPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <SimpleComponent>simple Design</SimpleComponent>
        <WideComponent>Wide Component</WideComponent>
      </MainLayout>
    );
  }
}

export default DesignPage;
