import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Printer } from '../src/ejercicio4/class_printer';
import { Scanner } from '../src/ejercicio4/class_scanner'
import { PrinterScanner } from '../src/ejercicio4/class_printer_scanner'


describe('Printer', () => {
  const printer = new Printer();
  it('debe imprimirse cuando se llama al método printd', () => {
    expect(printer.print()).to.deep.equal('Printing...');
  });
});

describe('Scanner', () => {
  const scanner = new Scanner();
  it('debe escanear cuando se llama al método scan', () => {
    expect(scanner.scan()).to.deep.equal('Scanning...');
  });
});

describe('PrinterScanner', () => {
  const printerScanner = new PrinterScanner();
  it('debe imprimirse cuando se llama al método print', () => {
    expect(printerScanner.print()).to.deep.equal('Printing...');
  });
  it('debe escanear cuando se llama al método scan', () => {
    expect(printerScanner.scan()).to.deep.equal('Scanning...');
  });
});
