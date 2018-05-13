import * as React from 'react';
import './App.css';
import { Dashboard } from './components';

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
          <div className="DefaultView">
            <div className="DefaultView-introduction">
              Welcome to Sirius! We do our best to connect people with the products they love and need.
              Watch your new purchase make its way to your doorstep, from start to finish!
            </div>
          </div>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
