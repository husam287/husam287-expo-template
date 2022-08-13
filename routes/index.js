import React, { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainStack from "./Stacks/MainStack";
import * as Updates from 'expo-updates';
import { login } from "../redux/authReducer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Route = () => {
  const isSignedIn = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem("token");
      dispatch(login(userToken));
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
