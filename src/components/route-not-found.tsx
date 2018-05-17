import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export const RouteNotFound = (props: RouteComponentProps<null>) => (
  <div className="RouteNotFound">
    Route <span style={ { color: 'red', background: '#eee', borderRadius: '5px', padding: '2px' } }>{props.location.pathname}</span> not found!
  </div>
)