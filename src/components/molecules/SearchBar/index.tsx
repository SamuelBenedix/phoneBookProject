import React from 'react';
import { IcSearch } from '../../../assets';
import { styContainer, styInputBar, styBtnBar } from './styles';

interface SearchBarProps {
  onClick: (e: any) => void;
  onChange: (e: any) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { onClick, onChange } = props;

  return (
    <form className={styContainer}>
      <input
        className={styInputBar}
        type="text"
        placeholder="Search contacts"
        onChange={onChange}
      />
      <button className={styBtnBar} type="submit" onClick={onClick}>
        <img src={IcSearch} alt="icon search" />
      </button>
    </form>
  );
};

export default SearchBar;
