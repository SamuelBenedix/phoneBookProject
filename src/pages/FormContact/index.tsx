import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Gap, HeaderNavigation, Input } from '../../components';
import { styContainer, styWrapper, styContainerPhone } from './style';
import { useMutation } from '@apollo/client';
import {
  ADD_PHONE_NUMBER,
  EDIT_CONTACT,
  EDIT_PHONE_NUMBER,
} from '../../Database';
import { ContactContextType, ContactProps } from '../../@types/contacts';
import { ContactContext } from '../../context/Contacts';

interface PhonesData {
  number: string;
  id?: string;
}

const FormContact = (props: { type: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [EditContactById] = useMutation(EDIT_CONTACT);
  const [EditPhoneNumber] = useMutation(EDIT_PHONE_NUMBER);
  const [AddNumberToContact] = useMutation(ADD_PHONE_NUMBER);

  const [phones, setPhones] = useState<any>(
    state ? state.phones : [{ number: '' }]
  );
  const { setNewData }: any = useContext(ContactContext) as ContactContextType;

  const [contacts, setContacts] = useState<ContactProps>({
    id: state ? state.id : '',
    first_name: state ? state.first_name : '',
    last_name: state ? state.last_name : '',
  });
  const phoneBefore = state ? state.phones : [{ number: '' }];

  const onAddField = () => {
    setPhones((prevState: any): any => [...prevState, { number: '' }]);
  };

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    if (props.type === 'edit') {
      try {
        await EditContactById({
          variables: { id: contacts.id, _set: { ...contacts } },
        });
      } catch (error) {
        alert(error);
      }

      phones.forEach(async (res: any, index: any) => {
        if (phoneBefore[index]) {
          try {
            await EditPhoneNumber({
              variables: {
                pk_columns: {
                  number: phoneBefore[index].number,
                  contact_id: contacts.id,
                },
                new_phone_number: res.number,
              },
            });
          } catch (error) {
            alert(error);
          }
        } else {
          try {
            await AddNumberToContact({
              variables: {
                contact_id: contacts.id,
                phone_number: res.number,
              },
            });
          } catch (error) {
            alert(error);
          }
        }
        navigate(`/`, { replace: true });
      });
      console.log('edit');
    } else {
      try {
        await setNewData({
          first_name: contacts.first_name,
          last_name: contacts.last_name,
          phones,
        });
        navigate(`/`, { replace: true });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <HeaderNavigation
        onClick={() => {
          navigate(-1);
        }}
        isEditBtn={false}
        label={props.type === 'add' ? 'Tambah Contact' : 'Edit Contact'}
      />
      <Gap height={40} />
      <div className={styContainer}>
        <div className={styContainerPhone}>
          <Input
            label="First Name"
            onChange={(value: string) => {
              setContacts({
                ...contacts,
                first_name: value,
              });
            }}
            isCheck
            unique="firstName"
            value={contacts.first_name}
          />
          <Gap height={15} />
          <Input
            label="Last Name"
            onChange={(value: string) => {
              setContacts({
                ...contacts,
                last_name: value,
              });
            }}
            isCheck
            value={contacts.last_name}
          />
          {phones.map((element: PhonesData, i: number) => {
            return (
              <React.Fragment key={i}>
                <Gap height={15} />
                <Input
                  label={`Phone Number ${i + 1}`}
                  key={i}
                  value={element.number}
                  isDelete={i > phoneBefore.length - 1}
                  onClick={() => {
                    setPhones(
                      phones.filter((_: any, index: number) => index !== i)
                    );
                  }}
                  onChange={(value: string) => {
                    const newState = phones.map(
                      (obj: { id: string; number: string }, index: number) => {
                        if (index === i) {
                          return { ...obj, number: value };
                        }
                        return obj;
                      }
                    );
                    setPhones(newState);
                  }}
                />
              </React.Fragment>
            );
          })}
        </div>

        <Gap height={15} />
        <Button isSecondary onClick={onAddField}>
          <div>Add Phone Number</div>
        </Button>
      </div>
      <div className={styWrapper}>
        <Button isPrimary type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
