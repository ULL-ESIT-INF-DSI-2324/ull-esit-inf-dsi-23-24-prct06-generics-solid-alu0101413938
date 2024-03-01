/**
 * interfaz que permite dar la "funcionalidad" de busqueda
 */
export interface Searchable<T> {
  search(key: string) :T[]
}
