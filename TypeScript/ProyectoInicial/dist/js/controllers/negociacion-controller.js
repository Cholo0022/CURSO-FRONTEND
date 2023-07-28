export class NegociacionController {
    constructor() {
        this.inputFecha = document.querySelector("#fecha");
        this.inputCantidad = document.querySelector("#cantidad");
        this.inputValor = document.querySelector("#valor");
    }
    agregar() {
        console.log(this.inputFecha.value);
        console.log(this.inputCantidad.value);
        console.log(this.inputValor.value);
    }
}
