import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Dashboard, DefaultView, ProtectedRoute, AppMenu, NewUser } from './components';
import { AuthStore, AuthState } from 'common/services';

class App extends React.Component<null, AuthState> {
  constructor(props: any) {
    super(props);
    this.state = AuthStore.getState();
  }

  componentDidMount() {
    AuthStore.listen(state => this.setState(state));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/dashboard"><img className="App-icon" src="assets/images/dog-outline.png" /></Link>
            <span className="App-title">Welcome to Sirius!</span>
            <AppMenu user={ this.state.user } />
          </header>
          <div className="App-body">
            <Route exact path="/" component={DefaultView} />
            <Route exact path="/new" component={NewUser} />
            <ProtectedRoute path="/dashboard" component={ Dashboard } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
