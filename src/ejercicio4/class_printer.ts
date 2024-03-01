import { Printable } from "./interface_printable";

/**
 * clase que crea una impresora
 */
export class Printer implements Printable {
  print(): string {
    console.log('Printing...');
    return 'Printing...'
  }
}