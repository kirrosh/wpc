import React from 'react';
import GridLayout from 'components/GridLayout';
import WideComponent from 'components/GridLayout/WideComponent';

class MainLayout extends React.PureComponent {
  render() {
    return (
      <GridLayout columnSize={'5fr'}>
        {this.props.children}
      </GridLayout>
    );
  }
}

export default MainLayout;
