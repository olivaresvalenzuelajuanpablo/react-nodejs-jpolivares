import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { userListSlice } from './features/user-list/userListSlice';

export const store = configureStore({
  reducer: {
    users: userListSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend() // ...
      .concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
