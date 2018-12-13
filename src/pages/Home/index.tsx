import * as React from 'react';
import Layout from 'components/Layout';
import { StyledHome } from './styled';
import Header from 'components/Header';

class HomePage extends React.PureComponent {
  render() {
    return (
    <Layout>
      <StyledHome>
        <Header/>
      </StyledHome>
    </Layout>
    );
  }
}

export default HomePage;
