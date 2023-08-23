import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo.component';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';

const routes: Routes = [
  { path: 'detalle/:slug', component: DetalleEquipoComponent },
  { path: 'lista', component: ListaEquiposComponent }, // Definir una ruta para el componente
  { path: '', redirectTo: '/lista', pathMatch: 'full' }, // Redirigir la ruta vacía al componente por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
