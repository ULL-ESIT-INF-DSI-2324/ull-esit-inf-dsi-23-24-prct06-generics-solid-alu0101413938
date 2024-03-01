import * as fs from 'fs'
import { IFileWriter } from './interface_file_writer';

/**
 * permite crear un fichero en el que se pueda escribir
 */
export class SimpleFileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}