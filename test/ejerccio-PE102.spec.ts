import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection, StringSearchableCollection } from '../src/ejercicio-PE102'; // Reemplaza 'ruta' con la ruta real de tu función

describe('Clase StringSearchableCollection', () => {
  it('debería devolver el tamaño del array', () => {
    const expectedWords = ["hola", "volar", "adios"];
    const strSearchableCollection :StringSearchableCollection = new StringSearchableCollection(["hola", "volar", "adios"])
    expect(strSearchableCollection.getNumberOfItem()).to.deep.equal(expectedWords.length);
  });
  it('debería eliminar un elemento', () => {
    const expectedWords = ["volar", "adios"];
    const strSearchableCollection :StringSearchableCollection = new StringSearchableCollection(["hola", "volar", "adios"])
    strSearchableCollection.removeItem("hola")    
    expect(strSearchableCollection.getItems()).to.deep.equal(expectedWords);
  });
  it('debería añadir un elemento', () => {
    const expectedWords = ["hola", "volar", "adios", "buenas"];
    const strSearchableCollection :StringSearchableCollection = new StringSearchableCollection(["hola", "volar", "adios"])
    strSearchableCollection.addItem("buenas") 
    expect(strSearchableCollection.getItems()).to.deep.equal(expectedWords);
  });
  it('debería buscar elementos', () => {
    const expectedWords = ["hola", "volar"];
    const strSearchableCollection :StringSearchableCollection = new StringSearchableCollection(["hola", "volar", "adios"]) 
    expect(strSearchableCollection.search("ola")).to.deep.equal(expectedWords);
  });
});

describe('Clase NumericSearchableCollection', () => {
  it('debería devolver el tamaño del array', () => {
    const expectedWords = [0, 1, 2];
    const strSearchableCollection :NumericSearchableCollection = new NumericSearchableCollection([0, 1, 2])
    expect(strSearchableCollection.getNumberOfItem()).to.deep.equal(expectedWords.length);
  });
  it('debería eliminar un elemento', () => {
    const expectedWords = [1, 2];
    const strSearchableCollection :NumericSearchableCollection = new NumericSearchableCollection([0, 1, 2])
    strSearchableCollection.removeItem(0)    
    expect(strSearchableCollection.getItems()).to.deep.equal(expectedWords);
  });
  it('debería añadir un elemento', () => {
    const expectedWords = [0, 1, 2, 3];
    const strSearchableCollection :NumericSearchableCollection = new NumericSearchableCollection([0, 1, 2])
    strSearchableCollection.addItem(3) 
    expect(strSearchableCollection.getItems()).to.deep.equal(expectedWords);
  });
  it('debería buscar elementos', () => {
    const expectedWords = [1];
    const strSearchableCollection :NumericSearchableCollection = new NumericSearchableCollection([0, 1, 2]) 
    expect(strSearchableCollection.search(1)).to.deep.equal(expectedWords);
  });
});
