import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';

import Article from './pages/article';
import Password from './pages/password';
import History from './pages/history';
import Donate from './pages/donate';
import Setting from './pages/setting';
import Home from './pages/home';

const App = () => (
  <Router>
    <Switch>  
      <Route path="/article/:id" exact component={Article}/>
      <Route path="/password" exact component={Password}/>
      <Route path="/history" exact component={History}/>
      <Route path="/donate" exact component={Donate}/>
      <Route path="/setting" exact component={Setting}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  </Router>
)

export default App;
