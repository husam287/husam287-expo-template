import store from 'reducers';
import { setSuccessToast } from 'reducers/appReducer';

export default function showSuccessMsg(msg) {
  store.dispatch(
    setSuccessToast(msg),
  );
  return null;
}
