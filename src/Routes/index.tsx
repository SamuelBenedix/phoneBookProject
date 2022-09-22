import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { ContactList, FormContact } from '../pages';
import ContactDetail from '../pages/ContactDetail';
import {
  styContainer,
  styMobileContainer,
  styMobileView,
  styTitle,
} from './styles';

const Routes = () => {
  let location = useLocation();

  return (
    <React.Fragment>
      <div className={styContainer}>
        <div className={styMobileView}>
          <div className={styMobileContainer}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" element={<ContactList />} />
              <Route path="/contact/detail" element={<ContactDetail />} />
              <Route path="/contact/edit" element={<FormContact />} />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Routes;
