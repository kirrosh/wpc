import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from 'pages/Home';


export default function () {
  return (
    <HashRouter>
        <Route path={'/'} component={HomePage}/>
    </HashRouter>
  );
}
