import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImgArrowLeft, ImgEdit } from '../../../assets';
import { Button } from '../../atoms';
import { styContainer } from './style';

interface HeaderProps {
  onClick?: () => void;
  isEditBtn: boolean;
}

const HeaderNavigation = (props: HeaderProps) => {
  const { onClick, isEditBtn } = props;
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
      {isEditBtn && (
        <Button onClick={onClick} icon={true}>
          <img src={ImgEdit} alt="icon-back" />
        </Button>
      )}
    </div>
  );
};

export default HeaderNavigation;
