import { PersonajeDefault } from "./personajeDefault"
export class LuchadorEvolved extends PersonajeDefault{
    private ataque:number
    private superAtaque:string 


constructor(nombre:string, nivel:number, puntosDeVida:number,superAtaque:string, ataque:number ){
    super( nombre, nivel, puntosDeVida)
    this.superAtaque=superAtaque
    this.ataque=ataque
}
getSuperAtaque():string{
 return this.superAtaque
}
getAtaque():number{
    return this.ataque
   }  

setSuperAtaque(nuevoSuperAtaque:string):void{
    this.superAtaque = nuevoSuperAtaque
}
setAtaque(nuevoataque:number):void{
    this.ataque = nuevoataque
}
}


