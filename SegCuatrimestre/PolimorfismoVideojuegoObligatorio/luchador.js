import { PersonajeDefault } from "./PersonajeDefault";
export class Luchador extends PersonajeDefault {
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
