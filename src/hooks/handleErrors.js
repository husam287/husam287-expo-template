import store from 'reducers';
import { setDangerToast } from 'reducers/appReducer';

export default function HandleErrors(err) {
  const showErrorToast = (msg) => {
    store.dispatch(
      setDangerToast(msg),
    );
  };

  console.log('Catched Error', err);
  if (err?.error?.details) {
    showErrorToast(err?.error?.details);
  } else if (err?.error?.message) {
    showErrorToast(err?.error?.message);
  } else if (err?.message) {
    showErrorToast(err?.message);
  } else {
    showErrorToast('UNEXPECTED_ERROR');
  }
}
