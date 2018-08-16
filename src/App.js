import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SceneComponent from './components/SceneComponent/SceneComponent';
import DiagramComponent from './components/DiagramComponent/DiagramComponent';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={() => (
            <SceneComponent>
              <DiagramComponent num={100} />
            </SceneComponent>
          )}
        />
      </Switch>
    );
  }
}

export default App;
