import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Profil from './components/profil';
import Detail from './components/detail';
import Popup from './components/popup';
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Popup/>
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/profil" component= {Profil}/>
      <Route exact path="/detail:id" component= {Detail}/>
    </Switch>
    </div>
  );
}

export default App;
