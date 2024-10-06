import { Vehiculo } from "./Vehiculo.js";
export class Moto extends Vehiculo {
    modelo;
    cilindrada;
    marca;
    anio;
    //Constructor
    constructor(modelo, anio, cilindrada, marca, cantRuedas, combustible) {
        super(cantRuedas, combustible);
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
        this.marca = marca;
    }
    //getters
    getModelo() {
        return this.modelo;
    }
    getAnio() {
        return this.anio;
    }
    getCilindrada() {
        return this.cilindrada;
    }
    getMarca() {
        return this.marca;
    }
    //setters
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    setAnio(nuevoAnio) {
        this.anio = nuevoAnio;
    }
    setCilindrada(nuevoCilindrada) {
        this.cilindrada = nuevoCilindrada;
    }
    setMarca(nuevoMarca) {
        this.marca = nuevoMarca;
    }
}
