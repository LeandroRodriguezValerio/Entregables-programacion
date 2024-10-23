import { PersonajeDefault } from "./personajeDefault";
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
 atacar(){
    console.log(`${this.nombre} Atacaa! y hace ${this.poderMagico} de daño`)
}


 defender(){
    console.log("Defiende!")
}

subirDeNivel(){
    this.nivel=this.nivel+1
    console.log(`${this.nombre} sube al nivel ${this.nivel}`)

    if (this.nivel===10){
        console.log(`${this.nombre} Esta evolucionando! `)
        console.log(`${this.nombre} Evoluciono Ahora es ¡¡Super ${this.nombre}!! `)
    }
}
}