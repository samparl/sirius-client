import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Dashboard, DefaultView, ProtectedRoute } from './components';

class App extends React.Component<null, null> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/dashboard"><img className="App-icon" src="assets/images/dog-outline.png" /></Link>
            <span className="App-title">Welcome to Sirius!</span>
            <span className="App-menu">
              <i className="far fa-user-circle"></i>
            </span>
          </header>
          <div className="App-body">
            <Route exact path="/" component={ DefaultView } />
            <ProtectedRoute path="/dashboard" component={ Dashboard }/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
