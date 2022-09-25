import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderProps } from '../../../@types/header';
import { ImgArrowLeft, ImgEdit } from '../../../assets';
import { Button, Gap } from '../../atoms';
import { styContainer, styLabel } from './style';

const HeaderNavigation = (props: HeaderProps) => {
  const { onClick, isEditBtn, label } = props;
  const navigate = useNavigate();

  return (
    <div className={styContainer}>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        icon={true}
      >
        <img src={ImgArrowLeft} alt="icon-back" />
      </Button>
      {label && <div className={styLabel}>{label}</div>}
      <Gap width={40} />
      {isEditBtn && (
        <Button onClick={onClick} icon={true}>
          <img src={ImgEdit} alt="icon-back" />
        </Button>
      )}
    </div>
  );
};

export default HeaderNavigation;
