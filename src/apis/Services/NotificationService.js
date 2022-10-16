import _axios from "../AxiosConfig";

export class NotificationService {
    static sentNotificationTokenToBackend(notificationToken) {
        return _axios.post('', {
            token: notificationToken
        })
    }

    static getAllNotifications({ pageSize = 5, pageNumber = 1 } = {}) {
        return _axios.get('', {
            params: {
                pageSize,
                pageNumber
            }
        })
    }
}