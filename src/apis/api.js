import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import DomainUrl from 'apis/Domain';
import { login, logout } from 'reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: `${DomainUrl}`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState()).auth;
    if (token) {
      headers.set('Authorization', `Token ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQueryWithRetry(args, api, extraOptions);
  if (result?.error?.data?.code?.includes('token_not_valid')) {
    // try to get a new token
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const refreshResult = await baseQueryWithRetry(
      {
        url: '/token/refresh/',
        method: 'post',
        body: { refresh: refreshToken },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data?.access) {
      // store the new token
      AsyncStorage.setItem('token', refreshResult.data?.access);
      api.dispatch(login(refreshResult.data?.access));
      // retry the initial query
      result = await baseQueryWithRetry(args, api, extraOptions);
    } else {
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('refreshToken');
      api.dispatch(logout());
    }
  }
  return result;
};

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithReauth,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    'User',
    'Product',
    'Category',
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});

export default api;
