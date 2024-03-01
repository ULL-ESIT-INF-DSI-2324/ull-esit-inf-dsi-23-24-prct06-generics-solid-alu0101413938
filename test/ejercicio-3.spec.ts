import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as fs from 'fs';
import { FileManager } from '../src/ejercicio3/class_file_manager'; // Reemplaza './ruta' con la ruta real donde se encuentra la clase FileManager
import { fileReader, fileWriter } from '../src/ejercicio3/ejercicio3'

describe('FileManager', () => {
  const filePath = './test.txt';
  const testContent = 'This is a test content.';

  it('Debería escribir y leer el archivo correctamente', () => {
    // Escribir en el archivo
    const fileManager = new FileManager(fileReader, fileWriter);
    fileManager.writeFile(filePath, testContent);

    // Leer el archivo y verificar el contenido
    const readContent = fs.readFileSync(filePath, 'utf-8');
    expect(readContent).to.equal(testContent);
  });

  it('Debería actualizar el archivo correctamente', () => {
    // Escribir en el archivo
    const fileManager = new FileManager(fileReader, fileWriter);
    const newData = 'This is updated content.';
    fileManager.writeFile(filePath, newData);

    // Leer el archivo y verificar el contenido actualizado
    const readContent = fs.readFileSync(filePath, 'utf-8');
    expect(readContent).to.equal(newData);
  });

  // Limpiar el archivo después de las pruebas
  after(() => {
    fs.unlinkSync(filePath);
  });
});
