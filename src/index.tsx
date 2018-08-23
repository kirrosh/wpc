import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { sum } from './foo';
import { BrowserRouter } from 'react-router-dom';
render((
  <BrowserRouter>
  < App message="world" />
  </BrowserRouter>
),
  document.getElementById('root'),
);
console.log(sum(1, 2).toString());
