import { IFileReader } from "./interface_file_reader";
import { IFileWriter } from "./interface_file_writer";

/**
 * Permite crear ficheros que se puedan leer y escribir actua como un "controlador" de ficheros
 */
export class FileManager {
  constructor(private fileReader: IFileReader, private fileWriter: IFileWriter) {}

  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}