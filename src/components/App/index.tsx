import React from 'react';
import MainLayout from 'components/MainLayout';
import { AppLayout } from './styled';
import HeaderLayout from 'components/HeaderLayout';
import { HashRouter, Route } from 'react-router-dom';
import JavascriptPage from 'pages/JavascriptPage';
import CssPage from 'pages/CssPage';
import DesignPage from 'pages/DesignPage';


export default function () {
  return (
    <HashRouter>
      <AppLayout>
        <HeaderLayout/>
        <Route path={'/javascript'} component={JavascriptPage}/>
        <Route path={'/css'} component={CssPage}/>
        <Route path={'/design'} component={DesignPage}/>
      </AppLayout>
    </HashRouter>
  );
}
