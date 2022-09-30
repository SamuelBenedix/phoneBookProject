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

interface IconProps {
  icon: string;
  onClick: (event: React.MouseEvent) => void;
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
    <button type="button" onClick={props.onClick}>
      <Icon />
    </button>
  );
};

export default IconOnly;
