import i18n from 'assets/i18n';
import Toast from 'react-native-toast-message';

export default function showSuccessMsg(msg) {
  Toast.show({
    type: 'success',
    text1: i18n.t('SUCCESS'),
    text2: msg,
  });
  return null;
}
