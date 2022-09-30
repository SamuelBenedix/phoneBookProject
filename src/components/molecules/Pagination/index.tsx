import React from 'react';
import { IcArrowLeft, IcArrowRight } from '../../../assets';
import { Button } from '../../atoms';
import { styContainer } from './styles';

interface PaginationProps {
  onClickLeft: (event: React.MouseEvent) => void;
  onClickRight: (event: React.MouseEvent) => void;
  page: number;
  length: number;
}

const Pagination = (props: PaginationProps) => {
  const numberOfPages = Math.ceil(props.length / 10);
  return (
    <div className={styContainer}>
      {props.page > 1 ? (
        <Button icon={true} onClick={props.onClickLeft}>
          <img src={IcArrowLeft} alt="icon-back" />
        </Button>
      ) : (
        <div></div>
      )}
      {numberOfPages !== props.page && (
        <Button icon={true} onClick={props.onClickRight}>
          <img src={IcArrowRight} alt="icon-back" />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
