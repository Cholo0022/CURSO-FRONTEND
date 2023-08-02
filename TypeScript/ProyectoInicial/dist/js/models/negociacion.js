export class Negociacion {
    constructor(_fecha, cantidad, valor) {
        this._fecha = _fecha;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    get fecha() {
        const copiaFecha = new Date(this._fecha);
        return copiaFecha;
    }
    get total() {
        return this.cantidad * this.valor;
    }
}
