import { PersonajeDefault } from "./PersonajeDefault";
export class Mago extends PersonajeDefault {
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
