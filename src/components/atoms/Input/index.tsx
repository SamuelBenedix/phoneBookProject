import React from 'react';
import { ImgDelete } from '../../../assets';
import Button from '../Button';
import Gap from '../Gap';
import { styContainer, styLabel, styTextInput, styWrapper } from './styles';

interface InputProps {
  label: string;
  value?: string;
  isDelete?: boolean;
  onChange: (event: React.ChangeEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className={styContainer}>
      <div className={styLabel}>{props.label}</div>
      <div className={styWrapper}>
        <input
          className={styTextInput}
          type="text"
          onChange={props.onChange}
          value={props.value}
        />

        {props.isDelete && (
          <React.Fragment>
            <Gap width={15} />
            <Button icon={true} isDanger={true} onClick={props.onClick}>
              <img src={ImgDelete} alt="delete icon" />
            </Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Input;
