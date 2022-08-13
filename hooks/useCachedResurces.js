import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          IcoMoon: require('../assets/icomoon/icomoon.ttf'),
          font400: require("../assets/fonts/Changa-Regular.ttf"),
          font500: require("../assets/fonts/Changa-Medium.ttf"),
          font600: require("../assets/fonts/Changa-SemiBold.ttf"),
          font700: require("../assets/fonts/Changa-Bold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
        console.log("catch: ", e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
