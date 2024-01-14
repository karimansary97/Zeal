import {Notifier, NotifierComponents} from 'react-native-notifier';

export const errorNotify = () => {
  Notifier.showNotification({
    title: 'SomeThing Wrong Happen ',
    description: 'Please try Again Later',
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'error',
    },
  });
};
export const successNotify = (title: string = '', description: string = '') => {
  Notifier.showNotification({
    title: title,
    description: description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success',
    },
  });
};
