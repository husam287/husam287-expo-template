import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import * as Localization from 'expo-localization';
import { Alert, I18nManager, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { reloadAsync } from 'expo-updates';
import * as Localization from 'expo-localization';

import { login } from 'reducers/authReducer';
import i18n from 'assets/i18n';
import useCheckNewUpdates from 'hooks/useCheckNewUpdate';
import COLORS from 'constants/Colors';
import NotificationListnerContainer from 'components/general/NotificationListnerContainer';
import SnackbarComponent from 'components/general/SnackbarComponent';
import ReactNativeModal from 'react-native-modal';
import IMPORTANT_VARS from 'constants/ImportantVars';
// import AuthStack from './stacks/AuthStack';
import LinkingConfiguration from './LinkingConfiguration';
import MainStack from './stacks/MainStack';

function Route() {
  const isSignedIn = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useCheckNewUpdates();

  const initiallizeLang = async () => {
    let lang = await AsyncStorage.getItem('lang');
    const isRtl = I18nManager.isRTL;

    if (!lang) {
      lang = Localization.locale; // default lang
      AsyncStorage.setItem('lang', lang);
    }

    i18n.locale = lang;

    if (i18n.locale.includes('ar')) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      if (!isRtl) reloadAsync();
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      if (isRtl) reloadAsync();
    }
  };

  const lockUntillUpdateFromStore = () => {
    Alert.alert(
      'An update is required!',
      'Please update to the latest version from store',
      [
        {
          text: 'Go To Store',
          onPress: () => Linking.openURL(IMPORTANT_VARS.androidStoreLink),
        },
      ],
    );
  };

  // Non user login
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('token');
      dispatch(login(userToken));
      initiallizeLang();
    };

    if (IMPORTANT_VARS.forceStoreUpdate) {
      lockUntillUpdateFromStore();
      return;
    }

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
      <NavigationContainer theme={navTheme} linking={LinkingConfiguration}>
        <NotificationListnerContainer>
          {/* {!isSignedIn ? <AuthStack /> : <MainStack />} */}
          <MainStack />
        </NotificationListnerContainer>

        {/* GENERAL MODALS */}
        <SnackbarComponent />
        <ReactNativeModal>
          <SnackbarComponent />
        </ReactNativeModal>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Route;
