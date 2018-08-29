import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';
import SimpleComponent from 'components/GridLayout/SimpleComponent';

class JavascriptPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <SimpleComponent>simple JS</SimpleComponent>
        <WideComponent/>
      </MainLayout>
    );
  }
}

export default JavascriptPage;
