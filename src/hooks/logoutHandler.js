import AsyncStorage from '@react-native-async-storage/async-storage';
import store from 'reducers';
import { logout } from 'reducers/authReducer';

export default function logoutHandler() {
  AsyncStorage.removeItem('token');
  store.dispatch(logout());
}
