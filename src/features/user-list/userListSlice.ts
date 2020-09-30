import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface User {
  avatarUrl: string;
  name: string;
  age: number;
}

type UserListState = {
  users: User[];
}

const initialState: UserListState = {
  users: []
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
    },
  }
});

export const {
  setUsers,
  addUser,
} = userListSlice.actions;
