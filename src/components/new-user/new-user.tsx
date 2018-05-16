import * as React from 'react';
import { NewUserForm } from './new-user.form';

class NewUserDetails {
  email: string;
  password: string;

  constructor(options?: NewUserDetails) {
    this.email = (options && options.email) || '';
    this.password = (options && options.password) || '';
  }
}

class NewUserState {
  details: NewUserDetails;
  loading: boolean;

  constructor() {
    this.details = new NewUserDetails();
    this.loading = false;
  }
}
export class NewUser extends React.Component<null, any> {
  constructor(props: null) {
    super(props);
    this.state = new NewUserState();
  }

  onEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const details = Object.assign({}, this.state.details, { email: e.target.value })
    this.setState({ details });
  }

  onPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const details = Object.assign({}, this.state.details, { password: e.target.value })
    this.setState({ details });
  }

  render() {
    return (
      <div className="NewUser">
        <h2>Create an account</h2>
        <NewUserForm
          {...this.state.details}
          onEmail={this.onEmail.bind(this)}
          onPassword={this.onPassword.bind(this)}
        />
      </div>
    )
  }
}