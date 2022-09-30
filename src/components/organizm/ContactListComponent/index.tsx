import React, { useEffect, useState } from 'react';
import { ListContact } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { ContactsProps } from '../../../@types/contacts';

const ContactListComponent = (props: {
  data: ContactsProps[] | any;
  isFav: boolean;
}) => {
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    setIsFav(props.isFav);
  }, [props]);

  return (
    <>
      {props.data.map((contact: ContactsProps, index: number) => {
        return (
          <React.Fragment key={index}>
            {isFav === contact.isFav && (
              <ListContact
                key={index}
                data={contact}
                onClick={() => {
                  navigate('/contact/detail', { state: contact });
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ContactListComponent;
