import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Box } from '../src/ejercicio1/class_box'; // Reemplaza './ruta' con la ruta real donde se encuentran las clases e interfaces

describe('Box', () => {
  let numbersBox: Box<number>;
  let stringsBox: Box<string>;

  beforeEach(() => {
    numbersBox = new Box<number>([0, 1, 2, 3, 4], ["zero", "one", "two", "three", "four"]);
    stringsBox = new Box<string>(["fruit1", "fruit2", "fruit3", "fruit4"], ["apple", "banana", "orange", "grape"]);
  });

  it('Debería agregar un elemento a la caja de números', () => {
    numbersBox.addItem(6);
    expect(numbersBox.getNumberOfItem()).to.equal(6);
  });

  it('Debería obtener un número de la caja de números', () => {
    expect(numbersBox.getItem(2)).to.equal(2);
  });

  it('Debería eliminar un elemento de la caja de números', () => {
    numbersBox.removeItem(4);
    expect(numbersBox.getNumberOfItem()).to.equal(4);
  });

  it('Debería buscar elementos en la caja de números', () => {
    expect(numbersBox.search("three")).to.deep.equal([3, 3, 3, 3, 3]);
  });

  it('Debería agregar una fruta a la caja de strings', () => {
    stringsBox.addItem("kiwi");
    expect(stringsBox.getNumberOfItem()).to.equal(5);
  });

  it('Debería obtener el nombre de una fruta de la caja de strings', () => {
    expect(stringsBox.getName(1)).to.equal("banana");
  });

  it('Debería eliminar una fruta de la caja de strings', () => {
    stringsBox.removeItem("banana");
    expect(stringsBox.getNumberOfItem()).to.equal(4);
  });

  it('Debería buscar frutas en la caja de strings', () => {
    expect(stringsBox.search("orange")).to.deep.equal(["fruit3", "fruit3", "fruit3", "fruit3"]);
  });
});