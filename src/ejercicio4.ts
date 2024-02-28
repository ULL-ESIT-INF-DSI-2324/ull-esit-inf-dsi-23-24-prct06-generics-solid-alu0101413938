interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}

const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();

const printerScanner = new PrinterScanner();
printerScanner.print();
printerScanner.scan();
/**
 * En este caso se ha separado la interface _PrintableScannable_ en dos ya que rompia con el principio de Segregación de Interfaces
 * dando como resultado dos interface _Printable_ y _Scannable_ que posteriormente se implementaran en sus respectivas clases
 */