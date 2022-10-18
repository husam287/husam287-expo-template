import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import authReducer from './authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});
