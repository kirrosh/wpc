import React from 'react';
import MainLayout from 'components/MainLayout';
import cssPosts from 'fakeData/css/posts';
import Post from 'components/Post';

class CssPage extends React.PureComponent {
  render() {
    return(
      <MainLayout>
        {cssPosts.map(post => (<Post post={post}/>))}
      </MainLayout>
    );
  }
}

export default CssPage;
