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
    
    constructor(private _fecha: Date, public readonly cantidad: number, public readonly valor: number) {
       
    }

    get fecha() : Date {
        const copiaFecha = new Date(this._fecha);
        return copiaFecha;
    }

    get total() : number {
<<<<<<< HEAD
        return this.cantidad * this.valor;
=======
        return this._cantidad * this._valor;
>>>>>>> refs/remotes/origin/main
>>>>>>> fb513deb6e25feec2e0157750196a36fa63fe828
    }
}