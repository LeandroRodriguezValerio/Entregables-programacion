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



    //setters
    setModelo(nuevoModelo:string):void{
        this.modelo = nuevoModelo
    }
    }