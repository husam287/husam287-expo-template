import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

import IcoMoon from 'assets/icomoon/icomoon.ttf';
import font400 from 'assets/fonts/Changa-Regular.ttf';
import font500 from 'assets/fonts/Changa-Medium.ttf';
import font600 from 'assets/fonts/Changa-SemiBold.ttf';
import font700 from 'assets/fonts/Changa-Bold.ttf';
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
          font400,
          font500,
          font600,
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
