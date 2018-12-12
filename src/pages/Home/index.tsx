import * as React from 'react';
import Layout from 'components/Layout';
import { StyledHome } from './styled';

class HomePage extends React.PureComponent {
  render() {
    return (
    <Layout>
      <StyledHome>1234</StyledHome>
    </Layout>
    );
  }
}

export default HomePage;
