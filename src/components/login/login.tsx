import * as React from 'react';
import './login.css';
import { FormInput } from 'common/components';
import { AuthService } from 'common/services';
import { Credentials } from 'common/types';
import { Spinner } from 'common/components';
import { CredentialsForm } from './credentials-form';

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
    return (
      <div className="Login">
        <CredentialsForm
          credentials={this.state.credentials}
          setEmail={this.setEmail.bind(this)}
          setPassword={this.setPassword.bind(this)}
          onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}