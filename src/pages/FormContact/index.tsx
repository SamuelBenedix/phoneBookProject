import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  ContactForm,
  Gap,
  HeaderNavigation,
  Input,
} from '../../components';
import { styContainer, styWrapper } from './style';
import { useMutation } from '@apollo/client';
import {
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

const FormContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [EditContactById] = useMutation(EDIT_CONTACT);
  const [EditPhoneNumber] = useMutation(EDIT_PHONE_NUMBER);
  const [AddNumberToContact] = useMutation(ADD_PHONE_NUMBER);

  const [phones, setPhones] = useState<any>([]);
  const [contacts, setContacts] = useState<ContactData>({
    id: state ? state.id : '',
    first_name: state ? state.first_name : '',
    last_name: state ? state.last_name : '',
  });
  const phoneBefore = state ? state.phones : [];

  useEffect(() => {
    if (state) {
      const newElementPhones = state.phones.map((element: any, id: number) => ({
        number: element.number,
        id: id,
      }));
      setPhones(newElementPhones);
    }
  }, [state]);

  const onAddField = () => {
    setPhones((prevState: any): any => [
      ...prevState,
      { id: phones.length + 1, number: '' },
    ]);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    EditContactById({
      variables: { id: contacts.id, _set: { ...contacts } },
    }).then(() => {
      const phoneArray = phones.forEach((res: any, index: any): any => {
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

          console.log('edit');
        } else {
          AddNumberToContact({
            variables: {
              contact_id: contacts.id,
              phone_number: res.number,
            },
          });
          console.log('add');
          console.log(phoneArray);
        }
      });
      navigate(`/`, { replace: true });
    });
  };

  console.log(phones);

  return (
    <form onSubmit={onHandleSubmit}>
      <HeaderNavigation
        onClick={() => {
          navigate(-1);
        }}
        isEditBtn={false}
        label="Edit Contact"
      />
      <Gap height={40} />
      <div className={styContainer}>
        <Input
          label="First Name"
          onChange={(e: any) => {
            console.log(e.target.value);
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
            console.log(e.target.value);
            setContacts({
              ...contacts,
              last_name: e.target.value,
            });
          }}
          value={contacts.last_name}
        />
        <div>
          {phones.map((element: PhonesData, i: number) => {
            return (
              <ContactForm
                key={i}
                index={i + 1}
                value={element.number}
                stateValue={phoneBefore.length}
                onClick={() => {
                  setPhones(
                    phones.filter((a: PhonesData) => a.id !== element.id)
                  );
                }}
                onChange={(e: any) => {
                  const newState: any = [];
                  phones.forEach((obj: { id: string; number: string }): any => {
                    if (obj.id === element.id) {
                      newState.push({ ...obj, number: e.target.value });
                    }
                    newState.push(obj);
                  });

                  setPhones(newState);
                }}
              />
            );
          })}
          <Gap height={15} />
          <Button isSecondary onClick={onAddField}>
            <div>Add Phone Number</div>
          </Button>
        </div>
      </div>
      <div className={styWrapper}>
        <Button isPrimary>Submit</Button>
      </div>
    </form>
  );
};

export default FormContact;
