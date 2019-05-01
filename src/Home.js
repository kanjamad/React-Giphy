import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={ Search }/>
        </Switch>
      </div>
    );
  }
}

export default Home;