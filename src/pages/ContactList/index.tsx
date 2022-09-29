import React, { useContext } from 'react';
import { Button, ContactListComponent } from '../../components';
import {
  styContainer,
  styContactListContainer,
  styTitle,
  styWrapperBtn,
  styWrapper,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ImgAddWhite } from '../../assets';
import { ContactContext } from '../../context/Contacts';
import { ContactContextType } from '../../@types/contacts';

const ContactList = () => {
  const navigate = useNavigate();

  const { data }: any = useContext(ContactContext) as ContactContextType;

  return (
    <div>
      <h1 className={styTitle}>Phone Book</h1>

      <div className={styContainer}>
        <div className={styContactListContainer}>
          <ContactListComponent data={data} isFav={true} />
          <ContactListComponent data={data} isFav={false} />
        </div>
      </div>

      <div className={styWrapper}>
        <div className={styWrapperBtn}>
          <Button
            icon
            isBig
            primary
            onClick={() => {
              navigate('/contact/add');
            }}
          >
            <img src={ImgAddWhite} alt="Icon Blue" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
