class Empresa {
    constructor(nombre, direccion, rut) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.rut = rut;
    }
}

class Funcion {
    constructor(nombre, descripcion, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo; // numero del 1-5
    }
}

class Puesto {
    constructor(empresa, detalle, funcion, salario) {
        this.empresa = empresa; //objeto clase empresa
        this.detalle = detalle;
        this.funcion = funcion; //objeto clase funcion
        this.salario = salario;
    }
}

class Sistema {
    constructor() {
        this.listaEmpresas = [];
        this.listaFunciones = [];
        this.listaPuestos = [];
    }
    agregarEmpresa(empresa){
        this.listaEmpresas.push(unaEmpresa);
    }

    agregarFuncion(unaFuncion){
        this.listaFunciones.push(unaFuncion);
    }

    agregarPuesto(unPuesto){
        this.listaPuestos.push(unPuesto);
    }
}
//hola