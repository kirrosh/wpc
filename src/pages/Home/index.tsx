import * as React from 'react';
import Layout from 'components/Layout';
import { StyledHome } from './styled';
import Header from 'components/Header';
import MainForm from 'components/Forms/MainForm';
import OffenseForm from 'components/Forms/OffenseForm';
import DefenseForm from 'components/Forms/DefenseForm';
import SocketsForm from 'components/Forms/SocketsForm';

class HomePage extends React.PureComponent {
  render() {
    return (
    <Layout>
      <StyledHome>
        <Header/>
        <MainForm/>
        <OffenseForm/>
        <DefenseForm/>
        <SocketsForm/>
      </StyledHome>
    </Layout>
    );
  }
}

export default HomePage;
