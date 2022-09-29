import React from 'react';
import { styContainer, styLabel } from './styles';

interface ProfilePictProps {
  firstName: string;
}

const ProfilePict = (props: ProfilePictProps) => {
  return (
    <div className={styContainer}>
      <div className={styLabel}>
        <div>{props.firstName[0].toUpperCase()}</div>
      </div>
    </div>
  );
};

export default ProfilePict;
