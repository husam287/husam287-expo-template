import _axios from "../AxiosConfig";

export class NotificationService {
    static sentNotificationTokenToBackend(notificationToken) {
        return _axios.post('/services/app/PushNotification/AssignUserToPushBotificationToken', {
            token: notificationToken
        })
    }

    static getAllNotifications({ pageSize = 5, pageNumber = 1 } = {}) {
        return _axios.get('/services/app/PushNotification/GetUserPushNotifications', {
            params: {
                pageSize,
                pageNumber
            }
        })
    }
}