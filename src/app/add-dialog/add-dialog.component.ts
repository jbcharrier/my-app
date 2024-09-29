import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutorisationsService } from '../services/autorisations.service';
import { Autorisation } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-dialog.component.html',
  styleUrl: './add-dialog.component.scss',
})
export class AddDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddDialogComponent>);
  autorisationFormModel: FormGroup;
  isModifyMode: boolean = false;
  autorisationId?: string = '';

  constructor(
    private autorisationsService: AutorisationsService,
    @Inject(MAT_DIALOG_DATA) public data?: Autorisation
  ) {
    if (data) {
      this.autorisationId = data.id;
      this.isModifyMode = true;
    }
    this.autorisationFormModel = new FormGroup({
      name: new FormControl(data?.name || '', Validators.required),
      user: new FormControl(data?.user || '', Validators.required),
      contract: new FormControl(data?.contract || ''),
      status: new FormControl(data?.status || ''),
    });
  }

  addOrModifyAutorisation() {
    if (this.isModifyMode) {
      let modifiedAutorisation = {
        id: this.autorisationId,
        ...this.autorisationFormModel.value,
      };
      this.autorisationsService.updateAutorisation(modifiedAutorisation);
    } else {
      this.autorisationsService.addAutorisation(
        this.autorisationFormModel.value
      );
    }
    this.dialogRef.close();
  }

  closeDialog(event: Event) {
    event.preventDefault();
    this.dialogRef.close();
  }
}
