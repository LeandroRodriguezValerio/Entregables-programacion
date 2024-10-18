import { PersonajeDefault } from "./PersonajeDefault.js";
export class Mago extends PersonajeDefault{
private poderMagico:number

constructor(poderMagico:number, nombre:string, nivel:number, puntosDeVida:number, ){
    super(nombre, nivel, puntosDeVida)
    this.poderMagico=poderMagico
}
getPoderMagico():number{
 return this.poderMagico
}

setPoderMagico(nuevoPoderMagico:number):void{
    this.poderMagico = nuevoPoderMagico
}
}