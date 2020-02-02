import React from 'react';
import './App.css';
import AuthFooter from "./components/AuthFooter";
import Write from "./components/write";
import Letters from "./components/letters";
import LandingPage from "./components/landingpage";
import Login from "./components/login";
import Register from "./components/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/argon-dashboard-react.css';
import MainNavbar from "./components/MainNavbar";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainNavbar/>
                <Switch>
                    <Route exact path="/my-letters" component={Letters}></Route>
                    <Route exact path="/write" component={Write}></Route>
                    <Route exact path='/' component={LandingPage}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/register' component={Register}></Route>
                </Switch>
                <AuthFooter/>
            </BrowserRouter>
        );
    }
}

export default App;
