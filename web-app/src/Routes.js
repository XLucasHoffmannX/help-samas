import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

import { DataProvider } from './contexts/state';
import { NotFound } from './resources/views/Errors';

const Landing = lazy(() => import('./resources/views/Landing/'))
const Register = lazy(() => import('./resources/views/Register'))


export default function Routes() {
    return (
        <Router>
            <DataProvider>
                <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
                    <Switch>
                        <Route exact path="/" component={Landing} />

                        <Route exact path="/register" component={Register} />

                        <Route path="*" exact component={NotFound}/>
                    </Switch>
                </Suspense>
            </DataProvider>
        </Router>
    );
}
