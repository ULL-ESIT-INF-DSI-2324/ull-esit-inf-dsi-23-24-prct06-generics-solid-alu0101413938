/**
 * Permite dar la "funcionalidad" de escribir en leer
 */
export interface IFileReader {
  readFile(filePath: string): string;
}
