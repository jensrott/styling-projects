import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import CountryDetail from './pages/CountryDetail/CountryDetail';
import Home from './pages/Home/Home';

const AppRouter: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/country/:code" component={CountryDetail} />
                <Redirect from="*" to="/" />
            </Switch>
        </React.Fragment>
    )
}

export default AppRouter;
