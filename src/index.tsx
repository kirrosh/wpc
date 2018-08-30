import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ThemeProviderComponent } from 'styled-components';
import theme from 'styled/theme';

const CustomThemeProvider: ThemeProviderComponent<typeof theme> = ThemeProvider as ThemeProviderComponent<typeof theme>;

// For now 'theme' has type any. It will be fixed in next version of cs!
// or I will wrap in another component

render((
  <BrowserRouter>
    <CustomThemeProvider theme={theme}>
      <App />
    </CustomThemeProvider>
  </BrowserRouter>
),
  document.getElementById('root'),
);
