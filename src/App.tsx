import React from 'react';

import { UserCardList } from './UserCardList';

import './App.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <UserCardList />
    </div>
  );
}
