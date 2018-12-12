import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import  { ThemeProvider } from 'styled';
import theme from 'styled/theme';

render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </BrowserRouter>
),
  document.getElementById('root'),
);
