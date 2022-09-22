import React from 'react';
import { styBtnIcon, styBtnPrimary } from './style';

interface ButtonProps {
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  icon?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, children, isDisabled, icon } = props;

  return (
    <button
      className={icon ? styBtnIcon : styBtnPrimary}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
