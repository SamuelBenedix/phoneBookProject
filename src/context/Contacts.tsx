import { useMutation, useQuery } from '@apollo/client';
import React, { useState, createContext, useEffect } from 'react';

import { ContactContextType, ContactsProps } from '../@types/contacts';
import { ADD_CONTACT, LOAD_CONTACT_LIST } from '../Database';
export const ContactContext = createContext<ContactContextType | null>(null);

interface props {
  children: React.ReactNode;
}

const ContactProvider: React.FC<props> = ({ children }) => {
  const [AddContactWithPhones] = useMutation(ADD_CONTACT);
  const [data, setData] = useState<ContactsProps[]>([]);
  const [limit, setLimit] = useState(100);
  const [localStorageData, setLocalStorageData] = useState<{ id: string }[]>(
    JSON.parse(localStorage.getItem('tokopediaFav')!)
  );

  const res = useQuery(LOAD_CONTACT_LIST, {
    variables: {
      limit: limit,
    },
  });

  useEffect(() => {
    if (!res.loading) {
      const data = res.data.contact;
      setData([]);
      data.forEach((element: ContactsProps) => {
        if (localStorageData !== null) {
          const find = localStorageData.find(
            (el: { id: string }): any => el.id === element.id
          );
          setData((prev) => [
            ...prev,
            { ...element, isFav: find !== undefined ? true : false },
          ]);
        } else {
          setData((prev) => [...prev, { ...element, isFav: false }]);
        }
      });
    }
  }, [res, localStorageData, limit]);

  const setFav = (props: ContactsProps) => {
    const found = data.find((item: ContactsProps) => item.id === props.id);
    const getData: [{ id: string }] = JSON.parse(
      localStorage.getItem('tokopediaFav')!
    );
    let contactFav: any = getData !== null ? getData : [];
    if (!found?.isFav) {
      contactFav.push({ id: props.id });
      localStorage.setItem('tokopediaFav', JSON.stringify(contactFav));
      setLocalStorageData(contactFav);
    } else {
      const filtered = getData.filter(
        (item: { id: string }) => item.id !== props.id
      );
      localStorage.setItem('tokopediaFav', JSON.stringify(filtered));
      setLocalStorageData(filtered);
    }
  };

  const setNewData = async (props: ContactsProps) => {
    try {
      await AddContactWithPhones({ variables: props });
      setLimit(limit + 1);
    } catch (error) {
      alert(error);
    }
  };

  const removeData = (id: number) => {
    const newArr = data.filter((object) => {
      return object.id !== id;
    });
    setData(newArr);
  };

  return (
    <ContactContext.Provider
      value={{
        data,
        setData,
        setFav,
        setNewData,
        removeData,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
