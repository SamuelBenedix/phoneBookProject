import React from 'react';
import { styContainer, styLabel, styTextInput } from './styles';

interface InputProps {
  onChange: (event: React.ChangeEvent) => void;
  label: string;
  value?: string;
}

const Input = (props: InputProps) => {
  return (
    <div className={styContainer}>
      <div className={styLabel}>{props.label}</div>
      <input
        className={styTextInput}
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
