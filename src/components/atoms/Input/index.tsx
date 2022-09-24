import React from 'react';
import { ImgDelete } from '../../../assets';
import Button from '../Button';
import { styContainer, styLabel, styTextInput } from './styles';

interface InputProps {
  onChange: (event: React.ChangeEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  label: string;
  value?: string;
  isDelete?: boolean;
  index?: number;
  stateValue?: number;
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
