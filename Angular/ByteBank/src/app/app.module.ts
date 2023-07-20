import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es-AR';
import { AppComponent } from './app.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { FormsModule } from '@angular/forms';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs,'es')

@NgModule({
  declarations: [
    AppComponent,
    NuevaTransferenciaComponent,
    EstadoCuentaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'es',
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
