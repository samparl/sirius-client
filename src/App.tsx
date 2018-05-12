import * as React from 'react';
import './App.css';
import { Dashboard } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-menu">
          <span className="App-title">Welcome to Sirius!</span>
          <span className="App-route"></span>
        </header>
        <div className="App-body">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
