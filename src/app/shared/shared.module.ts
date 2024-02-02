import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, NgFor, NgIf, NgSwitch, RouterLink, RouterOutlet, MatProgressSpinnerModule, ReactiveFormsModule, MatSnackBarModule, MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, MatToolbarModule, MatMenuModule, MatIconModule
  ],
  exports: [
    CommonModule, NgFor, NgIf, NgSwitch, RouterLink, RouterOutlet, MatProgressSpinnerModule, ReactiveFormsModule, MatSnackBarModule, MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, MatToolbarModule, MatMenuModule, MatIconModule
  ]
})
export class SharedModule { }
