interface NotificationService {
  notify(message: string): void;
}

class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');

/**
 * Se ha creado un interface _NotificationService_ el cual nos permite implementar en los diferentes tipos de Mensajes
 * de esta manera en la clase _Notifier_ el constructor solo tendria que recibir _NotificationService_ y no la union de
 * de las dos clases, ya que dichas clases implementan la interface _NotificationService_
 */