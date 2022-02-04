import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

import { DataProvider } from './contexts/state';

const Landing = lazy(() => import('./resources/views/Landing/'))

export default function Routes() {
    return (
        <Router>
            <DataProvider>
                <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Suspense>
            </DataProvider>
        </Router>
    );
}
