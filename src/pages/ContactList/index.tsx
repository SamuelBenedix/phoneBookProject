import React, { useContext, useState, useEffect } from 'react';
import { Button, ContactListComponent, Pagination } from '../../components';
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
import { ContactContextType, ContactProps } from '../../@types/contacts';

const ContactList = () => {
  const navigate = useNavigate();
  const [newData, setNewData] = useState<ContactProps[]>([]);

  const [page, setPage] = useState(1);
  const { data }: any = useContext(ContactContext) as ContactContextType;

  useEffect(() => {
    setNewData(data.slice((page - 1) * 10, page * 10));
  }, [data, page]);

  return (
    <div>
      <h1 className={styTitle}>Phone Book</h1>
      <div className={styContainer}>
        <div className={styContactListContainer}>
          {page === 1 && <ContactListComponent data={data} isFav={true} />}
          <ContactListComponent data={newData} isFav={false} />
        </div>
      </div>

      <div className={styWrapper}>
        <div className={styWrapperBtn}>
          <Button
            icon
            isPrimary
            onClick={() => {
              navigate('/contact/add');
            }}
          >
            <img src={ImgAddWhite} alt="Icon Blue" />
          </Button>
        </div>
      </div>
      <Pagination
        page={page}
        length={data.length}
        onClickLeft={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
        onClickRight={() => {
          setPage(page + 1);
        }}
      />
    </div>
  );
};

export default ContactList;
