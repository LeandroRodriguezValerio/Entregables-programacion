"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const PersonajeDefault_js_1 = require("./PersonajeDefault.js");
class Mago extends PersonajeDefault_js_1.PersonajeDefault {
    constructor(poderMagico, nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
        this.poderMagico = poderMagico;
    }
    getPoderMagico() {
        return this.poderMagico;
    }
    setPoderMagico(nuevoPoderMagico) {
        this.poderMagico = nuevoPoderMagico;
    }
}
exports.Mago = Mago;
