import React from 'react';
import { IcSearch } from '../../../assets';
import { styContainer, styInputBar, styBtnBar } from './styles';

const SearchBar = () => {
  return (
    <form className={styContainer}>
      <input className={styInputBar} type="text" placeholder="Seach contacts" />
      <button className={styBtnBar} type="submit">
        <img src={IcSearch} alt="icon search" />
      </button>
    </form>
  );
};

export default SearchBar;
