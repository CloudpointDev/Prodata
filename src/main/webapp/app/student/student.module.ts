import { FilterPipe } from './../filter.pipe';
import { AddRElativesComponent } from './../relatives/add-relatives/add-relatives.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from '../Student/add-student/add-student.component';
import { ListstudentComponent } from '../Student/liststudent/liststudent.component';
import { ListRElativesComponent } from '../relatives/list-relatives/list-relatives.component';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material';
import { UploadMarksComponent } from '../upload-marks/upload-marks/upload-marks.component';

const routes: Routes = [
  { path: 'addRelative', component: AddRElativesComponent },
  { path: 'listRelative', component: ListRElativesComponent },
 
  { path: 'listRelative/:roll_no', component: ListRElativesComponent },
  { path: '**', component: ListstudentComponent},
];


@NgModule({
  declarations: [AddStudentComponent, ListstudentComponent,UploadMarksComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule
    
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class StudentModule { }
