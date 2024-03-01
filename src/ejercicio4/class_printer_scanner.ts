import { Printable } from "./interface_printable";
import { Scannable } from "./interface_scannable";

/**
 * clase que permite fucionar las funcionalidades de la impresora y el escaner
 */
export class PrinterScanner implements Printable, Scannable {
  print(): string {
    console.log('Printing...');
    return 'Printing...';
  }

  scan(): string {
    console.log('Scanning...');
    return 'Scanning...';
  }
}