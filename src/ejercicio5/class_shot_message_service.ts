import { NotificationService } from "./interface_notification_service";

/**
 * clase que añade la mensajeria sms
 */
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}