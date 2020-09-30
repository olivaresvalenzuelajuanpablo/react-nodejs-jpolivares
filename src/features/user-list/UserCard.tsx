import React from 'react';

import { UserCardAvatar } from './UserCardAvatar';

import './UserCard.scss';

export const UserCard: React.FunctionComponent = () => {
  return (
    <div className="UserCard-container">
      <p className="name">Nombre: Juan Olivares</p>
      <p className="age">Edad: 27</p>
      <UserCardAvatar src='img/default-avatar.jpg' alt="Juan Olivares's Avatar" />
    </div>
  );
}
