import * as fs from 'fs'
import { IFileReader } from "./interface_file_reader";

/**
 * permite crear un fichero en el que se pueda leer
 */
export class SimpleFileReader implements IFileReader {
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}