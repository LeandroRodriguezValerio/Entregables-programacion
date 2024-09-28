export class Auto {

    private modelo: string
    private puertas: number
    private color: string
    private anio:number
    
    //Constructor
    constructor(modelo:string, anio:number, puertas:number , color:string){
    this.modelo=modelo
    this.anio=anio
    this.puertas=puertas
    this.color=color
        
    }
    //getters
    getModelo():string{
        return this.modelo
    }
    getAnio():number{
        return this.anio
    }
    getPuertas():number{
        return this.puertas
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
    
    setPuertas(nuevoPuertas:number):void{
        this.puertas= nuevoPuertas
    }
    
    setColor(nuevoColor:string):void{
        this.color = nuevoColor
    }
}