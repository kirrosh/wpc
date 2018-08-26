import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';

class CssPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <div>simple CSS</div>
        <WideComponent/>
      </MainLayout>
    );
  }
}

export default CssPage;
