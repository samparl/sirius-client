import * as React from 'react';
import './new-user.css';
import { FormInput, SubmitButton } from 'common/components';

interface NewUserFormProps {
  email: string;
  password: string;
  onSubmit: () => void;
  onEmail: () => void;
  onPassword: () => void;
}
export class NewUserForm extends React.Component<any, any> {
  render() {
    return (
      <form className="NewUserForm" onSubmit={this.props.onSubmit}>
        <FormInput label="Email" value={this.props.email} onChange={this.props.onEmail} />
        <FormInput label="Password" type="password" value={this.props.password} onChange={this.props.onPassword} />
        <SubmitButton value="Create account" />
      </form>
    )
  }
}