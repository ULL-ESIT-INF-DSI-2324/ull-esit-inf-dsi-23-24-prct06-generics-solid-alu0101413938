/**
 * interfaz que permite dar la "funcionalidad" de alamacenar
 */
export interface Storable<T> {
  addItem(item :T) :void
  getItem(index :number) :T
  removeItem(key :T) :void
  getNumberOfItem() :number
}