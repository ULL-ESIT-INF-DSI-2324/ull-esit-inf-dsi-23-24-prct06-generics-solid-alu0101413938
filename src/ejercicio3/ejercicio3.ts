import { SimpleFileReader } from './class_simple_file_reader';
import { SimpleFileWriter } from './class_simple_file_writer';
import { FileManager } from './class_file_manager';

// Client code
export const fileReader = new SimpleFileReader();
export const fileWriter = new SimpleFileWriter();
const fileManager = new FileManager(fileReader, fileWriter);

const filePath = './example.txt';

// Reading content
const currentContent = fileManager.readFile(filePath);
console.log('Current content:', currentContent);

// Writing content
const newData = 'This is new content to be written into the file.';
fileManager.writeFile(filePath, newData);

// Updating content
const updatedContent = fileManager.readFile(filePath);
console.log('Updated content:', updatedContent);
