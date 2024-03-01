import { GeneradorFactura } from "./abstract_class_generador_factura";

export class GeneradorFacturaHTML extends GeneradorFactura {
  /**
   * @returns genera una factura en formato HTML 
   */
  generar(): string {
    return `HTML generado para la factura de ${this.factura.cliente}`;
  }
}