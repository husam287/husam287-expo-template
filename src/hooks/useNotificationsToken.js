import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { useState } from 'react';

const PROJECT_OBJECT = { experienceId: '@husam287/hossamApp' };

async function allowsNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  let isAllowed = (
    settings.granted
    || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );

  if (isAllowed) return isAllowed;

  const finalSettings = await Notifications.requestPermissionsAsync();
  isAllowed = (
    finalSettings.granted
    || finalSettings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
  return isAllowed;
}

export default function useNotificationsToken() {
  const [deviceToken, setDeviceToken] = useState(null);

  (async () => {
    if (Device.isDevice) {
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });

        const isAllowed = await allowsNotificationsAsync();
        if (!isAllowed) {
          // alert('Failed to get push token for push notification!');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync(PROJECT_OBJECT)).data;
        setDeviceToken(token);
      }
    }
  })();

  return deviceToken;
}
