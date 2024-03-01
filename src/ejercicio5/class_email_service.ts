import { NotificationService } from "./interface_notification_service";

/**
 * clase que añade la mensajeria por email
 */
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}