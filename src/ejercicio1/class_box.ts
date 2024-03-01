import { Tools } from "./abstract_class_tools";

/**
 * Clase box que permite almacenar herramientas de un tipo T
 */
export class Box<T> extends Tools<T> {
  constructor(item :T[], name :string[]) {
    super(item, name)
  }

  /**
   * Permite buscar una herramienta en la caja
   * @returns devuelve un array de tipo T
   */
  search(key: string): T[] {
    const result :T[] = []
    this.name.forEach(() => {
      const index = this.name.indexOf(key, 0)
      result.push(this.getItem(index))
    })
    return result
  }
}