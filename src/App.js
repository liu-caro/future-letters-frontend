import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landingpage";
import Login from "./components/login";
import Register from "./components/register"
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/' component={Register}></Route>
          </Switch>
        </BrowserRouter>

    );
  }
}

export default App;
