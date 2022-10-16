import React, { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import * as Localization from 'expo-localization';
import { I18nManager } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { login } from "reducers/authReducer";
import i18n from "assets/i18n";
import { useCheckNewUpdates } from "hooks/useCheckNewUpdate";
import MainStack from "./Stacks/MainStack";

const Route = () => {
  const isSignedIn = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      useCheckNewUpdates()

      let userToken = await AsyncStorage.getItem("token");
      dispatch(login(userToken));
      initiallizeLang()
      getData;
    };

    bootstrapAsync();
  }, []);

  const initiallizeLang = async () => {
    let lang = await AsyncStorage.getItem("lang");
    let isRtl = I18nManager.isRTL;
    if (!lang) {
      lang = Localization.locale;
      AsyncStorage.setItem("lang", lang);
      i18n.locale = lang;
      if (i18n.locale.includes("ar")) {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
        !isRtl && Updates.reloadAsync()
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
        isRtl && Updates.reloadAsync()
      }
    }
    i18n.locale = lang;
  };

  const getData = React.useMemo(async () => {
    if (isSignedIn) {

    }
  }, [isSignedIn]);

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#fff";

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Route;