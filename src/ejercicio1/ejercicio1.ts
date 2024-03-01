import { Box } from "./class_box";

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
console.log(stringsBox);