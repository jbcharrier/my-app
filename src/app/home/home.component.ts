import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { AutorisationComponent } from '../autorisation/autorisation.component';
import { Autorisation } from '../models/models';
import { AutorisationsService } from '../services/autorisations.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AutorisationComponent,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  autorisationsList: Observable<Autorisation[]> | any;

  constructor(private autorisationsService: AutorisationsService) {}

  ngOnInit() {
    this.autorisationsList = this.autorisationsService.autorisationsChange$;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      height: '525px',
      width: '600px',
    });
  }

  modifyAutorisation(autorisation: Autorisation) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      height: '525px',
      width: '600px',
      data: autorisation,
    });
  }
}
