import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { sum } from './foo';

render((
  <App />
),
  document.getElementById('root'),
);
