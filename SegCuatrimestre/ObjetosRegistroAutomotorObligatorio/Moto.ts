export class Moto {
    private modelo: string
    private cilindrada: number
    private color: string
    private anio:number
    
    //Constructor
    constructor(modelo:string, anio:number, cilindrada:number , color:string){
    this.modelo=modelo
    this.anio=anio
    this.cilindrada=cilindrada
    this.color=color
        
    }
    //getters
    getModelo():string{
        return this.modelo
    }
    getAnio():number{
        return this.anio
    }
    getcilindrada():number{
        return this.cilindrada
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
    
    setcilindrada(nuevocilindrada:number):void{
        this.cilindrada= nuevocilindrada
    }
    
    setColor(nuevoColor:string):void{
        this.color = nuevoColor
    }
}