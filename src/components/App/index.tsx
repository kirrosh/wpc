import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { ThemeProvider } from 'styled';
import { themeSelector } from 'store/layout/selectors';

type TProps = ReturnType<typeof mapStateToProps>;
class App extends React.PureComponent<TProps> {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <HashRouter>
          <Route path={'/'} component={HomePage}/>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (store: ApplicationState) => ({
  theme: themeSelector(store),
});

export default connect(mapStateToProps)(App);
