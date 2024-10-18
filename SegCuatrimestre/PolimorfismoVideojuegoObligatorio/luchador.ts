import { PersonajeDefault } from "./PersonajeDefault";
export class Luchador extends PersonajeDefault{
private ataque:number

constructor(ataque:number, nombre:string, nivel:number, puntosDeVida:number, ){
    super(nombre, nivel, puntosDeVida)
    this.ataque=ataque
}
getAtaque():number{
 return this.ataque
}

setAtaque(nuevoataque:number):void{
    this.ataque = nuevoataque
}
}


