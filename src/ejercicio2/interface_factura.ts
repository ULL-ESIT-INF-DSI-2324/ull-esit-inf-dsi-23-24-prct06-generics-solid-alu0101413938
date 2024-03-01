/**
 * permite dar la "funcionalidad" y estructura de una factura
 */
export interface Factura {
  cliente: string;
  items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  calcularTotal(): number;
}