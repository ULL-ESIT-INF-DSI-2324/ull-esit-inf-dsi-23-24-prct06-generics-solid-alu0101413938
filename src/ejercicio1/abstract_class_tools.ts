import { Storable } from "./interface_storable"
import { Searchable } from "./interface_searchable"

/**
 * Clase abstracta que permite crear una herramienta
 */
export abstract class Tools<T> implements Storable<T>, Searchable<T> {
  constructor(protected items :T[], protected name :string[]) {
  }

  /**
   * 
   * @param index indice dentro del array
   * @returns devuelve el nombre de la herramienta
   */
  getName(index: number): string {
    return this.name[index]
  }

  /**
   * Introduce una nueva herramienta
   */
  addItem(item: T): void {
    this.items.push(item)
  }

  /**
   * 
   * @param index indice dentro del array
   * @returns devuelve una herramienta
   */
  getItem(index: number): T {
    return this.items[index]
  }

  /**
   * Elimina una herramienta segun el tipo T
   */
  removeItem(key: T): void {
    const index = this.items.indexOf(key, 0)
    if (index <= -1) return
    this.items.splice(index, 1)
  }

  /**
   * 
   * @returns devuelve cuantas herramientas existen
   */
  getNumberOfItem(): number {
    return this.items.length
  }

  /**
   * definicion de un metodo abstracto para implementar en las clases herederas
   */
  abstract search(key: string): T[]
}