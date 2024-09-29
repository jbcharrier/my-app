import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
} from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { Autorisation } from './models/models';
import { AutorisationsService } from './services/autorisations.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AutorisationComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-app';

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
