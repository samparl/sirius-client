import * as React from 'react';
import './submit-button.css';

interface SubmitButtonProps {
  value: string;
}

export const SubmitButton = (props: SubmitButtonProps) => <input className="SubmitButton" type="submit" value={props.value} />