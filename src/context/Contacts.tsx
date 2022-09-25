import { useQuery } from '@apollo/client';
import React, { useState, createContext, useEffect } from 'react';

import { ContactContextType, ContactsProps } from '../@types/contacts';
import { LOAD_CONTACT_LIST } from '../Database';

export const ContactContext = createContext<ContactContextType | null>(null);

interface props {
  children: React.ReactNode;
}

const ContactProvider: React.FC<props> = ({ children }) => {
  const [data, setData] = useState<ContactsProps[]>([]);

  const res = useQuery(LOAD_CONTACT_LIST, {
    variables: {
      limit: 100,
    },
  });

  useEffect(() => {
    if (!res.loading) {
      setData(res.data.contact);
    }
  }, [res]);

  const setFav = (id: number) => {
    data.filter((contact: ContactsProps) => {
      if (contact.id === id) {
        contact.fav = true;
        setData([...data]);
      }
    });
  };

  return (
    <ContactContext.Provider value={{ data, setFav }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
