import { Negociacion } from "../models/negociacion";

export class NegociacionController{
    private inputFecha: Date;
    private inputCantidad: Number;
    private inputValor: Number;

    constructor(){
        this.inputFecha = document.querySelector("#fecha").value;
        this.inputCantidad = document.querySelector("#cantidad").value;
        this.inputValor = document.querySelector("#valor").value;
    }

    agregar(){
        const negociacion = new Negociacion(
            this.inputFecha,
            this.inputCantidad,
            this.inputValor
        )
    }
}