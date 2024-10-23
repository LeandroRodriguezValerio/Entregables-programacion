import { PersonajeDefault } from "./personajeDefault";
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

atacar(){
    console.log(`${this.nombre} Atacaa! y hace ${this.defensa} de daño `)
}


 defender(){
    console.log(`${this.nombre} Defiende ${this.defensa} de daño! `)
}
}


