import React from 'react';
import MainLayout from 'components/MainLayout';
import BrokenGrid from 'components/wideComponents/BrokenGrid';

class DesignPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <BrokenGrid/>
      </MainLayout>
    );
  }
}

export default DesignPage;
