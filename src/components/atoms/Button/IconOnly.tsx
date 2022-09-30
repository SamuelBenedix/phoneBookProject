import React from 'react';
import {
  IcArrowLeft,
  IcArrowRight,
  IcStar,
  IcStartOutline,
  ImgAddBlue,
  ImgAddWhite,
  ImgDelete,
} from '../../../assets';
import { styBtnIcon, styIconBig, styPrimaryColor } from './style';
import { cx } from '@emotion/css';

interface IconProps {
  icon?: string;
  onClick?: (event: React.MouseEvent) => void;
  type?: string;
  isPrimary?: boolean;
  isDisable?: boolean;
}

const IconOnly = (props: IconProps) => {
  const Icon = () => {
    switch (props.icon) {
      case 'add-white':
        return <ImgAddWhite />;
      case 'add-blue':
        return <ImgAddBlue />;
      case 'arrow-left':
        return <IcArrowLeft />;
      case 'arrow-right':
        return <IcArrowRight />;
      case 'favorite-color':
        return <IcStar />;
      case 'favorite-outline':
        return <IcStartOutline />;
      case 'delete':
        return <ImgDelete />;
      default:
        return <IcArrowLeft />;
    }
  };

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={
        props.isPrimary
          ? cx(styBtnIcon, styPrimaryColor, styIconBig)
          : cx(styBtnIcon)
      }
      disabled={props.isDisable}
    >
      <Icon />
    </button>
  );
};

export default IconOnly;
