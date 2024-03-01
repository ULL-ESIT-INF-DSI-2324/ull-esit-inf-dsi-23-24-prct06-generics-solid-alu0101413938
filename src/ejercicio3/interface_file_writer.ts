/**
 * Permite dar la "funcionalidad" de escribir en ficheros
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}