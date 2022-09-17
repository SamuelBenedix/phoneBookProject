import React from 'react';
import { ListContact, SearchBar } from '../../components';

const ContactList = () => {
  return (
    <div>
      <SearchBar />
      <div>
        <ListContact />
      </div>
    </div>
  );
};

export default ContactList;
