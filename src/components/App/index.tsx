import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { ThemeProvider } from 'styled';
import theme from 'styled/theme';

type TProps = ReturnType<typeof mapStateToProps>;
class App extends React.PureComponent<TProps> {
  render() {
    console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route path={'/'} component={HomePage}/>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (store: ApplicationState) => ({
  themeVariant: store.layout.theme,
});

export default connect(mapStateToProps)(App);
