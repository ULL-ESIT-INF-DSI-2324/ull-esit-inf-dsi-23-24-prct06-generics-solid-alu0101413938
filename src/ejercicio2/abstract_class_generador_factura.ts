import { Factura } from "./interface_factura";

/**
 * Clase abstracta con la estructura basica de una factura
 */
export abstract class GeneradorFactura {
  protected factura: Factura;

  constructor(factura: Factura) {
    this.factura = factura;
  }
  /**
   * metodo abstracto para implementar en las subclases
   */
  abstract generar(): string;
}