import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SceneComponent from './components/SceneComponent/SceneComponent';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <SceneComponent />} />
      </Switch>
    );
  }
}

export default App;
