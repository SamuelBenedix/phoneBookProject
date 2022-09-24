import React, { useState } from 'react';
import {
  styBtnFav,
  styContainer,
  styDetailContact,
  styName,
  styPhoneNumber,
  styContainerDetailContact,
} from './style';
import { IcStar, IcStarOutline } from '../../../assets';

interface ListContactProps {
  data: {
    first_name: string;
    last_name: string;
    phones: {
      number: string;
    }[];
  };
  onClick: () => void;
  onClickFav: () => void;
}

const ListContact = (props: ListContactProps) => {
  const [fav, setFav] = useState(false);

  return (
    <div className={styContainer}>
      <div className={styContainerDetailContact} onClick={props.onClick}>
        <div className={styDetailContact}>
          <div className={styName}>
            {props.data.first_name} {props.data.last_name}
          </div>
          {props.data.phones[0] ? (
            <div className={styPhoneNumber}>
              {props.data.phones[0].number
                .replace(/[^0-9.+]+/, '')
                .replace(/(.{4})/g, '$1 ')
                .trim()}
            </div>
          ) : (
            <div className={styPhoneNumber}></div>
          )}
        </div>
      </div>
      <div
        className={styBtnFav}
        onClick={() => {
          setFav(!fav);
        }}
      >
        {fav ? (
          <img src={IcStar} alt="favorite" />
        ) : (
          <img src={IcStarOutline} alt="favorite" />
        )}
      </div>
    </div>
  );
};

export default ListContact;
