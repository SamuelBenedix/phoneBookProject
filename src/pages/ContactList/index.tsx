import React, { useEffect, useState } from 'react';
import { ListContact, SearchBar } from '../../components';
import {
  styContainer,
  styListGroup,
  styContainerMobile,
  styContainerSearch,
  styContactListContainer,
  styTitle,
} from './styles';

import { useQuery } from '@apollo/client';
import { LOAD_CONTACT_LIST } from '../../Database';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const res = useQuery(LOAD_CONTACT_LIST, {
    variables: {
      limit: limit,
    },
  });

  useEffect(() => {
    if (!res.loading) {
      setData(res.data.contact);
    }
  }, [res]);

  return (
    <div className={styContainerMobile}>
      <h1 className={styTitle}>Phone Book</h1>

      <div className={styContainerSearch}>
        <SearchBar
          onClick={(e) => {
            e.preventDefault();
            setLimit(limit + 10);
            res.refetch({ limit: limit });
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
          {data.map((element, index) => (
            <ListContact
              key={index}
              data={element}
              onClick={() => {
                navigate('/contact/detail', { state: element });
              }}
              onClickFav={() => {
                console.log('test');
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
