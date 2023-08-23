import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalJugadorasComponent } from './components/modal-jugadoras/modal-jugadoras.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEquiposComponent,
    DetalleEquipoComponent,
    ModalJugadorasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
