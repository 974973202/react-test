import React, { lazy, Suspense, useState, useCallback } from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import routes from './routes/index.js'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';

const Entry = lazy(() => import('./pages/index'));

function App() {
  return (
      <HashRouter>
        {/* <Switch> */}
          {/* <Route path='/' exact component={() => <Entry/>} /> */}
          {renderRoutes(routes)}

        {/* </Switch> */}
      </HashRouter>
  );
}

export default App;
