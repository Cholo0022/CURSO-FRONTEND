import { Component } from '@angular/core';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss']
})
export class NuevaTransferenciaComponent {
  valor: string = "";
  destino: string ="";
  transferir(){
    console.log("Realizar transferencia")
    console.log("Valor: ", this.valor)
    console.log("Cuenta: ", this.destino)
  }
}
