import * as React from 'react';
import { FormInput } from 'common/components';

export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  setEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  setPassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  render() {
      return (
        <div className="Login">
          Please login to continue!
          <FormInput label="Email" type="string" value={ this.state.email } onChange={ this.setEmail.bind(this) } />
          <FormInput label="Password" type="password" value={ this.state.password } onChange={ this.setPassword.bind(this) } />
        </div>
      )
  }
}