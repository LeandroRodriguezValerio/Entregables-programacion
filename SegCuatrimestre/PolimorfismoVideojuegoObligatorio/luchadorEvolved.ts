import { PersonajeDefault } from "./personajeDefault"
export class LuchadorEvolved extends PersonajeDefault{
    private ataque:number
    private superAtaque:number 


constructor(nombre:string, nivel:number, puntosDeVida:number,superAtaque:number, ataque:number ){
    super( nombre, nivel, puntosDeVida)
    this.superAtaque=superAtaque
    this.ataque=ataque
}
getSuperAtaque():number{
 return this.superAtaque
}
getAtaque():number{
    return this.ataque
   }  

setSuperAtaque(nuevoSuperAtaque:number):void{
    this.superAtaque = nuevoSuperAtaque
}
setAtaque(nuevoataque:number):void{
    this.ataque = nuevoataque
}
atacar(){
    console.log(`${this.nombre} Atacaa! y hace ${this.ataque} mas ${this.superAtaque} de daño `)
}


 defender(){
    console.log("Defiende!")
}
}


