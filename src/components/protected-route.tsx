import * as React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router';
import { Login } from './login';
import { AuthStore } from 'common/services';

export const ProtectedRoute: React.SFC<RouteProps> = ({component: Component, ...rest}) => {{
  const auth = AuthStore.getState();
  return <Route { ...rest } render={ (props: RouteComponentProps<{}>) => {
    return auth.user
      ? <Component { ...props } />
      : <Login />
  }} />
}}