import * as React from 'react';
import { Route, RouteProps, RouteComponentProps, Redirect } from 'react-router';
import { Login } from './authentication';
import { DefaultView } from './default-view';
import { AuthStore } from 'common/services';

export const PublicRoute: React.SFC<RouteProps> = ({component: Component, ...rest}) => {{
  const auth = AuthStore.getState();
  return <Route { ...rest } render={ (props: RouteComponentProps<{}>) => {
    return !auth.user
      ? <Component { ...props } />
      : <Redirect to='/' />
  }} />
}}