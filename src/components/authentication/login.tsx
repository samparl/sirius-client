import * as React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import { FormInput, SubmitButton, Spinner } from 'common/components';
import { AuthService } from 'common/services';
import { Credentials } from 'common/types';

interface LoginState {
  credentials: Credentials;
}
export class Login extends React.Component<any, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      credentials: new Credentials(),
    };
  }

  onSubmit(e: Event) {
    e.preventDefault();
    AuthService.login(this.state.credentials);
  }

  setEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const credentials = { ...this.state.credentials, email: event.target.value }
    this.setState({ credentials });
  }

  setPassword(event: React.ChangeEvent<HTMLInputElement>) {
    const credentials = { ...this.state.credentials, password: event.target.value }
    this.setState({ credentials });
  }

  render() {
    const {email, password} = this.state.credentials;
    return (
      <div className="Login">
        <form className="form-block" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-pre-text">Please login to continue!</div>
          <FormInput label="Email" type="string" value={email} onChange={this.setEmail.bind(this)} />
          <FormInput label="Password" type="password" value={password} onChange={this.setPassword.bind(this)} />
          <SubmitButton value="Login" />
          <Link to="/new">Create account</Link>
        </form>
      </div>
    )
  }
}