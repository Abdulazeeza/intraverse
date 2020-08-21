import React from 'react';
import Home from './Components/Home.js'
import Signup from './Components/Signup.js'
import Signin from './Components/Signin.js'
import Verify from './Components/verify.js'
import Nav from './Components/Nav.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/verify' component={Verify}/>
        <Route path='/login' component={Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
