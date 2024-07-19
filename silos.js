class Silos {
    constructor(tipoGrano, cantidadAlmacenada, cliente, diasAlmacenados, mesAlmacenamiento) {
        this.tipoGrano = tipoGrano;
        this.cantidadAlmacenada = cantidadAlmacenada;
        this.cliente = cliente;
        this.diasAlmacenados = diasAlmacenados;
        this.mesAlmacenamiento = mesAlmacenamiento;
        this.costoBasicoPorDia = 100; // Puedes ajustar este valor según sea necesario
    }

    // Getters
    getTipoGrano() {
        return this.tipoGrano;
    }

    getCantidadAlmacenada() {
        return this.cantidadAlmacenada;
    }

    getCliente() {
        return this.cliente;
    }

    getDiasAlmacenados() {
        return this.diasAlmacenados;
    }

    getMesAlmacenamiento() {
        return this.mesAlmacenamiento;
    }

    // Setters
    setTipoGrano(tipoGrano) {
        this.tipoGrano = tipoGrano;
    }

    setCantidadAlmacenada(cantidadAlmacenada) {
        this.cantidadAlmacenada = cantidadAlmacenada;
    }

    setCliente(cliente) {
        this.cliente = cliente;
    }

    setDiasAlmacenados(diasAlmacenados) {
        this.diasAlmacenados = diasAlmacenados;
    }

    setMesAlmacenamiento(mesAlmacenamiento) {
        this.mesAlmacenamiento = mesAlmacenamiento;
    }

    // Método para calcular el costo de almacenamiento
    calcularCosto() {
        let costoBasico = this.diasAlmacenados * this.costoBasicoPorDia;
        let costoAdicional = 0;

        if (this.mesAlmacenamiento >= 1 && this.mesAlmacenamiento <= 6) {
            costoAdicional = 15000;
        } else if (this.mesAlmacenamiento >= 7 && this.mesAlmacenamiento <= 12) {
            costoAdicional = 25000;
        }

        let costoTotal = costoBasico + costoAdicional;
        return costoTotal;
    }

    // Método estado para mostrar información del silo
    estado() {
        console.log(`Cliente: ${this.cliente}, Tipo de Grano: ${this.tipoGrano}, Cantidad Almacenada: ${this.cantidadAlmacenada}, Días Almacenados: ${this.diasAlmacenados}, Mes de Almacenamiento: ${this.mesAlmacenamiento}`);
    }
}

// Crear una instancia de la clase Silos
const silo1 = new Silos('Trigo', 500, 'Cliente A', 30, 5);
const silo2 = new Silos('Maíz', 1000, 'Cliente B', 45, 8);

// Usar el método estado para mostrar información del silo
silo1.estado(); // Salida: Cliente: Cliente A, Tipo de Grano: Trigo, Cantidad Almacenada: 500, Días Almacenados: 30, Mes de Almacenamiento: 5
silo2.estado(); // Salida: Cliente: Cliente B, Tipo de Grano: Maíz, Cantidad Almacenada: 1000, Días Almacenados: 45, Mes de Almacenamiento: 8

// Calcular y mostrar el costo de almacenamiento
console.log(`Costo de almacenamiento para Cliente A: ${silo1.calcularCosto()} pesos`); // Salida: Costo de almacenamiento para Cliente A: 18000 pesos (ejemplo)
console.log(`Costo de almacenamiento para Cliente B: ${silo2.calcularCosto()} pesos`); // Salida: Costo de almacenamiento para Cliente B: 70000 pesos (ejemplo)