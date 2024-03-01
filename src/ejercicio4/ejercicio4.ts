import { PrinterScanner } from "./class_printer_scanner";
import { Printer } from "./class_printer";
import { Scanner } from "./class_scanner";

const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();

const printerScanner = new PrinterScanner();
printerScanner.print();
printerScanner.scan();