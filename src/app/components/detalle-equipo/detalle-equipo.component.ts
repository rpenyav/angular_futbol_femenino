import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo, Player } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';
import { ModalJugadorasComponent } from '../modal-jugadoras/modal-jugadoras.component';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.scss'],
})
export class DetalleEquipoComponent implements OnInit {
  equipo!: Equipo;
  searchTerm: string = '';
  @ViewChild('modalJugadoras')
  modalJugadoras!: ModalJugadorasComponent;

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquiposService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.equipoService.getTeamDetail(slug).subscribe((equipo) => {
        this.equipo = equipo;
      });
    });
  }

  get filteredPlayers(): Player[] {
    return (
      this.equipo?.players?.filter((player) =>
        player.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) || []
    );
  }

  openPlayerModal(player: Player) {
    this.modalJugadoras.openPlayerModal(player);
  }
}
