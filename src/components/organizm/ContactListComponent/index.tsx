import React, { useContext } from 'react';
import { ListContact } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { ContactContextType, ContactsProps } from '../../../@types/contacts';
import { ContactContext } from '../../../context/Contacts';

const ContactListComponent = () => {
  const navigate = useNavigate();
  const { data, setFav }: any = useContext(
    ContactContext
  ) as ContactContextType;

  return (
    <>
      {data.map((contact: ContactsProps, index: number) => (
        <ListContact
          key={index}
          data={contact}
          onClick={() => {
            navigate('/contact/detail', { state: contact });
          }}
          onClickFav={() => {
            console.log('test');
          }}
        />
      ))}
    </>
  );
};

export default ContactListComponent;
