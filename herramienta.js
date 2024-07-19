// Definir la clase base Herramientas
class Herramientas {
    estado() {
        console.log("Las herramientas son necesarias para tareas de mantenimiento.");
    }
}

// Definir la clase hija HerramientasMecanicas que extiende Herramientas
class HerramientasMecanicas extends Herramientas {
    estado() {
        console.log("Las herramientas mecánicas son básicas y manejables.");
    }
}

// Definir la clase hija HerramientasElectricas que extiende Herramientas
class HerramientasElectricas extends Herramientas {
    estado() {
        console.log("Las herramientas eléctricas o electrónicas son de alta precisión.");
    }
}

// Crear una función que acepte cualquier tipo de herramienta y llame al método estado
function mostrarEstadoDeHerramienta(herramienta) {
    herramienta.estado();
}

// Crear instancias de cada clase
const herramienta = new Herramientas();
const herramientaMecanica = new HerramientasMecanicas();
const herramientaElectrica = new HerramientasElectricas();

// Usar la función polimórfica
mostrarEstadoDeHerramienta(herramienta); // Salida: Las herramientas son necesarias para tareas de mantenimiento.
mostrarEstadoDeHerramienta(herramientaMecanica); // Salida: Las herramientas mecánicas son básicas y manejables.
mostrarEstadoDeHerramienta(herramientaElectrica); // Salida: Las herramientas eléctricas o electrónicas son de alta precisión.