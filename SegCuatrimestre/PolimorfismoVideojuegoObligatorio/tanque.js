import { PersonajeDefault } from "./PersonajeDefault";
export class Tanque extends PersonajeDefault {
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
