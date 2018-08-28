import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';
import { BoldBorder, BigBlueBoldBorder } from './styled';

class CssPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        <BoldBorder>simple CSS</BoldBorder>
        <WideComponent>
          <BigBlueBoldBorder/>
        </WideComponent>
        <BoldBorder>simple CSS</BoldBorder>
      </MainLayout>
    );
  }
}

export default CssPage;
