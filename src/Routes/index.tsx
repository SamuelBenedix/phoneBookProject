import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { ContactList } from '../pages';
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
            <h1 className={styTitle}>Phone Book</h1>
            <Switch location={location} key={location.pathname}>
              <Route path="/" element={<ContactList />} />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Routes;
