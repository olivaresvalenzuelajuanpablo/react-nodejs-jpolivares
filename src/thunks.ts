import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';

import config from './config.json';
import { RootState } from './store';
import {
  User,
  setUsers,
  addUser
} from './features/user-list/userListSlice';

export const thunkGetUsers = (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => {
  return async dispatch => {
    await axios.get('/users')
      .then(response => { dispatch(setUsers(response.data.payload.users)); })
      .catch((error: AxiosError) => {
        alert(error.response ? `ERROR (HTTP STATUS CODE: ${error.response.status}).` : 'INTERNAL SERVER ERROR.');
      });
  }
};

export const thunkAddUser = (user: User): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => {
  return async dispatch => {
    await axios.post('/users', JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => { dispatch(addUser(response.data.payload.user)); })
      .catch((error: AxiosError) => {
        alert(error.response ? `ERROR (HTTP STATUS CODE: ${error.response.status}).` : 'INTERNAL SERVER ERROR.');
      });
  };
};
