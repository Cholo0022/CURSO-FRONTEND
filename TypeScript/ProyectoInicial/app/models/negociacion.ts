export class Negociacion {
    
    constructor(private _fecha: Date, public readonly cantidad: number, public readonly valor: number) {
       
    }

    get fecha() : Date {
        const copiaFecha = new Date(this._fecha);
        return copiaFecha;
    }

    get total() : number {
        return this.cantidad * this.valor;
    }
}