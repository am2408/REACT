import React from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import Basket from './components/basket';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Nav/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/basket' component={Basket}/>
    </Switch>
    </div>
  );
}

export default App;
