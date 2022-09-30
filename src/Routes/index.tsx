import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';

import { ContactList, FormContact } from '../pages';
import ContactDetail from '../pages/ContactDetail';
import { styContainer, styMobileContainer, styMobileView } from './styles';

const Routes = () => {
  let location = useLocation();

  return (
    <div className={styContainer}>
      <div className={styMobileView}>
        <div className={styMobileContainer}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" element={<ContactList />} />
            <Route path="/contact/detail" element={<ContactDetail />} />
            <Route path="/contact/edit" element={<FormContact type="edit" />} />
            <Route path="/contact/add" element={<FormContact type="add" />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Routes;
