/* eslint-disable no-useless-escape */
import React, { useContext, useState } from 'react';
import { ContactContextType } from '../../../@types/contacts';
import { InputProps } from '../../../@types/input';
import { ImgDelete } from '../../../assets';
import { ContactContext } from '../../../context/Contacts';
import Button from '../Button';
import Gap from '../Gap';
import {
  styContainer,
  styLabel,
  styTextInput,
  styWrapper,
  styErrorText,
} from './styles';

const Input = (props: InputProps) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: any) => {
    const value = e.target.value;
    const regex = /^[\w&.\-]*$/;
    props.onChange(value);
    if (!value.match(regex)) {
      setIsError(true);
      setErrorMessage("Please don't type special character and space in input");
    } else {
      setIsError(false);
    }
  };

  return (
    <div className={styContainer}>
      <label htmlFor={styLabel} className={styLabel}>
        {props.label}
      </label>
      <div id={styLabel} className={styWrapper}>
        <input
          className={styTextInput}
          type="text"
          onChange={onChange}
          value={props.value}
          placeholder={`Silahkan masukkan ${props.label.toLowerCase()}`}
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
      {isError && (
        <span data-testid="error" className={styErrorText}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
