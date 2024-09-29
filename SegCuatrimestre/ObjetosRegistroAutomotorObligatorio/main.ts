import { Auto } from "./Auto.js";
import { Camion } from "./Camion.js";
import { Moto } from "./Moto.js";
import { RegistroAutomotor } from "./RegistroAutomotor.js";

        const registro = new RegistroAutomotor();
        const auto = new Auto("Toyota", 2020, "Corolla", "Verde");
        const moto = new Moto("Honda", 2022, 500, "CB500X");
        const camion = new Camion("Mercedes", 2019, "Actros", "Rojo");

        // Agregar vehículos
        registro.agregarAuto(auto);
        registro.agregarMoto(moto);
        registro.agregarCamion(camion);

        // Listar vehículos
        registro.listarAutos();
        registro.listarMotos();
        registro.listarCamiones();

        // Modificar un vehículo
        registro.modificarAuto(0, "Toyota", "Camry", 2021, "Verde");

        // Eliminar una moto
        registro.darDeBajaMoto(0);

        // Listar vehículos nuevamente
        registro.listarAutos();
        registro.listarMotos();
        registro.listarCamiones();




