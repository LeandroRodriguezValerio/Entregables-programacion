export class Vehiculo {
    cantRuedas;
    combustible;
    constructor(cantRuedas, combustible) {
        this.cantRuedas = cantRuedas;
        this.combustible = combustible;
    }
    getcantRuedas() {
        return this.cantRuedas;
    }
    getCombustible() {
        return this.combustible;
    }
    setcantRuedas(nuevaCantRuedas) {
        this.cantRuedas = nuevaCantRuedas;
    }
    setCombustible(nuevoCombustible) {
        this.combustible = nuevoCombustible;
    }
}
