import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Factura } from '../src/ejercicio2/interface_factura'
import { GeneradorFacturaPDF } from '../src/ejercicio2/class_generador_factura_pdf'
import { GeneradorFacturaHTML } from '../src/ejercicio2/class_generador_factura_html'
import { FacturaBasica } from '../src/ejercicio2/class_generador_factura_basica'


describe('Factura', () => {
  it('Debería calcular el total correctamente', () => {
    const factura: Factura = new FacturaBasica("Cliente ejemplo", [
      { descripcion: "Producto A", cantidad: 2, precioUnitario: 10 },
      { descripcion: "Producto B", cantidad: 1, precioUnitario: 20 }
    ]);
    expect(factura.calcularTotal()).to.equal(40);
  });

  it('GeneradorFacturaPDF debería generar PDF correctamente', () => {
    const factura: Factura = new FacturaBasica("Cliente ejemplo", [
      { descripcion: "Producto A", cantidad: 2, precioUnitario: 10 },
      { descripcion: "Producto B", cantidad: 1, precioUnitario: 20 }
    ]);
    const generadorPDF = new GeneradorFacturaPDF(factura);
    expect(generadorPDF.generar()).to.equal(`PDF generado para la factura de ${factura.cliente}`);
  });

  it('GeneradorFacturaHTML debería generar HTML correctamente', () => {
    const factura: Factura = new FacturaBasica("Cliente ejemplo", [
      { descripcion: "Producto A", cantidad: 2, precioUnitario: 10 },
      { descripcion: "Producto B", cantidad: 1, precioUnitario: 20 }
    ]);
    const generadorHTML = new GeneradorFacturaHTML(factura);
    expect(generadorHTML.generar()).to.equal(`HTML generado para la factura de ${factura.cliente}`);
  });
});

