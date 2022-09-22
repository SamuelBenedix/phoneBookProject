import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ImgPhone } from '../../assets';
import { Gap, HeaderNavigation } from '../../components';

import {
  styTitle,
  styDetail,
  styDetailContainer,
  styDetailText,
  styPhoneContainer,
  styLabelDetail,
  styNumberDetail,
  styPhoneListContainer,
  styIcButton,
} from './styles';

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  return (
    <div>
      <HeaderNavigation
        onClick={() => {
          navigate('/contact/edit', { state });
        }}
        isEditBtn={true}
      />
      <div className={styTitle}>
        {state.first_name} {state.last_name}
      </div>
      <Gap height={30} />
      <div className={styDetailContainer}>
        <div className={styDetail}>
          <p className={styDetailText}>Details</p>
        </div>
      </div>
      <Gap height={40} />
      <div className={styPhoneContainer}>
        {state.phones.map((e: any, i: any) => (
          <div>
            <div className={styPhoneListContainer}>
              <div className={styIcButton}>
                <img src={ImgPhone} alt="img phone" />
              </div>
              <div>
                <div className={styLabelDetail}>Phone Number</div>
                <div key={i} className={styNumberDetail}>
                  {e.number}
                </div>
              </div>
            </div>
            <Gap height={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetail;
