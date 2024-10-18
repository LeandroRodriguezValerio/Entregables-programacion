import { Mago } from "./mago.js";
import { Tanque } from "./tanque.js";
import { Luchador } from "./luchador.js";



let Brand = new Mago (980, "Brand", 10, 100)
console.log(Brand)

let Leona = new Tanque (980, "Leona", 10, 100)
console.log(Leona)

let Garen = new Luchador (980, "Garen", 10, 100)
console.log(Garen)
Garen.atacar()