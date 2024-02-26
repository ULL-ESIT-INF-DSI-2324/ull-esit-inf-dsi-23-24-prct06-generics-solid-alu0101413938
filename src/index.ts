// Implemente una interfaz genérica 'Collectable' con los siguientes métodos,
// los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItems(), removeItem, getNumberOfItems.
/**
 * Interfaz generiga Collectable<T>
 * Metodos: addItem, getItems(), removeItem, getNumberOfItem
 */
interface Collectable<T> {
  addItem(item :T) :void
  getItems() :T[]
  removeItem(key :T) :void
  getNumberOfItem() :number
}
// Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que desee
// implementar dicha interfaz: search. Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.
/**
 * Interfaz generica Searchable<T>
 * Metodos: search
 */
interface Searchable<T> {
  search(item :T) :T[]
}
// Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable'
// y 'Searchable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable',
// mientras que el método search de 'Searchable' será abstracto, de modo que aquellas clases que extiendan a 
// 'SearchableCollection' tengan que implementarlo obligatoriamente.
/**
 * Clase abstracta que implementa las interfaces Collectable y Searchable
 * Metodos: addItem, removeItem, getNumberOfItem
 */
abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(protected items: T[]) {
  }
  
  /**
   * Permite añadir items
   * @param newItem item nuevo el cual se va a añadir
   */
  addItem(newItem :T): void {
    this.items.push(newItem)
  }

  /**
   * Metodo que permite obtener el array de items
   * @returns devuelve el array de items
   */
  getItems(): T[] {
    return this.items 
  }

  /**
   * Permite eliminar un item dado un indice
   * @param key indice que hace referencia a una posicion del indice
   */
  removeItem(key :T): void {
    const index = this.items.indexOf(key, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    else console.log("No se pudo eliminar el item");
  }

  /**
   * Permite obtener la cantidad de items del array
   * @returns devuelve la cantidad de items
   */
  getNumberOfItem(): number {
    return this.items.length
  }

  abstract search(item: T): T[]
}

// Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'NumericSearchableCollection' y 
// 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search
// deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección.
// La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una subcadena
// y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.
/**
 * Clase NumericSearchableCollection que extiende la clase abstracta SearchableCollection
 * Implementa el metodo search para numbers
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(numbers :number[]) {
    super(numbers)
  }
  /**
   * Permite buscar un numero del array
   * @param item numero el cual se desea buscar
   * @returns devuelve las numeros que coinciden
   */
  search(item: number): number[] {
    const result :number[] = []
    this.getItems().forEach(element => {
      if (element == item) {
        console.log(element);
        result.push(element)
      }
    })
    return result
  }
}

/**
 * Clase StringSearchableCollection que extiende la clase abstracta SearchableCollection
 * Implementa el metodo search numbers
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  constructor(words :string[]) {
    super(words)
  }
  /**
   * Permite buscar todas las cadenas que concuerden con la subcadena
   * @param item subcadena para buscar
   * @returns devuelve las cadenas que coinciden
   */
  search(item: string): string[] {
    const result :string[] = []
    this.getItems().forEach(element => {
      if (element.includes(item)) {
        console.log(element);
        result.push(element)
      }
    })
    return result
  }
}

const strSearchableCollection :StringSearchableCollection = new StringSearchableCollection(["hola", "volar", "adios"]) 
console.log(strSearchableCollection.search("ola"));

