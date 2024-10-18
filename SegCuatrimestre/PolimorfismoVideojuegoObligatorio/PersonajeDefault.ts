export abstract class PersonajeDefault {

protected nombre:string
protected nivel:number = 1
protected puntosDeVida:number = 100

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

atacar(){
    console.log("Ataca!")
}


defender(){
    console.log("Defiende!")
}

}