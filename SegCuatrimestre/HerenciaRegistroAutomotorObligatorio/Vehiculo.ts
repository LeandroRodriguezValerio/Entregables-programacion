export class Vehiculo  {

        private cantRuedas: number
        private combustible: number
        
    constructor (cantRuedas:number, combustible:number){
        this.cantRuedas=cantRuedas
        this.combustible=combustible
    }

    public getcantRuedas(): number {
        return this.cantRuedas;
    }
    public getCombustible(): number {
        return this.combustible;
    }

    setcantRuedas(nuevaCantRuedas: number): void {
        this.cantRuedas = nuevaCantRuedas;
    }
    setCombustible(nuevoCombustible: number): void {
        this.combustible = nuevoCombustible;
    }

}

