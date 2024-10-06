
import { Vehiculo } from "./Vehiculo.js";
export class Camion extends Vehiculo{
    private modelo: string
    private marca: string
    private color: string
    private anio:number
    
    //Constructor
    constructor(modelo:string, anio:number, marca:string , color:string, cantRuedas:number, combustible:number){
        super(cantRuedas,combustible)
    this.modelo=modelo
    this.anio=anio
    this.marca=marca
    this.color=color
        
    }
    //getters
    getModelo():string{
        return this.modelo
    }
    getAnio():number{
        return this.anio
    }
    getMarca():string{
        return this.marca
    }
    getColor():string{
        return this.color
    }


    //setters
    setModelo(nuevoModelo:string):void{
        this.modelo = nuevoModelo
    }

    
    setAnio(nuevoAnio:number):void{
        this.anio = nuevoAnio
    }
    
    setMarca(nuevoMarca:string):void{
        this.marca= nuevoMarca
    }
    
    setColor(nuevoColor:string):void{
        this.color = nuevoColor
    }
}