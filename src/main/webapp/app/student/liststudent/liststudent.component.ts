import { Router } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import { StudentServicesService } from './../../sharedservices/student-services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $AB from 'jquery'
import $ from 'jquery/dist/jquery';
import { MatDialog, MatDialogRef } from '@angular/material';

import 'datatables.net';
import 'datatables.net-bs4';
import { Student } from '../../student';
import { AddStudentComponent } from '../add-student/add-student.component';
import { UploadMarksComponent } from '../../upload-marks/upload-marks/upload-marks.component';
import { StaffMemberService } from '../../sharedservices/staffMemberService.service';
import { Http } from '@angular/http';
import { StaffmemberComponent } from '../../staffmember/staffmember/staffmember.component';
import { NgxSmartModalService } from 'ngx-smart-modal';


declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})

export class ListstudentComponent implements OnInit {

  @ViewChild(AddStudentComponent)
  private addStudent: AddStudentComponent;
  private students: Student
  isAdmin: boolean = false;
  statusCode: any;
  display='none'; //default Variable
  showUploadMarksModal: boolean = false;
  loading: NgxLoadingModule
  public dataTable: DataTable = {
    headerRow: ['Roll No', 'Name', 'Class', 'Date of Birth ', 'Address', 'Upload', 'Action'],
    footerRow: ['Roll No', 'Name', 'Class', 'Date of Birth ', 'Address', 'Action'],
    dataRows: []
  };
  constructor(private studServices: StudentServicesService, private _router: Router, public dialog: MatDialog, private roleguard: StaffMemberService,public ngxSmartModalService: NgxSmartModalService) { }


  ngOnInit() {
    this.loading = true
    this.getAllStudentDetails()
    this.adminCheck();
  }

  getAllStudentDetails() {
    var self = this;
    this.studServices.getAllStudent().subscribe((students) => {
      this.loading = false
      $AB('#datatables').DataTable().destroy()
      this.dataTable.dataRows = students;
      setTimeout(function () {
        self.initTable();
      }, 50);
    }, (error) => {
      console.log(error)
    })
  }


  private initTable() {
    $AB('#datatables').DataTable({
      "ordering": true,
      order: [[0, 'asc']],
      columnDefs: [
        { orderable: false, targets: [-1] }
      ],
      "language": {
        "emptyTable": "No Records Available"
      },
    });

    var table = $AB('#datatables').DataTable();
    $AB('#datatables').on('click', '.remove', function (e: any) {
      const $ABtr = $AB(this).closest('tr');
      table.row($ABtr).remove();
      e.preventDefault();
      $AB('#datatables').DataTable().draw();
    });

  }



  deleteUser(rollNo: number) {
    console.log("IN delete student method" + rollNo)
    this.studServices.deleteStudent(rollNo).subscribe(() => {
      this.getAllStudentDetails()
      this.loading = false;
      alert("Student Record Deleted ")
    }, (error) => {
      this.loading = false;
      console.log(error);
      alert(error)
    })
  }


  logout() {
    localStorage.clear();
    localStorage.removeItem('jwt');
    this._router.navigate(['/'])
  }

  openModalDialog(){
    this.display='block'; //Set block css
 }

 closeModalDialog(){
  this.display='none'; //set none css after close dialog
 }

  // updateUser(student) {
  //   this.loading = false;
  //    this._router.navigate(['/srm'])
  // }

  uploadDoc(student) {
    this._router.navigate(['/uploadDoc/' + student.rollno])
  }



  newUser() {
    this.loading = false;
    this._router.navigate(['/srm']);
  }

  relativeStudent(rollno: number) {
    this._router.navigate(['listRelative/' + rollno])

  }

  uploadMarks() {
    //  $('#myModal').modal();
    // this._router.navigate(['uploadMarks/'])
    const dialogRef = this.dialog.open(UploadMarksComponent, {
      width: '1800px',
    });
    dialogRef.afterClosed().subscribe(result => {
  });

 }

 addStaff(){
     this._router.navigate(['/addStaff']);
  }

  adminCheck() {
    this.roleguard.roleCheck()
      .subscribe(successCode => {
        this.statusCode = successCode;
        if (this.statusCode === 200) {
          this.isAdmin = true;
        }
        else {
          this.isAdmin = false;
        }
      },
        errorCode => {
        });
  }


  

}

