import {notification} from 'antd';

export const handleNotification = (type, title, message, duration = 3) => {
  notification.config({maxCount: 1});
  notification[type]({
    message: title,
    description: message,
    duration: type === duration,
    // duration: type === 'error' ? 0 : duration,
    onClick: () => notification.destroy(),
  });
};
