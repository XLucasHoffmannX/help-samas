import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

import { NotFound } from './resources/views/Errors';
import { useSelector, useDispatch } from 'react-redux';

import { userHelper } from './store/helpers/user.helper';

const Landing = lazy(() => import('./resources/views/Landing/'));
const Register = lazy(() => import('./resources/views/Register'));
const Home = lazy(() => import('./resources/views/Home'));

export default function Routes() {
    const dispatch = useDispatch();
    const { logged } = useSelector(state => state.authReducer)

    React.useEffect(() => {
        userHelper(logged, dispatch);
    }, [logged])

    return (
        <Router>
            <Suspense fallback={<div><div className="vh-100 d-flex justify-content-center align-items-center"><CircularProgress /></div></div>}>
                <Switch>
                    <Route exact path="/" component={Landing} />

                    <Route exact path="/register" component={Register} />

                    <Route exact path="/home" component={logged ? Home : Landing} />

                    <Route path="*" exact component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}
