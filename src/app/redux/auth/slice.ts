import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
 user: {name: string | null, email: string | null},
 token: string | null,
 isLoggedIn: boolean,
 isRefreshing: boolean,
 error: {} | null
}

const initialState : User = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  };


  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
       Rejected(state, action: PayloadAction<User>) {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.error = action.payload.error
        },
         Fulfilled(state, action: PayloadAction<User>) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
         logOutFulfilled(state, action: PayloadAction<User>) {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        },
         logOutRejected(state, action: PayloadAction<User>) {
          state.error = action.payload.error
        },
         getUserFulfilled(state, action: PayloadAction<{ name: string, email: string }>) {
          state.user = { name: action.payload.name, email: action.payload.email}
          state.isLoggedIn = true;
        },
    }
  });
  
export const authReducer = authSlice.reducer;
