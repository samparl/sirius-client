import * as React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router';
import { Login } from './login';
import { AuthService } from 'common/services';

export const ProtectedRoute: React.SFC<RouteProps> = ({component: Component, ...rest}) => {{
  const auth = AuthService.getState();
  return <Route { ...rest } render={ (props: RouteComponentProps<{}>) => {
    return auth.user
      ? <Component { ...props } />
      : <Login />
  }} />
}}