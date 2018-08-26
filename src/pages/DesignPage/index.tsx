import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';

class DesignPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <div>simple Design</div>
        <WideComponent/>
      </MainLayout>
    );
  }
}

export default DesignPage;
