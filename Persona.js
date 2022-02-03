"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(apellido, edad, nombre, cuantosKilometros) {
        this.kilometros = cuantosKilometros;
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }
    Persona.prototype.camina = function () {
        console.log('Estoy caminando ' + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
