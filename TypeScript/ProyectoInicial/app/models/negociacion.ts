<<<<<<< HEAD
export class Negociacion{
    #fecha;
    #cantidad;
    #valor;

    constructor(fecha, cantidad, valor){
        this.#fecha = fecha;
        this.#cantidad = cantidad;
        this.#valor = valor;
    }

    get fecha(){
        return this.#fecha;
    }

    get cantidad(){
        return this.#cantidad;
    }

    get valor(){
        return this.#valor;
    }

    get total(){
        return this.#cantidad * this.#valor;
=======
export class Negociacion {
    private _fecha;
    private _cantidad;
    private _valor;

    constructor(fecha: Date,cantidad: number,valor: number) {
        this._fecha = fecha;
        this._cantidad = cantidad;
        this._valor = valor;
    }

    get fecha() : Date {
        return this._fecha;
    }

    get cantidad() : number {
        return this._cantidad;
    }

    get valor() : number {
        return this._valor;
    }

    get total() : number {
        return this._cantidad * this._valor;
>>>>>>> refs/remotes/origin/main
    }
}