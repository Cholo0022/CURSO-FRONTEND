import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  listatransferencias: any[];

  constructor(){
    this.listatransferencias = [];
  }

  get transferencias(){
    return this.listatransferencias;
  }

  agregar($event: any){
    this.transferencias.push($event);
  }
}
