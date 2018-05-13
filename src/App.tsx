import * as React from 'react';
import './App.css';
import { Dashboard, DefaultView } from './components';

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-icon" src="assets/images/dog-outline.png" />
          <span className="App-title">Welcome to Sirius!</span>
          <span className="App-menu">
            <i className="far fa-user-circle"></i>
          </span>
        </header>
        <div className="App-body">
          <DefaultView />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
