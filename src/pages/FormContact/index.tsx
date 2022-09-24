import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Gap, HeaderNavigation, Input } from '../../components';
import { styContainer, styWrapper, styContainerPhone } from './style';
import { useMutation } from '@apollo/client';
import {
  ADD_CONTACT,
  ADD_PHONE_NUMBER,
  EDIT_CONTACT,
  EDIT_PHONE_NUMBER,
} from '../../Database';

interface PhonesData {
  number: string;
  id?: string;
}

interface ContactData {
  id: string;
  first_name: string;
  last_name: string;
  phones?: [];
}

const FormContact = (props: { type: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [EditContactById] = useMutation(EDIT_CONTACT);
  const [EditPhoneNumber] = useMutation(EDIT_PHONE_NUMBER);
  const [AddNumberToContact] = useMutation(ADD_PHONE_NUMBER);
  const [AddContactWithPhones] = useMutation(ADD_CONTACT);

  const [phones, setPhones] = useState<any>(
    state ? state.phones : [{ number: '' }]
  );
  const [contacts, setContacts] = useState<ContactData>({
    id: state ? state.id : '',
    first_name: state ? state.first_name : '',
    last_name: state ? state.last_name : '',
  });
  const phoneBefore = state ? state.phones : [{ number: '' }];

  const onAddField = () => {
    setPhones((prevState: any): any => [...prevState, { number: '' }]);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    if (props.type === 'edit') {
      EditContactById({
        variables: { id: contacts.id, _set: { ...contacts } },
      }).then(() => {
        phones.forEach((res: any, index: any): any => {
          if (phoneBefore[index]) {
            EditPhoneNumber({
              variables: {
                pk_columns: {
                  number: phoneBefore[index].number,
                  contact_id: contacts.id,
                },
                new_phone_number: res.number,
              },
            });
          } else {
            AddNumberToContact({
              variables: {
                contact_id: contacts.id,
                phone_number: res.number,
              },
            });
          }
        });
        navigate(`/`, { replace: true });
      });
    } else {
      AddContactWithPhones({
        variables: {
          first_name: contacts.first_name,
          last_name: contacts.last_name,
          phones,
        },
      })
        .then(() => {
          navigate(`/`, { replace: true });
        })
        .catch((er) => {
          console.log(er);
        });
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
            onChange={(e: any) => {
              setContacts({
                ...contacts,
                first_name: e.target.value,
              });
            }}
            value={contacts.first_name}
          />
          <Gap height={15} />
          <Input
            label="Last Name"
            onChange={(e: any) => {
              setContacts({
                ...contacts,
                last_name: e.target.value,
              });
            }}
            value={contacts.last_name}
          />
          {phones.map((element: PhonesData, i: number) => {
            return (
              <React.Fragment>
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
                  onChange={(e: any) => {
                    const newState = phones.map(
                      (
                        obj: { id: string; number: string },
                        index: number
                      ): any => {
                        if (index === i) {
                          return { ...obj, number: e.target.value };
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
        <Button isPrimary>Submit</Button>
      </div>
    </form>
  );
};

export default FormContact;
