import izitoast, {IziToastPosition, IziToastSettings} from 'izitoast';
const COLOR_CONFIG = {
  message: 'blue',
  warning: 'yellow',
  error: 'red',
  success: 'green',
};

class Notification {
  defaultConfig: IziToastSettings;
  constructor(defaultConfig: IziToastSettings) {
    this.defaultConfig = defaultConfig;
  }
  message(message: string, title?: string, pos?: IziToastPosition) {
    izitoast.show({
      title: title || 'Message',
      message: message || '',
      position: pos || this.defaultConfig.position,
      color: COLOR_CONFIG.message,
    });
  }

  success(message: string, title?: string, pos?: IziToastPosition) {
    izitoast.success({
      title: title || 'Success',
      message: message || '',
      position: pos || this.defaultConfig.position,
      color: COLOR_CONFIG.success,
    });
  }

  warning(message: string, title?: string, pos?: IziToastPosition) {
    izitoast.warning({
      title: title || 'Warning',
      message: message || '',
      position: pos || this.defaultConfig.position,
      color: COLOR_CONFIG.warning,
    });
  }

  error(message: string, title?: string, pos?: IziToastPosition) {
    izitoast.error({
      title: title || 'Error',
      message: message || '',
      position: pos || this.defaultConfig.position,
      color: COLOR_CONFIG.error,
    });
  }
}

const notification = new Notification({
  position: 'topRight',
});

export default notification;
