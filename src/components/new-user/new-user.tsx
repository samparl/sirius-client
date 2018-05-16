import * as React from 'react';
import { NewUserDetails } from 'common/types';
import { AuthService } from 'common/services';
import { NewUserForm } from './new-user.form';
import { Spinner } from 'common/components';

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

  onSubmit(e: Event) {
    e.stopPropagation();
    e.preventDefault();

    this.setState({ loading: true })
    AuthService.newUser(this.state.details);
  }

  render() {
    const loading = this.state.loading ? <Spinner /> : null;
    return (
      <div className="NewUser">
        <h2>Create an account</h2>
        <NewUserForm
          {...this.state.details}
          onSubmit={this.onSubmit.bind(this)}
          onEmail={this.onEmail.bind(this)}
          onPassword={this.onPassword.bind(this)}
        />
        {loading}
      </div>
    )
  }
}