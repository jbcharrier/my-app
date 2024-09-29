import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { Autorisation } from '../models/models';
import { AutorisationsService } from '../services/autorisations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autorisation',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './autorisation.component.html',
  styleUrl: './autorisation.component.scss',
})
export class AutorisationComponent {
  @Input() autorisation: Autorisation | any;
  @Output() modifyAutorisation: EventEmitter<any> = new EventEmitter();

  constructor(private autorisationService: AutorisationsService) {}

  modify(autorisation: Autorisation) {
    this.modifyAutorisation.emit(autorisation);
  }

  deleteAutorisation(autorisation: Autorisation) {
    this.autorisationService.deleteAutorisation(autorisation);
  }
}
