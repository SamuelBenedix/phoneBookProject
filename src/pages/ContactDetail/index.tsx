import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ImgPhone } from '../../assets';
import { Button, Gap, HeaderNavigation, ProfilePict } from '../../components';
import { useMutation } from '@apollo/client';

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
  styBtnDeleteWrapper,
  styContainer,
} from './styles';
import { DELETE_CONTACT } from '../../Database';
import { ContactContext } from '../../context/Contacts';
import { ContactContextType } from '../../@types/contacts';

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const [MyMutation] = useMutation(DELETE_CONTACT);
  const { removeData }: any = useContext(ContactContext) as ContactContextType;

  const onDelete = async () => {
    console.log(state.id);
    try {
      await MyMutation({
        variables: {
          id: state.id,
        },
      });
      removeData(state.id);
      navigate(`/`, { replace: true });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styContainer}>
      <HeaderNavigation
        onClick={() => {
          navigate('/contact/edit', { state });
        }}
        isEditBtn={true}
      />
      <ProfilePict firstName={state.first_name} />
      <Gap height={10} />
      <div className={styTitle}>
        {state.first_name} {state.last_name}
      </div>
      <Gap height={30} />
      <div className={styDetailContainer}>
        <div className={styDetail}>
          <p className={styDetailText}>Contact Info</p>
        </div>
      </div>
      <Gap height={40} />
      <div className={styPhoneContainer}>
        {state.phones.map((e: any, i: any) => (
          <div key={i}>
            <div className={styPhoneListContainer}>
              <div className={styIcButton}>
                <img src={ImgPhone} alt="img phone" />
              </div>
              <div>
                <div className={styLabelDetail}>Phone Number</div>
                <div key={i} className={styNumberDetail}>
                  {e.number
                    .replace(/[^0-9.+]+/, '')
                    .replace(/(.{4})/g, '$1 ')
                    .trim()}
                </div>
              </div>
            </div>
            <Gap height={20} />
          </div>
        ))}
      </div>
      <div className={styBtnDeleteWrapper}>
        <Button isDelete onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactDetail;
