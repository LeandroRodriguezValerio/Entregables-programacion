
export class Monstruo {
protected nombre:string
protected vida:number
constructor(nombre:string,vida:number){
    this.vida=vida
    this.nombre=nombre
}

    getVida():number{
    return this.vida
   }
   getNombre():string{
    return this.nombre
}  
   setVida(nuevaVida:number):void{
       this.vida = nuevaVida
   }
   setNombre(nuevoNombre:string):void{
    this.nombre = nuevoNombre
}
   recibirGolpe(){
    this.vida= this.vida-10
    console.log(`${this.nombre} Recibio 10 de daño `)
   }
}
