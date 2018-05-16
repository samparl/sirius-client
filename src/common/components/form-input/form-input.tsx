import * as React from 'react';
import './form-input.css';

interface FormInputProps {
    label: string;
    value: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.SFC<FormInputProps> = (props) => (
    <span className="FormInput">
        <span className="label">{ props.label }</span>
        <input onChange={ props.onChange }
            value={ props.value }
            type={ props.type || 'text' } />
    </span>
)