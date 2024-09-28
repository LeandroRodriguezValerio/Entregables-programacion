export class Camion {
    private modelo: string
    private longitud: number
    private color: string
    private anio:number
    
    //Constructor
    constructor(modelo:string, anio:number, longitud:number , color:string){
    this.modelo=modelo
    this.anio=anio
    this.longitud=longitud
    this.color=color
        
    }
    //getters
    getModelo():string{
        return this.modelo
    }
    getAnio():number{
        return this.anio
    }
    getlongitud():number{
        return this.longitud
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
    
    setlongitud(nuevolongitud:number):void{
        this.longitud= nuevolongitud
    }
    
    setColor(nuevoColor:string):void{
        this.color = nuevoColor
    }
}