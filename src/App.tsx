import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import {
  Dashboard,
  DefaultView,
  ProtectedRoute,
  AppMenu,
  NewCustomer,
  PublicRoute,
  RouteNotFound,
  Login,
} from './components';
// import Login from './components/authentication/login';
import { AuthStore, AuthState } from 'common/services';
import { Spinner } from 'common/components';

class App extends React.Component<null, AuthState> {
  constructor(props: any) {
    super(props);
    this.state = AuthStore.getState();
  }

  componentDidMount() {
    AuthStore.listen(state => this.setState(state));
  }

  render() {
    const loader = this.state.loading ? <Spinner /> : null;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/dashboard"><img className="App-icon" src="assets/images/dog-outline.png" /></Link>
            <span className="App-title">Welcome to Sirius!</span>
            <div className="App-navigation">
              <AppMenu user={this.state.user} />
            </div>
          </header>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={DefaultView} />
              <PublicRoute exact path="/new" component={NewCustomer} />
              <PublicRoute exact path="/login" component={Login} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route component={RouteNotFound} />
            </Switch>
          </div>
          {loader}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
