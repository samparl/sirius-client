import * as React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router';
import { AuthPrompt } from './auth-prompt';
export const ProtectedRoute: React.SFC<RouteProps> = ({component: Component, ...rest}) => (
    <Route {...rest} render={ (props: RouteComponentProps<{}>) => {
        return false
            ? <Component { ...props } />
            : <AuthPrompt />
    }} />
)