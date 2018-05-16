import * as React from 'react';
import './login.css';
import { FormInput } from 'common/components';
import { AuthService } from 'common/services';
import { Credentials } from 'common/types';

export class Login extends React.Component<any, Credentials> {
  constructor(props: any) {
    super(props);
    this.state = new Credentials();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    AuthService.login(this.state);
  }

  setEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  setPassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  render() {
      return (
        <form className="Login" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-block">
            <div className="form-pre-text">Please login to continue!</div>
            <FormInput label="Email" type="string" value={ this.state.email } onChange={ this.setEmail.bind(this) } />
            <FormInput label="Password" type="password" value={ this.state.password } onChange={ this.setPassword.bind(this) } />
          <input type="submit" value="Login" />
          </div>
        </form>
      )
  }
}