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
