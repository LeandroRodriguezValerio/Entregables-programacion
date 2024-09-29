export class Moto {
    private modelo: string
    private cilindrada: number
    private marca: string
    private anio:number
    
    //Constructor
    constructor(modelo:string, anio:number, cilindrada:number , marca:string){
    this.modelo=modelo
    this.anio=anio
    this.cilindrada=cilindrada
    this.marca=marca
        
    }
    //getters
    getModelo():string{
        return this.modelo
    }
    getAnio():number{
        return this.anio
    }
    getCilindrada():number{
        return this.cilindrada
    }
    getMarca():string{
        return this.marca
    }



    //setters
    setModelo(nuevoModelo:string):void{
        this.modelo = nuevoModelo
    }

    
    setAnio(nuevoAnio:number):void{
        this.anio = nuevoAnio
    }
    
    setCilindrada(nuevoCilindrada:number):void{
        this.cilindrada= nuevoCilindrada
    }
    
    setMarca(nuevoMarca:string):void{
        this.marca = nuevoMarca
    }
}