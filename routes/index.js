import React, { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Alert, I18nManager } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainStack from "./Stacks/MainStack";
import * as Updates from 'expo-updates';
import { login } from "../redux/authReducer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import i18n from "../assets/i18n";
import * as Localization from 'expo-localization';

const Route = () => {
  const isSignedIn = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem("token");
      dispatch(login(userToken));
      initiallizeLang()
      checkNewUpdates();
      getData;
    };

    bootstrapAsync();
  }, []);

  const checkNewUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert("New Update!",
          "Please restart the app to apply updates",
          [
            {
              text: "Restart App",
              onPress: () => Updates.reloadAsync(),
            }
          ])
      }
    } catch (e) {
      console.log(e)
    }
  }

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
