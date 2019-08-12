import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentServicesService } from '../../sharedservices/student-services.service';
import { Router } from '@angular/router';
import { Student } from '../../student';
import { DatepickerOptions } from 'ng2-datepicker';
import { StaffMember } from './staffMember';
import { StaffMemberService } from '../../sharedservices/staffMemberService.service';
import { StaffRole } from './StaffRole';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-staffmember',
  templateUrl: './staffmember.component.html',
  styleUrls: ['./staffmember.component.css']
})
export class StaffmemberComponent implements OnInit {
  
  staffId:any;
  selectedFiles: FileList;
  currentFileUpload: File;
  dob:Date;
 activeflag='Y';
 AddStaffForm : FormGroup
 minDate = new Date(1900, 0, 1);
maxDate = new Date();
  minEndDate = new Date();
  staffRoles: any[] = [
    { role: 'ROLE_ADMIN' },
    { role: 'ROLE_USER' },
  ];

 constructor(private staffService: StaffMemberService, private _router: Router,private dialogRef: MatDialogRef<StaffmemberComponent>) { }

  ngOnInit() {
    this.validateError()
  }
 
  private validateError() {
 
    this.AddStaffForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('',Validators.required),
       'roles' : new FormControl('',Validators.required)
     
    });
  }

  formReset(){
    this.AddStaffForm.reset()
  }

  processForm(){
    var bcrypt = require('bcryptjs');
    let name=this.AddStaffForm.get('name').value
    let lname=this.AddStaffForm.get('lname').value
    let username= this.AddStaffForm.get('username').value
    let password=this.AddStaffForm.get('password').value;
    let hashPassword = bcrypt.hashSync(password, 10);
    let role = this.AddStaffForm.get('roles').value;
  let staff=new StaffMember(0,name,lname,hashPassword.toString(),username,'Y');
  this.staffService.createStaff(staff).switchMap(
   staff => {
       this.staffId = staff.staffId;
      let staffRole = new StaffRole(0,this.staffId,role,name)
      return this.staffService.createStaffRole(staffRole);
    }).subscribe(successCode => {
      
    },
    errorCode => {
    
    });
  
  }

  options: DatepickerOptions = {
    displayFormat: 'DD-MM-YYYY',
    minYear: 1970,
    maxYear: 2030,
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select date',
     placeholder: 'Click to select date' ,
  };
  
  onHomePage(){
    this.dialogRef.close();
   }
    
  

}
