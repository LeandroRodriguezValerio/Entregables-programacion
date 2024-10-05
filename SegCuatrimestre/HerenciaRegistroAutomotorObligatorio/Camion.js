export class Camion {
    modelo;
    marca;
    color;
    anio;
    //Constructor
    constructor(modelo, anio, marca, color) {
        this.modelo = modelo;
        this.anio = anio;
        this.marca = marca;
        this.color = color;
    }
    //getters
    getModelo() {
        return this.modelo;
    }
    getAnio() {
        return this.anio;
    }
    getMarca() {
        return this.marca;
    }
    getColor() {
        return this.color;
    }
    //setters
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    setAnio(nuevoAnio) {
        this.anio = nuevoAnio;
    }
    setMarca(nuevoMarca) {
        this.marca = nuevoMarca;
    }
    setColor(nuevoColor) {
        this.color = nuevoColor;
    }
}

