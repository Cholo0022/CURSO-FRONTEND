import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transferencias: any[] = [];

  transferir($event: any){
    console.log("Mensaje desde app.component")
    this.transferencias.push($event);
  }
}
