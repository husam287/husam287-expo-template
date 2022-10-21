import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    setUserInfo: (state, action) => ({
      ...state,
      userData: action.payload,
    }),
    logout: (state) => ({
      ...state,
      token: null,
      userData: null,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { login, setUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;
