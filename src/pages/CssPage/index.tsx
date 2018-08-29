import React from 'react';
import MainLayout from 'components/MainLayout';
import WideComponent from 'components/GridLayout/WideComponent';
import { BoldBorder, BigBlueBoldBorder } from './styled';
import cssPosts from 'fakeData/css/posts';
import Post from 'components/Post';
import SimpleComponent from 'components/GridLayout/SimpleComponent';

class CssPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        {cssPosts.map(post => (<SimpleComponent><Post post={post}/></SimpleComponent>))}
        {/* <BoldBorder>simple CSS</BoldBorder> */}
        {/* <WideComponent> */}
          {/* <BigBlueBoldBorder/> */}
        {/* </WideComponent> */}
        {/* <BoldBorder>simple CSS</BoldBorder> */}
      </MainLayout>
    );
  }
}

export default CssPage;
