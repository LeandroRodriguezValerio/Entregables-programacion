export class PersonajeDefault {
    constructor(nombre, nivel, puntosDeVida) {
        this.nivel = 1;
        this.puntosDeVida = 100;
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    getNombre() {
        return this.nombre;
    }
    getNivel() {
        return this.nivel;
    }
    getPuntosDeVida() {
        return this.puntosDeVida;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    setNivel(nuevoNivel) {
        this.nivel = nuevoNivel;
    }
    setPuntosDeVida(nuevoPuntosDeVida) {
        this.puntosDeVida = nuevoPuntosDeVida;
    }
    atacar() {
        console.log("Ataca!");
    }
    defender() {
        console.log("Defiende!");
    }
}
