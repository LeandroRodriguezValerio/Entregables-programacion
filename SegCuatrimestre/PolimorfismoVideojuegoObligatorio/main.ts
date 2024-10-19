import { Mago } from "./mago";
import { Tanque } from "./tanque";
import { Luchador } from "./luchador";
import { PersonajeDefault } from "./personajeDefault";
import { LuchadorEvolved } from "./luchadorEvolved";
import { Monstruo } from "./monstruo";


//crear 3 personajes
let Brand:PersonajeDefault = new Mago (980, "Brand", 1, 30)
console.log(Brand)

let Leona:PersonajeDefault = new Tanque (300, "Leona", 1, 100)
console.log(Leona)

let Garen:PersonajeDefault = new Luchador (500, "Garen", 1, 60)
console.log(Garen)
let Dummy:Monstruo = new Monstruo ("Dummy", 10)
console.log (Dummy)

//mostrar 

Garen.atacar()
Dummy.recibirGolpe()
//subir de nivel para evolucionar

if (Dummy.getVida()===0){
    console.log(`${Dummy.getNombre()} Fue Derrotado`)
for (let i = 0; i < 9; i++) {
    Garen.subirDeNivel();
}
}
if (Garen.getNivel() === 10){
    Garen = new LuchadorEvolved ("SuperGaren", 10, 90, "Super Ataque", 800)
    console.log(`${Garen.getNombre()} Aprendio "Super Ataque"`)
    console.log(Garen)
}
