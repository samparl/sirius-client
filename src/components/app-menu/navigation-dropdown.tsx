import * as React from 'react';
import './app-menu.css';
import { AuthService } from 'common/services';
import { Spinner } from 'common/components';

export class NavigationDropdown extends React.Component<any, any>  {
  node: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.state = { loading: false, active: false }
  }

  componentDidMount() {
    document.addEventListener('click', this.close.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close.bind(this));
  }

  logout() {
    this.setState({ loading: true });
    AuthService.logout();
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  close(event: Event) {
    const closable = this.node && !this.node.contains(event.target as Node) && this.state.active;
    if (closable) {
      this.toggle();
    }
  }

  render() {
    const options = !this.state.active ? null :
      <div className="menu-options">
        <div className="menu-option" onClick={this.logout.bind(this)}>Logout</div>
      </div>

    return <div className="menu-icon" onClick={this.toggle.bind(this)} ref={node => this.node = node}>
      {options}
    </div>
  }
}