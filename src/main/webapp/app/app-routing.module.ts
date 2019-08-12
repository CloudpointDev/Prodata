import { LoginComponent } from './login/login.component';

import { AddRElativesComponent } from './relatives/add-relatives/add-relatives.component';
import { ListRElativesComponent } from './relatives/list-relatives/list-relatives.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ListfilesComponent } from './listfiles/listfiles.component';
import { UploadMarksComponent } from './upload-marks/upload-marks/upload-marks.component';
import { AuthGuard } from './shared/auth-guard';
import { StaffmemberComponent } from './staffmember/staffmember/staffmember.component';
const routes: Routes = [
{
  path:'',
  component: LoginComponent,
},
  
  {
  
    path:'listStudent',
    component:ListstudentComponent,
    canActivateChild:[AuthGuard]
    
  },
  {
    
    path: 'srm',
    component: AddStudentComponent,
   
  },

  
  {
    path: 'listRelative',
    component: ListRElativesComponent,
    
  },

  {
    path: "listRelative/:rollNo",
    component: ListRElativesComponent,
    
  },

  {
    path: 'addRelative/:rollNo',
    component: AddRElativesComponent,
   
  },

  {
    path:'uploadDoc/:rollNo',
    component: UploadFileComponent,
  
  },
  {
    path:'uploadMarks',
    component: UploadMarksComponent,
    },
      {
    path:'listFiles/:rollNo',
    component: ListfilesComponent,
  },
  {
    path:'addMember',
    component: StaffmemberComponent,
  },
  {
    path: '**',
    component: ListstudentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
