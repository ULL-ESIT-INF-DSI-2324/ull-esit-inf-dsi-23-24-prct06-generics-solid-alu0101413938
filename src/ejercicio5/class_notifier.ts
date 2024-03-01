import { NotificationService } from "./interface_notification_service";

/**
 * permite crear un objeto que permite administrar los diferentes tipos de notificaciones
 */
export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
