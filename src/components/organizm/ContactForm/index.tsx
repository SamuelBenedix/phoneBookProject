import React from 'react';
import { ImgDelete } from '../../../assets';
import { Button, Gap, Input } from '../../atoms';

import { styContainerPhoneNumber } from './styles';

interface ContactFormProps {
  onChange: (event: React.ChangeEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  index: number;
  value: string;
  stateValue: number;
}

const ContactForm = (props: ContactFormProps) => {
  return (
    <React.Fragment>
      <Gap height={15} />
      <div className={styContainerPhoneNumber}>
        <Input
          label={`Phone Number ${props.index}`}
          value={props.value}
          onChange={(e: any) => {
            props.onChange(e);
          }}
        />
        {props.index > props.stateValue && (
          <Button icon={true} isDanger={true} onClick={props.onClick}>
            <img src={ImgDelete} alt="delete-icon" />
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
