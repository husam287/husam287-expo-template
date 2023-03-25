import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

import IcoMoon from 'assets/icomoon/icomoon.ttf';
import font300 from 'assets/fonts/Cairo-Light.ttf';
import font400 from 'assets/fonts/Cairo-Regular.ttf';
import font500 from 'assets/fonts/Cairo-Medium.ttf';
import font700 from 'assets/fonts/Cairo-Bold.ttf';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          IcoMoon,
          font300,
          font400,
          font500,
          font700,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
