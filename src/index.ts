interface Storable<T> {
  addItem(item :T) :void
  getItem(index :number) :T
  removeItem(key :T) :void
  getNumberOfItem() :number
}

interface Searchable<T> {
  search(key: string) :T[]
}

abstract class Tools<T> implements Storable<T>, Searchable<T> {
  constructor(protected items :T[], protected name :string[]) {
  }

  getName(index: number): string {
    return this.name[index]
  }

  addItem(item: T): void {
    this.items.push(item)
  }

  getItem(index: number): T {
    return this.items[index]
  }

  removeItem(key: T): void {
    const index = this.items.indexOf(key, 0)
    if (index <= -1) return
    this.items.splice(index, 1)
  }

  getNumberOfItem(): number {
    return this.items.length
  }

  abstract search(key: string): T[]
}

class Box<T> extends Tools<T> {
  constructor(item :T[], name :string[]) {
    super(item, name)
  }

  search(key: string): T[] {
    const result :T[] = []
    this.name.forEach(item => {
      const index = this.name.indexOf(key, 0)
      result.push(this.getItem(index))
    })
    return result
  }
}

// Creación de una instancia de Box con números
const numbersBox = new Box<number>([0, 1, 2, 3, 4], ["zero", "one", "two", "three", "four"]);

// Agregar un nuevo número al box
numbersBox.addItem(6);

// Obtener el número en el índice 2
const numberAtIndex2 = numbersBox.getItem(2);
console.log("Number at index 2:", numberAtIndex2); // Output: Number at index 2: 2

// Eliminar el número "4" del box
numbersBox.removeItem(4);

// Obtener el número de elementos en el box
const numberOfItems = numbersBox.getNumberOfItem();
console.log("Number of items:", numberOfItems); // Output: Number of items: 5

// Buscar un número específico en el box
const searchResult = numbersBox.search("three");
console.log("Search Result:", searchResult); // Output: Search Result: [3]

// Creación de una instancia de Box con strings
const stringsBox = new Box<string>(["apple", "banana", "orange", "grape"], ["fruit1", "fruit2", "fruit3", "fruit4"]);

// Agregar una nueva fruta al box
stringsBox.addItem("kiwi");

// Obtener el nombre de la fruta en el índice 1
const fruitNameAtIndex1 = stringsBox.getName(1);
console.log("Fruit name at index 1:", fruitNameAtIndex1); // Output: Fruit name at index 1: fruit2

// Eliminar la fruta "banana" del box
stringsBox.removeItem("banana");

// Obtener el número de elementos en el box de frutas
const numberOfFruits = stringsBox.getNumberOfItem();
console.log("Number of fruits:", numberOfFruits); // Output: Number of fruits: 4

// Buscar una fruta específica en el box
const fruitSearchResult = stringsBox.search("orange");
console.log("Fruit Search Result:", fruitSearchResult); // Output: Fruit Search Result: ["orange"]
