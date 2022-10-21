import AsyncStorage from '@react-native-async-storage/async-storage';
import store from 'reducers';
import { login } from 'reducers/authReducer';

export default function loginHandler(token) {
  AsyncStorage.setItem('token', token);
  store.dispatch(login(token));
}
