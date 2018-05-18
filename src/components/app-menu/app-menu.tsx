import * as React from 'react';
import './app-menu.css';
import { AuthService } from 'common/services';
import { Spinner } from 'common/components';

export class AppMenu extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = { loading: false }
  }

  logout() {
    this.setState({ loading: true });
    AuthService.logout().then(() => this.setState({ loading: false }));
  }

  render() {
    const loading = this.state.loading ? <Spinner /> : null
    const content = !!this.props.user
      ? <div className="menu" onClick={this.logout.bind(this)}></div>
      : <i className="user-circle far fa-user-circle"></i>
    return (
      <span className="App-menu">
        {content}
        {loading}
      </span>
    )
  }
}