/**
 * permite añadir la funcionalidad de un servicio de notificaciones
 */
export interface NotificationService {
  notify(message: string): void;
}