import { useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import useNotificationsToken from 'hooks/useNotificationsToken';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationListnerContainer({ children }) {
  const notificationListener = useRef();
  const responseListener = useRef();

  // GETTING NOTIFICATION DEVICE TOKEN
  const deviceToken = useNotificationsToken();
  useEffect(() => {
    if (!deviceToken) return;
    // eslint-disable-next-line no-console
    console.log('DEVICE TOKEN =>', deviceToken);
  }, [deviceToken]);

  // LISTNERS FOR NOTIFICATIONS
  useEffect(() => {
    // Getting notification
    notificationListener.current = Notifications.addNotificationReceivedListener(() => {
      // nothing here
    });

    // Opening notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      // eslint-disable-next-line no-console
      console.log('OPENED NOTIFICATION => ', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // FOR OPENING NOTIFICATION WHILE CLOSE APP
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  useEffect(() => {
    if (!lastNotificationResponse) return;

    // eslint-disable-next-line no-console
    console.log('NOTIFICATION CLICKED WHILE CLOSING APP => ', lastNotificationResponse);
  }, [lastNotificationResponse]);

  return (children);
}
