
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { AddRElativesComponent } from './relatives/add-relatives/add-relatives.component';
import { RelativesModule } from './relatives/relatives.module';
import {ToolTipModule} from 'angular2-tooltip'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentServicesService } from './sharedservices/student-services.service';

import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ListRElativesComponent } from './relatives/list-relatives/list-relatives.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { LoginComponent } from './login/login.component';
import { RelativesService } from './sharedService/relatives.service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ListfilesComponent } from './listfiles/listfiles.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UploadMarksComponent } from './upload-marks/upload-marks/upload-marks.component';
import { ModalService } from './sharedservices/modal.service';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthGuard } from './shared/auth-guard';
import { StaffmemberModule } from './staffmember/staffmember.module';
import { StaffmemberComponent } from './staffmember/staffmember/staffmember.component';
import { StaffMemberService } from './sharedservices/staffMemberService.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  
  declarations: [
    AppComponent,
AddStudentComponent,
ListfilesComponent,
    ListstudentComponent,
LoginComponent,
StaffmemberComponent,
FilterPipe,
UploadFileComponent,
UploadMarksComponent,



  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RelativesModule,
    MatDialogModule,
    StaffmemberModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '10px',
      primaryColour: ' #AE275F', 
      secondaryColour: ' #AE275F', 
      tertiaryColour:  '#AE275F'
  }),
    ReactiveFormsModule,
    NgDatepickerModule,
    HttpClientModule,
    
   

  ],
 schemas: [NO_ERRORS_SCHEMA],
  providers: [StudentServicesService,RelativesService,ModalService,AuthGuard,StaffMemberService,{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },],
 
  bootstrap: [AppComponent]
  
})
export class AppModule { }
