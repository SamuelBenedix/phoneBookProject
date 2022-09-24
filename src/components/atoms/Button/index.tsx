import React from 'react';
import { cx } from '@emotion/css';
import {
  styBtnIcon,
  styBtnPrimary,
  styBtnDanger,
  styBtnSecondary,
  styBtnDelete,
  styPrimaryColor,
} from './style';

interface ButtonProps {
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  children: React.ReactNode;
  icon?: boolean;
  isDanger?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDelete?: boolean;
  isBig?: boolean;
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    children,
    isDisabled,
    isDanger,
    isPrimary,
    isDelete,
    isSecondary,
    primary,
  } = props;
  if (isDanger) {
    return (
      <button
        className={styBtnDanger}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (isDelete) {
    return (
      <button
        className={styBtnDelete}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (isSecondary) {
    return (
      <button
        className={styBtnSecondary}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (isPrimary) {
    return (
      <button
        className={styBtnPrimary}
        type="submit"
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={primary ? cx(styBtnIcon, styPrimaryColor) : styBtnIcon}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
