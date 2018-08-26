import React from 'react';
import GridLayout from 'components/GridLayout';
import WideComponent from 'components/GridLayout/WideComponent';

class MainLayout extends React.PureComponent {
  render() {
    return (
      <GridLayout columnSize={'5fr'}>
        <div>1233123134141231231412313</div>
        <WideComponent/>
      </GridLayout>
    );
  }
}

export default MainLayout;
