import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
const createHistory = require("history").createBrowserHistory
import Login from './component/login'
import Home from './component/Home'
let history = createHistory();
class InternalRouter extends Component {
    
    render() {
        return (
            <Router history={history}>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/login' component={Login} />
                </Switch>

            </Router>

        )
    }
}
export default InternalRouter;