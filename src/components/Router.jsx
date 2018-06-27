import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import Browse from './Browse';
import Signup from './Signup';
import Login from './Login';

function Router(){
  return(
    <Switch>
      <Route exact path='/' component={Hero}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/browse' component={Browse}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  );
}

export default Router;
