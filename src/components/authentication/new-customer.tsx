import * as React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import { Spinner, FormInput, SubmitButton } from 'common/components';
import { Credentials } from 'common/types';
import { AuthService } from 'common/services';

class NewCustomerState {
  details: Credentials;
  loading: boolean;

  constructor() {
    this.details = new Credentials();
    this.loading = false;
  }
}

export class NewCustomer extends React.Component<null, any> {
  constructor(props: null) {
    super(props);
    this.state = new NewCustomerState();
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
    AuthService.NewCustomer(this.state.details);
  }

  render() {
    const loading = this.state.loading ? <Spinner /> : null;
    const { email, password } = this.state.details;
    return (
      <div className="NewCustomer">
        <h2>Create an account</h2>
        <form className="NewCustomerForm" onSubmit={this.onSubmit.bind(this)}>
          <FormInput label="Email" value={email} onChange={this.onEmail.bind(this)} />
          <FormInput label="Password" type="password" value={password} onChange={this.onPassword.bind(this)} />
          <SubmitButton value="Create account" />
          <Link to="login">Login</Link>
        </form>
        {loading}
      </div>
    )
  }
}