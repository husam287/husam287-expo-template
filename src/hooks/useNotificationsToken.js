// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: false,
//     }),
// });

// async function allowsNotificationsAsync() {
//     const settings = await Notifications.getPermissionsAsync();
//     let isAllowed = settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
//     if (isAllowed) {
//         return isAllowed
//     }

//     const finalSettings = await Notifications.requestPermissionsAsync();
//     isAllowed = finalSettings.granted || finalSettings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
//     return isAllowed
// }

// export default async function useNotificationsToken() {
//     let token;
//     if (Constants.isDevice) {
//         const isAllowed = await allowsNotificationsAsync()
//         if (!isAllowed) {
//             //alert('Failed to get push token for push notification!');
//             return;
//         }
//         token = (await Notifications.getExpoPushTokenAsync({ experienceId: '@husam287/tariq-plus' })).data;
//     } else {
//         return
//     }

//     if (Platform.OS === 'android') {
//         Notifications.setNotificationChannelAsync('default', {
//             name: 'default',
//             importance: Notifications.AndroidImportance.MAX,
//             vibrationPattern: [0, 250, 250, 250],
//             lightColor: '#FF231F7C',
//         });
//     }

//     return token;
// }
