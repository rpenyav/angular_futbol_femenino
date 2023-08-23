import { Component, OnInit, ViewChild } from '@angular/core';
import { EquiposService } from '../../services/equipos.service';
import { Equipo } from 'src/app/interfaces/equipos.interface';
import { Player } from 'src/app/interfaces/equipos.interface'; // Asegúrate de importar la interfaz correcta
import { ModalJugadorasComponent } from '../modal-jugadoras/modal-jugadoras.component';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss'],
})
export class ListaEquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  jugadoresFiltrados: Player[] = [];
  terminoBusqueda: string = '';
  mostrarMensajeError: boolean = false;
  @ViewChild(ModalJugadorasComponent)
  modalJugadoras!: ModalJugadorasComponent;

  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {
    this.equiposService.getEquipos().subscribe((data) => {
      this.equipos = data;
      // No inicializar jugadoresFiltrados aquí, dejarlo vacío hasta que se llame a buscarJugadores
      this.jugadoresFiltrados = [];
    });
  }

  buscarJugadores() {
    // Verifica si el término de búsqueda está vacío o solo contiene espacios en blanco
    if (!this.terminoBusqueda || this.terminoBusqueda.trim() === '') {
      this.mostrarMensajeError = true; // Muestra el mensaje de error
      this.jugadoresFiltrados = []; // Limpia los jugadores filtrados
      return; // Termina la ejecución de la función
    }

    // Si el término de búsqueda no está vacío, realiza la búsqueda
    this.mostrarMensajeError = false; // Oculta el mensaje de error
    this.jugadoresFiltrados = this.equipos
      .flatMap((equipo) => equipo.players)
      .filter((jugador) =>
        jugador.name.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
  }

  openPlayerModal(player: Player) {
    this.modalJugadoras.openPlayerModal(player);
  }
}
