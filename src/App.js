import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landingpage";
import Login from "./components/login";
import Register from "./components/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/register' component={Register}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
