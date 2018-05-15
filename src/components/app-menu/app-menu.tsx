import * as React from 'react';
import './app-menu.css';

export const AppMenu: React.SFC<any> = (props) => {
  const content = !!props.user
    ? <div>Menu</div>
    : <i className="far fa-user-circle"></i>
  return (
    <span className="App-menu">
      { content }
    </span>
  )
}