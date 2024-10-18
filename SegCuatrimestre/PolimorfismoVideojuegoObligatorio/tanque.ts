import { PersonajeDefault } from "./PersonajeDefault";
export class Tanque extends PersonajeDefault {
private defensa:number

constructor(defensa:number, nombre:string, nivel:number, puntosDeVida:number, ){
    super(nombre, nivel, puntosDeVida)
    this.defensa=defensa
}
getDefensa():number{
 return this.defensa
}

setDefensa(nuevodefensa:number):void{
    this.defensa = nuevodefensa
}
}


