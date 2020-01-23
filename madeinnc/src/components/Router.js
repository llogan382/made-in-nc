import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ItemView from './ItemView';
import StoreView from './StoreView';


import NotFound from './NotFound';




const Router = ({ component: Link, ...rest }) => (
    <BrowserRouter>
        <Switch>
            <Route
                exact path="/"
                component={App}
            />
            <Route
                path="/:storeSlug/:itemSlug"
                component={ItemView}
            />
            <Route
                path="/:storeSlug"
                component={StoreView}
            />





            <Route component={NotFound} />




        </Switch>
    </BrowserRouter>
)

export default Router;
