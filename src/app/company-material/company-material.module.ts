import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSidenavModule, MatInputModule, MatToolbarModule, 
  MatTabsModule, MatListModule, MatGridListModule, MatIconModule, 
  MatSelectModule, MatChipsModule, MatCheckboxModule, MatButtonToggleModule,
  MatDatepickerModule, MatNativeDateModule,
  MatTableModule, MatAutocompleteModule, MatSnackBarModule, 
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule, MatSidenavModule, MatInputModule, MatToolbarModule, 
    MatTabsModule, MatListModule, MatGridListModule, MatIconModule, 
    MatSelectModule, MatChipsModule, MatCheckboxModule, MatButtonToggleModule,
    MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatAutocompleteModule, MatSnackBarModule, 
  ],
  exports: [
    MatButtonModule, MatSidenavModule, MatInputModule, MatToolbarModule, 
    MatTabsModule, MatListModule, MatGridListModule, MatIconModule, 
    MatSelectModule, MatChipsModule, MatCheckboxModule, MatButtonToggleModule,
    MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatAutocompleteModule, MatSnackBarModule, 
  ],
})
export class CompanyMaterialModule { }

