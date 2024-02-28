// Interfaz para representar una factura
interface Factura {
  cliente: string;
  items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  calcularTotal(): number;
}

// Clase base para todas las implementaciones de generadores de factura
abstract class GeneradorFactura {
  protected factura: Factura;

  constructor(factura: Factura) {
    this.factura = factura;
  }

  abstract generar(): string;
}

// Implementación para generar factura en formato PDF
class GeneradorFacturaPDF extends GeneradorFactura {
  generar(): string {
    // Implementación para generar PDF
    return `PDF generado para la factura de ${this.factura.cliente}`;
  }
}

// Implementación para generar factura en formato HTML
class GeneradorFacturaHTML extends GeneradorFactura {
  generar(): string {
    // Implementación para generar HTML
    return `HTML generado para la factura de ${this.factura.cliente}`;
  }
}

// Clase que representa una factura básica
class FacturaBasica implements Factura {
  cliente: string;
  items: { descripcion: string; cantidad: number; precioUnitario: number }[];

  constructor(cliente: string, items: { descripcion: string; cantidad: number; precioUnitario: number }[]) {
    this.cliente = cliente;
    this.items = items;
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
  }
}

// Ejemplo de uso
const facturaEjemplo = new FacturaBasica("Cliente ejemplo", [
  { descripcion: "Producto A", cantidad: 2, precioUnitario: 10 },
  { descripcion: "Producto B", cantidad: 1, precioUnitario: 20 }
]);

const generadorPDF = new GeneradorFacturaPDF(facturaEjemplo);
console.log(generadorPDF.generar());

const generadorHTML = new GeneradorFacturaHTML(facturaEjemplo);
console.log(generadorHTML.generar());

console.log(facturaEjemplo.calcularTotal());
console.log(facturaEjemplo.cliente);
console.log(facturaEjemplo.items);
