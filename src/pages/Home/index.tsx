import * as React from 'react';
import Layout from 'components/Layout';
import { StyledHome } from './styled';
import Header from 'components/Header';
import Form from 'components/Form';

class HomePage extends React.PureComponent {
  render() {
    return (
    <Layout>
      <StyledHome>
        <Header/>
        <Form/>
      </StyledHome>
    </Layout>
    );
  }
}

export default HomePage;
