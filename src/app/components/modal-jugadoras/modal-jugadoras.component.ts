import { Component, Input, ViewChild } from '@angular/core';
import { Player } from 'src/app/interfaces/equipos.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-jugadoras',
  templateUrl: './modal-jugadoras.component.html',
  styleUrls: ['./modal-jugadoras.component.scss'],
})
export class ModalJugadorasComponent {
  @Input() players: Player[] = [];
  @Input() mostrarBotonesNavegacion: boolean = true;

  selectedPlayer?: Player;
  selectedIndex: number = 0;

  constructor(private modalService: NgbModal) {}

  @ViewChild('content', { static: true }) public content: any;

  openPlayerModal(player: Player | undefined) {
    this.selectedPlayer = player;
    if (player) {
      this.selectedIndex = this.players.indexOf(player);
    }
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(/* ... */);
  }
  nextPlayer() {
    if (this.selectedIndex < this.players.length - 1) {
      this.selectedIndex++;
      this.selectedPlayer = this.players[this.selectedIndex];
    }
  }

  prevPlayer() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedPlayer = this.players[this.selectedIndex];
    }
  }

  isFirstPlayer() {
    return this.selectedIndex === 0;
  }

  isLastPlayer() {
    return this.selectedIndex === this.players.length - 1;
  }
}
