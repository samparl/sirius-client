import * as React from 'react';
import { Route, RouteProps, RouteComponentProps, Redirect } from 'react-router';
import { Login } from './authentication';
import { AuthStore } from 'common/services';

export const ProtectedRoute: React.SFC<RouteProps> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props: RouteComponentProps<{}>) => AuthStore.getState().user
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { referrer: rest.path } }} />
  } />
}