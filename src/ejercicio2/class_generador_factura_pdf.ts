import { GeneradorFactura } from "./abstract_class_generador_factura";

export class GeneradorFacturaPDF extends GeneradorFactura {
  /**
   * @returns Genera una factura en formato PDF
   */
  generar(): string {
    return `PDF generado para la factura de ${this.factura.cliente}`;
  }
}