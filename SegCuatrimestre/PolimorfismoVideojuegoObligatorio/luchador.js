"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const PersonajeDefault_js_1 = require("./PersonajeDefault.js");
class Luchador extends PersonajeDefault_js_1.PersonajeDefault {
    constructor(ataque, nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
        this.ataque = ataque;
    }
    getAtaque() {
        return this.ataque;
    }
    setAtaque(nuevoataque) {
        this.ataque = nuevoataque;
    }
}
exports.Luchador = Luchador;
