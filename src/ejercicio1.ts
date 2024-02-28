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
    this.name.forEach(() => {
      const index = this.name.indexOf(key, 0)
      result.push(this.getItem(index))
    })
    return result
  }
}

const numbersBox = new Box<number>([0, 1, 2, 3, 4], ["zero", "one", "two", "three", "four"]);
numbersBox.addItem(6);

console.log("Number at index 2:", numbersBox.getItem(2));

numbersBox.removeItem(4);

console.log("Number of items:", numbersBox.getNumberOfItem());
console.log("Search Result:", numbersBox.search("three"));

const stringsBox = new Box<string>(["fruit1", "fruit2", "fruit3", "fruit4"], ["apple", "banana", "orange", "grape"]);
stringsBox.addItem("kiwi");

console.log("Fruit name at index 1:", stringsBox.getName(1));

stringsBox.removeItem("banana");

console.log("Number of fruits:", stringsBox.getNumberOfItem());
console.log("Fruit Search Result:", stringsBox.search("orange"));
