[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)
# Clases e interfaces genéricas. Principios SOLID
En esta práctica, además de resolver una serie de ejercicios de programación para profundizar en las clases e interfaces genéricas del lenguaje TypeScript, también utilizaremos los principios **SOLID** de diseño *orientado a objetos*. Además, para garantizar la calidad del código, se emplearán herramientas como Istanbul y Coveralls para cubrir nuestro código. Asimismo, se nos plantearán diferentes códigos para analizar y determinar qué principio **SOLID** no se está cumpliendo, lo que nos permitirá mejorar nuestra comprensión y aplicación de estos principios.

## Ejercicio 1 - La mudanza
En este ejercicio, se nos solicita desarrollar un sistema para gestionar una mudanza, donde se manejarán enseres que serán guardados en cajas. Estas cajas deben ser capaces de añadir más enseres, consultar los enseres almacenados en ellas y eliminar enseres según sea necesario.

Para lograrlo, utilizaremos una clase abstracta llamada **Tools**, que representará los enseres y nos permitirá llevar a cabo las operaciones mencionadas. Esta clase implementará las interfaces **Storable** y **Searchable**, las cuales proporcionan las funcionalidades de **almacenamiento** y **búsqueda**, respectivamente.

Finalmente, contamos con la clase **Box**, que se encarga de almacenar los diferentes enseres y nos permite buscar dentro de la caja los enseres almacenados.
```typescript
/**
 * interfaz que permite dar la "funcionalidad" de alamacenar
 */
export interface Storable<T> {
  addItem(item :T) :void
  getItem(index :number) :T
  removeItem(key :T) :void
  getNumberOfItem() :number
}

/**
 * interfaz que permite dar la "funcionalidad" de busqueda
 */
export interface Searchable<T> {
  search(key: string) :T[]
}

/**
 * Clase abstracta que permite crear una herramienta
 */
export abstract class Tools<T> implements Storable<T>, Searchable<T> {
  constructor(protected items :T[], protected name :string[]) {
  }

  /**
   * 
   * @param index indice dentro del array
   * @returns devuelve el nombre de la herramienta
   */
  getName(index: number): string {
    return this.name[index]
  }

  /**
   * Introduce una nueva herramienta
   */
  addItem(item: T): void {
    this.items.push(item)
  }

  /**
   * 
   * @param index indice dentro del array
   * @returns devuelve una herramienta
   */
  getItem(index: number): T {
    return this.items[index]
  }

  /**
   * Elimina una herramienta segun el tipo T
   */
  removeItem(key: T): void {
    const index = this.items.indexOf(key, 0)
    if (index <= -1) return
    this.items.splice(index, 1)
  }

  /**
   * 
   * @returns devuelve cuantas herramientas existen
   */
  getNumberOfItem(): number {
    return this.items.length
  }

  /**
   * definicion de un metodo abstracto para implementar en las clases herederas
   */
  abstract search(key: string): T[]
}
/**
 * Clase box que permite almacenar herramientas de un tipo T
 */
export class Box<T> extends Tools<T> {
  constructor(item :T[], name :string[]) {
    super(item, name)
  }

  /**
   * Permite buscar una herramienta en la caja
   * @returns devuelve un array de tipo T
   */
  search(key: string): T[] {
    const result :T[] = []
    this.name.forEach(() => {
      const index = this.name.indexOf(key, 0)
      result.push(this.getItem(index))
    })
    return result
  }
}
```

## Ejercicio 2 - Facturas en diferentes formatos
En este ejercicio, se nos encomienda desarrollar un sistema capaz de generar facturas en distintos formatos, incluyendo HTML, PDF y un formato básico de factura. Para asegurar una buena práctica de diseño, aplicaremos el Principio de Responsabilidad Única (SRP - Single Responsibility Principle).

Vamos a diseñar una interfaz llamada **Factura** que representará las propiedades de una factura. Esta interfaz será implementada por la clase **FacturaBasica**. Además, se creará una clase abstracta llamada **GeneradorFactura**, de la cual derivarán las clases **GeneradorFacturaHTML** y **GeneradorFacturaPDF**. Estas últimas clases serán utilizadas para generar las facturas en los formatos correspondientes.
```typescript
/**
 * permite dar la "funcionalidad" y estructura de una factura
 */
export interface Factura {
  cliente: string;
  items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  calcularTotal(): number;
}


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

export class GeneradorFacturaHTML extends GeneradorFactura {
  /**
   * @returns genera una factura en formato HTML 
   */
  generar(): string {
    return `HTML generado para la factura de ${this.factura.cliente}`;
  }
}

export class GeneradorFacturaPDF extends GeneradorFactura {
  /**
   * @returns Genera una factura en formato PDF
   */
  generar(): string {
    return `PDF generado para la factura de ${this.factura.cliente}`;
  }
}
```

## Ejercicio 3 - Gestor de ficheros
El código proporcionado no cumple el principio SOLID de Responsabilidad Única (SRP) porque la clase FileManager tiene más de una razón para cambiar. Actualmente, la clase es responsable tanto de leer como de escribir en el archivo, lo que significa que está incumpliendo el principio de SRP al tener dos responsabilidades distintas.
Una solucion para esto seria lo siguiente:
```typescript
/**
 * Permite dar la "funcionalidad" de escribir en ficheros
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}

/**
 * Permite dar la "funcionalidad" de escribir en leer
 */
export interface IFileReader {
  readFile(filePath: string): string;
}

/**
 * permite crear un fichero en el que se pueda leer
 */
export class SimpleFileReader implements IFileReader {
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

/**
 * permite crear un fichero en el que se pueda escribir
 */
export class SimpleFileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

/**
 * Permite crear ficheros que se puedan leer y escribir actua como un "controlador" de ficheros
 */
export class FileManager {
  constructor(private fileReader: IFileReader, private fileWriter: IFileWriter) {}

  public readFile(filePath: string): string {
    return this.fileReader.readFile(filePath);
  }

  public writeFile(filePath: string, data: string): void {
    this.fileWriter.writeFile(filePath, data);
  }
}
```

## Ejercicio 4 - Impresoras y escáneres
El código proporcionado no cumple el principio de Segregación de Interfaces (ISP) de SOLID, ya que la interfaz PrintableScannable obliga a todas las clases que la implementan a proporcionar tanto la funcionalidad de impresión como la funcionalidad de escaneo, incluso si una de esas funcionalidades no se utiliza en una determinada clase.
Una solucion para esto seria lo siguiente:
```typescript
/**
 * permite añadir la funcionalidad de imprimir
 */
export interface Printable {
  print(): void;
}

/**
 * permite añadir la funcionalidad de escanear
 */
export interface Scannable {
  scan(): void;
}

/**
 * clase que crea una impresora
 */
export class Printer implements Printable {
  print(): string {
    console.log('Printing...');
    return 'Printing...'
  }
}

/**
 * clase que crea un scanner
 */
export class Scanner implements Scannable {
  scan(): string {
    console.log('Scanning...');
    return 'Scanning...'
  }
}

/**
 * clase que permite fucionar las funcionalidades de la impresora y el escaner
 */
export class PrinterScanner implements Printable, Scannable {
  print(): string {
    console.log('Printing...');
    return 'Printing...';
  }

  scan(): string {
    console.log('Scanning...');
    return 'Scanning...';
  }
}
```

## Ejercicio 5 - Servicio de mensajería
El código proporcionado no cumple el principio de Abierto/Cerrado (OCP) de SOLID, ya que la clase Notifier está directamente acoplada a las implementaciones concretas de EmailService y ShortMessageService.
Una solucion para esto seria lo siguiente:
```typescript
/**
 * permite añadir la funcionalidad de un servicio de notificaciones
 */
export interface NotificationService {
  notify(message: string): void;
}

/**
 * clase que añade la mensajeria por email
 */
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * clase que añade la mensajeria sms
 */
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * permite crear un objeto que permite administrar los diferentes tipos de notificaciones
 */
export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

```

## Conclusiones
En conclusión, resolver ejercicios de programación utilizando clases e interfaces genéricas en *TypeScript*, junto con la aplicación de los principios **SOLID** de diseño *orientado a objetos*, nos proporciona una comprensión más profunda de estos conceptos fundamentales en el desarrollo de software. Además, el uso de herramientas como **Istanbul** y **Coveralls** para cubrir nuestro código garantiza la calidad y la fiabilidad del mismo.

Sin embargo, es importante tener en cuenta que la implementación de los principios **SOLID** puede presentar desafíos. Aunque estos principios nos permiten organizar nuestro código, hacerlo más escalable y fácil de mantener, su aplicación puede resultar complicada en situaciones reales. Requiere un buen entendimiento del diseño *orientado a objetos* y una planificación cuidadosa para asegurar que los diferentes principios se apliquen de manera coherente y efectiva en todo el proyecto.