import { Negociacion } from "./models/negociacion.js";

const negociacion = new Negociacion(new Date(), 10, 120);

console.log(negociacion);

console.log(negociacion.total);