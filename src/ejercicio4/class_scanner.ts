import { Scannable } from "./interface_scannable";

/**
 * clase que crea un scanner
 */
export class Scanner implements Scannable {
  scan(): string {
    console.log('Scanning...');
    return 'Scanning...'
  }
}