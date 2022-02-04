import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
                <Switch>
                    <Route exact path="/" component={ ()=>(<><h1>Ola Mundo</h1></>) } />
                </Switch>
            </Suspense>
        </Router>
    );
}
