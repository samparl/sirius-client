import * as React from 'react';
import './app-menu.css';
import { AuthService } from 'common/services';
import { Spinner } from 'common/components';
import { NavigationDropdown } from './navigation-dropdown';
export class AppMenu extends React.Component<any, any>  {
  node: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.state = { loading: false, active: false }
  }

  render() {
    const loading = this.state.loading ? <Spinner /> : null
    const content = !!this.props.user ? <NavigationDropdown /> : <i className="user-circle far fa-user-circle"></i>;
    return (
      <span className="AppMenu">
        {content}
        {loading}
      </span>
    )
  }
}