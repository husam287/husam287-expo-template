import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export default store;
