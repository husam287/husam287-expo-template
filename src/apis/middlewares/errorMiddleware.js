import { isRejectedWithValue } from '@reduxjs/toolkit';
import HandleErrors from 'hooks/handleErrors';

const rtkQueryErrorLogger = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    HandleErrors(action?.payload?.data);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
