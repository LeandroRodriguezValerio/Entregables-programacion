export abstract class PersonajeDefault {

protected nombre:string
protected nivel:number
protected puntosDeVida:number

constructor(nombre:string, nivel:number, puntosDeVida:number){
this.nombre=nombre
this.nivel=nivel
this.puntosDeVida=puntosDeVida
}

getNombre():string{
    return this.nombre
}
getNivel():number{
    return this.nivel
}
getPuntosDeVida():number{
    return this.puntosDeVida
}

setNombre(nuevoNombre:string):void{
    this.nombre = nuevoNombre
}
setNivel(nuevoNivel:number):void{
    this.nivel = nuevoNivel
}

setPuntosDeVida(nuevoPuntosDeVida:number):void{
    this.puntosDeVida = nuevoPuntosDeVida
}


subirDeNivel(){
    this.nivel=this.nivel+1
    console.log(`${this.nombre} sube al nivel ${this.nivel}`)

    if (this.nivel===10){
        console.log(`${this.nombre} Esta evolucionando! `)
        console.log(`${this.nombre} Evoluciono Ahora es ¡¡Super ${this.nombre}!! `)
    }
}


atacar(){
    console.log(`${this.nombre} Ataca! `)
}


defender(){
    console.log("Defiende!")
}

}