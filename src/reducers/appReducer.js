import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  toast: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoader: (state) => ({
      ...state,
      isLoading: true,
    }),
    hideLoader: (state) => ({
      ...state,
      isLoading: false,
    }),
    setSuccessToast: (state, action) => ({
      ...state,
      toast: { type: 'success', message: action.payload },
    }),
    setDangerToast: (state, action) => ({
      ...state,
      toast: { type: 'danger', message: action.payload },
    }),
    hideToast: (state) => ({
      ...state,
      toast: null,

    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoader,
  hideLoader,
  setSuccessToast,
  setDangerToast,
  hideToast,
} = appSlice.actions;

export default appSlice.reducer;
