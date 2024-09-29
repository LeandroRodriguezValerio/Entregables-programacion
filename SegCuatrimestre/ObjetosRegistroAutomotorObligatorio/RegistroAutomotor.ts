import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";



export class RegistroAutomotor {
    
    private Autos: Auto[]=[]
    private Camiones: Camion[]=[]
    private Motos: Moto[]=[]

    public agregarAuto(auto: Auto): void {
        this.Autos.push(auto);
    }

    public agregarMoto(moto: Moto): void {
        this.Motos.push(moto);
    }

    public agregarCamion(camion: Camion): void {
        this.Camiones.push(camion);
    }
// Métodos para listar todos los vehículos
public listarAutos(): void {
    console.log("Listado de Autos:");
    this.Autos.forEach((auto, index) => {
        console.log(`Auto ${index + 1}: ${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}), Color: ${auto.getColor()}`);
    });
}

public listarMotos(): void {
    console.log("Listado de Motos:");
    this.Motos.forEach((moto, index) => {
        console.log(`Moto ${index + 1}: ${moto.getMarca()} ${moto.getModelo()} (${moto.getAnio()}), Cilindrada: ${moto.getCilindrada()} cc`);
    });
}

public listarCamiones(): void {
    console.log("Listado de Camiones:");
    this.Camiones.forEach((camion, index) => {
        console.log(`Camión ${index + 1}: ${camion.getMarca()} ${camion.getModelo()} (${camion.getAnio()}), Color: ${camion.getColor()}`);
    });
}

// Métodos para modificar vehículos
public modificarAuto(index: number,  modelo: string, marca: string, anio: number, color: string): boolean {
    if (index >= 0 && index < this.Autos.length) {
        const auto = this.Autos[index];
        auto.setModelo(modelo);
        auto.setMarca(marca);
        auto.setAnio(anio);
        auto.setColor(color);
        return true;
    }
    return false;
}

public modificarMoto(index: number, marca: string, modelo: string, anio: number, cilindrada: number): boolean {
    if (index >= 0 && index < this.Motos.length) {
        const moto = this.Motos[index];
        moto.setMarca(marca);
        moto.setModelo(modelo);
        moto.setAnio(anio);
        moto.setCilindrada(cilindrada);
        return true;
    }
    return false;
}

public modificarCamion(index: number, modelo: string, anio: number, marca: string, color:string): boolean {
    if (index >= 0 && index < this.Camiones.length) {
        const camion = this.Camiones[index];
       
        camion.setModelo(modelo);
        camion.setAnio(anio);
        camion.setMarca(marca);
        camion.setColor(color);
        return true;
    }
    return false;
}

// Métodos para eliminar vehículos
public darDeBajaAuto(index: number): boolean {
    if (index >= 0 && index < this.Autos.length) {
        this.Autos.splice(index, 1);
        return true;
    }
    return false;
}

public darDeBajaMoto(index: number): boolean {
    if (index >= 0 && index < this.Motos.length) {
        this.Motos.splice(index, 1);
        return true;
    }
    return false;
}

public darDeBajaCamion(index: number): boolean {
    if (index >= 0 && index < this.Camiones.length) {
        this.Camiones.splice(index, 1);
        return true;
    }
    return false;
}
}
