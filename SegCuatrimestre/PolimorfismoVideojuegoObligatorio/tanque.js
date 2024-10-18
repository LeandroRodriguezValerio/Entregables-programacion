"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanque = void 0;
const PersonajeDefault_js_1 = require("./PersonajeDefault.js");
class Tanque extends PersonajeDefault_js_1.PersonajeDefault {
    constructor(defensa, nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
        this.defensa = defensa;
    }
    getDefensa() {
        return this.defensa;
    }
    setDefensa(nuevodefensa) {
        this.defensa = nuevodefensa;
    }
}
exports.Tanque = Tanque;
