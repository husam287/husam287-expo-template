import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from 'reducers';
import { hideLoader, showLoader } from 'reducers/appReducer';
import DomainUrl from './Domain';

const axiosInstance = axios.create({
  baseURL: `${DomainUrl}/en/api`,
  headers: {},
});

axiosInstance.interceptors.request.use(
  async (config) => {
    store.dispatch(showLoader());

    /** Adjust request */
    const token = await AsyncStorage.getItem('token');

    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    };

    return newConfig;
  },
  (err) => {
    store.dispatch(hideLoader());
    return Promise.reject(err?.response?.data);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(hideLoader());
    return response.data;
  },
  (err) => {
    store.dispatch(hideLoader());

    // For cancellation
    if (err?.message) return Promise.reject(err);

    // backend server error
    return Promise.reject(err?.response?.data);
  },
);

export default axiosInstance;
