import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SceneComponent from './components/SceneComponent/SceneComponent';
import RectangleFactory from './components/RectangleFactory/RectangleFactory';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={() => (
            <SceneComponent>
              <RectangleFactory max={4} num={1000} />
            </SceneComponent>
          )}
        />
      </Switch>
    );
  }
}

export default App;
