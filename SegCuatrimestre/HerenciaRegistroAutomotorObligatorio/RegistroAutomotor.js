export class RegistroAutomotor {
    Autos = [];
    Camiones = [];
    Motos = [];
    agregarAuto(auto) {
        this.Autos.push(auto);
    }
    agregarMoto(moto) {
        this.Motos.push(moto);
    }
    agregarCamion(camion) {
        this.Camiones.push(camion);
    }
    // Métodos para listar todos los vehículos
    listarAutos() {
        console.log("Listado de Autos:");
        this.Autos.forEach((auto, index) => {
            console.log(`Auto ${index + 1}: ${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}), Color: ${auto.getColor()}`);
        });
    }
    listarMotos() {
        console.log("Listado de Motos:");
        this.Motos.forEach((moto, index) => {
            console.log(`Moto ${index + 1}: ${moto.getMarca()} ${moto.getModelo()} (${moto.getAnio()}), Cilindrada: ${moto.getCilindrada()} cc, Ruedas: ${moto.getcantRuedas()}, Tamaño del tanque: ${moto.getCombustible()} l`);
        });
    }
    listarCamiones() {
        console.log("Listado de Camiones:");
        this.Camiones.forEach((camion, index) => {
            console.log(`Camión ${index + 1}: ${camion.getMarca()} ${camion.getModelo()} (${camion.getAnio()}), Color: ${camion.getColor()}, Ruedas: ${camion.getcantRuedas()}, Tamaño del tanque: ${camion.getCombustible()} l`);
        });
    }
    // Métodos para modificar vehículos
    modificarAuto(index, modelo, marca, anio, color) {
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
    modificarMoto(index, marca, modelo, anio, cilindrada, cantRuedas, combustible) {
        if (index >= 0 && index < this.Motos.length) {
            const moto = this.Motos[index];
            moto.setMarca(marca);
            moto.setModelo(modelo);
            moto.setAnio(anio);
            moto.setCilindrada(cilindrada);
            moto.setcantRuedas(cantRuedas);
            moto.setCombustible(combustible);
            return true;
        }
        return false;
    }
    modificarCamion(index, modelo, anio, marca, color, cantRuedas, combustible) {
        if (index >= 0 && index < this.Camiones.length) {
            const camion = this.Camiones[index];
            camion.setModelo(modelo);
            camion.setAnio(anio);
            camion.setMarca(marca);
            camion.setColor(color);
            camion.setcantRuedas(cantRuedas);
            camion.setCombustible(combustible);
            return true;
        }
        return false;
    }
    // Métodos para eliminar vehículos
    darDeBajaAuto(index) {
        if (index >= 0 && index < this.Autos.length) {
            this.Autos.splice(index, 1);
            return true;
        }
        return false;
    }
    darDeBajaMoto(index) {
        if (index >= 0 && index < this.Motos.length) {
            this.Motos.splice(index, 1);
            return true;
        }
        return false;
    }
    darDeBajaCamion(index) {
        if (index >= 0 && index < this.Camiones.length) {
            this.Camiones.splice(index, 1);
            return true;
        }
        return false;
    }
}
