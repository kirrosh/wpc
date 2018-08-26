import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';

class JavascriptPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <div>simple JS</div>
        <WideComponent/>
      </MainLayout>
    );
  }
}

export default JavascriptPage;
