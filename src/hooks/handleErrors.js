import i18n from 'assets/i18n';
import Toast from 'react-native-toast-message';

export default function HandleErrors(err) {
  const showErrorToast = (msg) => {
    Toast.show({
      type: 'error',
      text1: i18n.t('ERROR'),
      text2: msg,
    });
  };
  console.log('err=>:', err);
  // if (err?.code?.includes("token_not_valid")) {
  //   store.dispatch(logout());
  // }
  if (err.details?.reason) {
    showErrorToast(err.details?.reason);
  } else if (err.message) {
    showErrorToast(err.message);
  } else if (err.details?.length) {
    showErrorToast(err.details.join(', '));
  } else if (err.detail) {
    showErrorToast(err.detail);
  } else if (err && Object.keys(err)) {
    showErrorToast(err[Object.keys(err)[0]][0]);
  } else if (Object.keys !== 0) {
    showErrorToast(Object.values(err)[0]);
  } else {
    showErrorToast('خطأ غير متوقع!');
  }
}
