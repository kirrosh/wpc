import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
),
  document.getElementById('root'),
);
