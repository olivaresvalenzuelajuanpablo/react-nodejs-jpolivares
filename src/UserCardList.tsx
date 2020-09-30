import React from 'react';

import { UserCard } from './UserCard';

import './UserCardList.scss';

export const UserCardList: React.FunctionComponent = () => {
  return (
    <div className="UserCardList-container">
      <ul>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
      </ul>
    </div>
  );
}
