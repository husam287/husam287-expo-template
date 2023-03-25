import api from '../api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: '/store-users/me/',
      }),
      providesTags: ['User'],
    }),
    login: build.mutation({
      query: (params) => ({
        url: '/auth/login/',
        method: 'POST',
        body: { ...params, user_type: 'store_user' },
      }),
      invalidatesTags: ['User'],
    }),
    signup: build.mutation({
      query: (params) => ({
        url: '/store-users/me/',
        method: 'POST',
        body: params,
      }),
    }),
    logout: build.mutation({
      query: (params) => ({
        url: '/auth/logout/',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authApi;
