import { Factura } from "./interface_factura";

/**
 * clase que permite crear una factura basica
 */
export class FacturaBasica implements Factura {
  cliente: string;
  items: { descripcion: string; cantidad: number; precioUnitario: number }[];

  constructor(cliente: string, items: { descripcion: string; cantidad: number; precioUnitario: number }[]) {
    this.cliente = cliente;
    this.items = items;
  }

  /**
   * Permite calcular el coste total 
   */
  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
  }
}