export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(apellido: string, edad: number, nombre:string, cuantosKilometros: number) {
        this.kilometros = cuantosKilometros;
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;

    }

    camina() {
        console.log('Estoy caminando ' + this.kilometros);
    }

}