import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderNavigation } from '../../components';

const FormContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  console.log(state);
  return (
    <div>
      <HeaderNavigation
        onClick={() => {
          navigate(-1);
        }}
        isEditBtn={false}
      />
    </div>
  );
};

export default FormContact;
