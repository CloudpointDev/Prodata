import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRElativesComponent } from './add-relatives/add-relatives.component';
import { ListRElativesComponent } from './list-relatives/list-relatives.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddRElativesComponent, ListRElativesComponent],
  imports: [
    CommonModule,
    NgxLoadingModule,
    ReactiveFormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
  
})
export class RelativesModule { }
