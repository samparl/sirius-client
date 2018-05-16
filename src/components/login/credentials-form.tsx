import * as React from 'react';
import { FormInput, SubmitButton } from 'common/components';

export class CredentialsForm extends React.Component<any, any> {
  render() {
    const credentials = this.props.credentials
    return (
      <form className="form-block" onSubmit={ this.props.onSubmit }>
        <div className="form-pre-text">Please login to continue!</div>
        <FormInput label="Email" type="string" value={credentials.email} onChange={this.props.setEmail} />
        <FormInput label="Password" type="password" value={credentials.password} onChange={this.props.setPassword} />
        <SubmitButton value="Login" />
      </form>
    )
  }
}