import React, { Fragment } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './Router';

const App = () => {
  return (
    <Fragment>
      <Router>
        <AppRouter />
      </Router>
    </Fragment>
  );
}

export default App;
