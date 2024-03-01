import { ShortMessageService } from "./class_shot_message_service";
import { EmailService } from "./class_email_service";
import { Notifier } from "./class_notifier";

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');