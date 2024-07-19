// Clase base Panaderia
class Panaderia {
    constructor(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion) {
        this.tipoPan = tipoPan;
        this.insumoPrincipal = insumoPrincipal;
        this.cantidadProducida = cantidadProducida;
        this.costoProduccion = costoProduccion;
    }

    // Getters
    getTipoPan() {
        return this.tipoPan;
    }

    getInsumoPrincipal() {
        return this.insumoPrincipal;
    }

    getCantidadProducida() {
        return this.cantidadProducida;
    }

    getCostoProduccion() {
        return this.costoProduccion;
    }

    // Setters
    setTipoPan(tipoPan) {
        this.tipoPan = tipoPan;
    }

    setInsumoPrincipal(insumoPrincipal) {
        this.insumoPrincipal = insumoPrincipal;
    }

    setCantidadProducida(cantidadProducida) {
        this.cantidadProducida = cantidadProducida;
    }

    setCostoProduccion(costoProduccion) {
        this.costoProduccion = costoProduccion;
    }

    // Método común a todas las clases
    estado() {
        console.log("Esta es una panadería que produce diferentes tipos de pan.");
    }
}

// Clase hija PanTradicional que extiende Panaderia
class PanTradicional extends Panaderia {
    estado() {
        console.log("Este es un pan tradicional hecho con ingredientes básicos.");
    }
}

// Clase hija PanIntegral que extiende Panaderia
class PanIntegral extends Panaderia {
    estado() {
        console.log("Este es un pan integral hecho con harina de trigo integral.");
    }
}

// Clase hija PanEspecial que extiende Panaderia
class PanEspecial extends Panaderia {
    estado() {
        console.log("Este es un pan especial hecho con ingredientes gourmet.");
    }
}

// Crear instancias de cada clase
const panTradicional = new PanTradicional('Pan Tradicional', 'Harina', 100, 50);
const panIntegral = new PanIntegral('Pan Integral', 'Harina Integral', 80, 60);
const panEspecial = new PanEspecial('Pan Especial', 'Harina Gourmet', 50, 100);

// Usar el método estado para cada instancia
panTradicional.estado(); // Salida: Este es un pan tradicional hecho con ingredientes básicos.
panIntegral.estado(); // Salida: Este es un pan integral hecho con harina de trigo integral.
panEspecial.estado(); // Salida: Este es un pan especial hecho con ingredientes gourmet.