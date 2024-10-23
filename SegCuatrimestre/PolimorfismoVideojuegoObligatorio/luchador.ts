import { PersonajeDefault } from "./personajeDefault";
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
atacar(){
    console.log(`${this.nombre} Atacaa! y hace ${this.ataque} de daño `)
}


 defender(){
    console.log(`${this.nombre} Defiende! `)
}
}


