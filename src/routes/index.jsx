import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { login } from 'reducers/authReducer';
import i18n from 'assets/i18n';
import useCheckNewUpdates from 'hooks/useCheckNewUpdate';
import COLORS from 'constants/Colors';
import NotificationListnerContainer from 'components/general/NotificationListnerContainer';
import SnackbarComponent from 'components/general/SnackbarComponent';
import MainStack from './stacks/MainStack';

function Route() {
  const isSignedIn = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useCheckNewUpdates();

  const initiallizeLang = async () => {
    let lang = await AsyncStorage.getItem('lang');
    const isRtl = I18nManager.isRTL;
    if (!lang) {
      lang = Localization.locale;
      AsyncStorage.setItem('lang', lang);
      i18n.locale = lang;
      if (i18n.locale.includes('ar')) {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
        if (!isRtl) Updates.reloadAsync();
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
        if (isRtl) Updates.reloadAsync();
      }
    }
    i18n.locale = lang;
  };

  // Non user login
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('token');
      dispatch(login(userToken));
      initiallizeLang();
    };

    bootstrapAsync();
  }, [dispatch]);

  // User login
  useEffect(() => {
    if (isSignedIn) {
      // nothing here
    }
  }, [isSignedIn]);

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.light;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <NotificationListnerContainer>
          <MainStack />

          <SnackbarComponent />
        </NotificationListnerContainer>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Route;
