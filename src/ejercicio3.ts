import * as fs from 'fs';

class FileManager {
  constructor(private filePath: string) {
  }

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

// Client code
const fileManager = new FileManager('example.txt');

// Reading content
const currentContent = fileManager.readFile();
console.log('Current content:', currentContent);

// Writing content
const newData = 'This is new content to be written into the file.'
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log('Updated content:', updatedContent);