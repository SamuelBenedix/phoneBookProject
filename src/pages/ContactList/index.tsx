import React, { useState } from 'react';
import { Button, ContactListComponent, SearchBar } from '../../components';
import {
  styContainer,
  styListGroup,
  styContainerMobile,
  styContainerSearch,
  styContactListContainer,
  styTitle,
  styWrapperBtn,
  styWrapper,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ImgAddWhite } from '../../assets';

const ContactList = () => {
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate();

  return (
    <div className={styContainerMobile}>
      <h1 className={styTitle}>Phone Book</h1>

      <div className={styContainerSearch}>
        <SearchBar
          onClick={(e) => {
            e.preventDefault();
            setLimit(limit + 10);
          }}
          onChange={(e) => {
            let text = e.target.value;

            let capitalText =
              text.length > 0 ? text[0].toUpperCase() + text.slice(1) : text;

            console.log(capitalText);
          }}
        />
      </div>
      <div className={styContainer}>
        <div className={styListGroup}>Favorite</div>
        <div className={styContactListContainer}>
          <ContactListComponent />
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
