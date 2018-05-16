import * as React from 'react';
import './app-menu.css';
import { AuthService } from 'common/services';

export const AppMenu: React.SFC<any> = (props) => {
  const content = !!props.user
    ? <div className="menu" onClick={ AuthService.logout }>Menu</div>
    : <i className="user-circle far fa-user-circle"></i>
  return (
    <span className="App-menu">
      { content }
    </span>
  )
}