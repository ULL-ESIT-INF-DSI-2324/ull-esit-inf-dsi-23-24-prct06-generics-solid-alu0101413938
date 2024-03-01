import { expect } from 'chai';
import { describe, it } from 'mocha';
import { EmailService } from '../src/ejercicio5/class_email_service'
import { ShortMessageService } from '../src/ejercicio5/class_shot_message_service'
import { Notifier } from '../src/ejercicio5/class_notifier'

describe('Notifier', () => {
  describe('sendNotification con EmailService', () => {
    it('Debe enviar notification por email', () => {
      // Arrange
      const emailService = new EmailService();
      const notifier = new Notifier(emailService);
      const message = 'Hello World!';
      let sentMessage = '';
      const originalConsoleLog = console.log;
      console.log = (message: string) => {
        sentMessage = message;
      };
      notifier.sendNotification(message);
      expect(sentMessage).to.equal(`Sending notification by email: ${message}`);
      console.log = originalConsoleLog;
    });
  });

  describe('sendNotification with ShortMessageService', () => {
    it('Debe enviar notification por SMS', () => {
      const shortMessageService = new ShortMessageService();
      const notifier = new Notifier(shortMessageService);
      const message = 'Hello World!';
      let sentMessage = '';
      const originalConsoleLog = console.log;
      console.log = (message: string) => {
        sentMessage = message;
      };
      notifier.sendNotification(message);
      expect(sentMessage).to.equal(`Sending notification by SMS: ${message}`);
      console.log = originalConsoleLog;
    });
  });
});
