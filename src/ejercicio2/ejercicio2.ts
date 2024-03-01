import { FacturaBasica } from "./class_generador_factura_basica";
import { GeneradorFacturaHTML } from "./class_generador_factura_html";
import { GeneradorFacturaPDF } from "./class_generador_factura_pdf";

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
