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
  const [localStorageData, setLocalStorageData] = useState<any>(
    JSON.parse(localStorage.getItem('tokopediaFav')!)
  );

  const res = useQuery(LOAD_CONTACT_LIST, {
    variables: {
      limit: 100,
    },
  });

  useEffect(() => {
    if (!res.loading) {
      const data = res.data.contact;
      setData([]);
      data.forEach((element: any, id: any) => {
        if (localStorageData !== null) {
          const find = localStorageData.find(
            (el: { id: string }): any => el.id === element.id
          );
          if (find !== undefined) {
            setData((prev) => [...prev, { ...element, isFav: true }]);
          } else {
            setData((prev) => [...prev, { ...element, isFav: false }]);
          }
        }
      });
    }
  }, [res, localStorageData]);

  const setFav = (id: string) => {
    const found = data.find((item: any): any => item.id === id);
    const getData: [{ id: string }] = JSON.parse(
      localStorage.getItem('tokopediaFav')!
    );
    let contactFav: any = getData !== null ? getData : [];
    if (!found?.isFav) {
      contactFav.push({ id });
      localStorage.setItem('tokopediaFav', JSON.stringify(contactFav));
      setLocalStorageData(contactFav);
      console.log('add local storage');
    } else {
      const filtered = getData.filter((item: any): any => item.id !== id);
      localStorage.setItem('tokopediaFav', JSON.stringify(filtered));
      setLocalStorageData(filtered);
      console.log('remove local storage');
    }
  };

  return (
    <ContactContext.Provider value={{ data, setFav }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
