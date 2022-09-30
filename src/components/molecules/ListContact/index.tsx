import React, { useContext } from 'react';
import {
  styBtnFav,
  styContainer,
  styDetailContact,
  styName,
  styPhoneNumber,
  styContainerDetailContact,
} from './style';
import { IcStar, IcStartOutline } from '../../../assets';
import { ContactContextType, ContactsProps } from '../../../@types/contacts';
import { ContactContext } from '../../../context/Contacts';

interface ListContactProps {
  data: ContactsProps;
  onClick: () => void;
  onClickFav?: () => void;
}

const ListContact = (props: ListContactProps) => {
  const { setFav }: any = useContext(ContactContext) as ContactContextType;

  const onClick = () => {
    setFav(props.data);
  };

  return (
    <div>
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
        <div className={styBtnFav} onClick={onClick}>
          {props.data.isFav ? (
            <img src={IcStar} alt="favorite" />
          ) : (
            <img src={IcStartOutline} alt="favorite" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListContact;
