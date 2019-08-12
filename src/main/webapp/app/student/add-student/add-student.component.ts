import { StudentServicesService } from './../../sharedservices/student-services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from './../../student';
import { Component, OnInit, PipeTransform, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit  {
  selectedFiles: FileList;
  currentFileUpload: File;
dob:Date;
 activeflag='Y';
 AddForm : FormGroup
 minDate = new Date(1900, 0, 1);
maxDate = new Date();
  minEndDate = new Date();
 constructor(private studentService: StudentServicesService, private _router: Router) { }

  ngOnInit() {
    this.validateError()
  }
 
  private validateError() {
 
    this.AddForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'std': new FormControl('',Validators.required),
      'address': new FormControl('',[Validators.required,Validators.minLength(20)]),
     
    });
  }

  formReset(){
    this.AddForm.reset()
  }

  processForm(){
    let name=this.AddForm.get('name').value
    console.log(this.AddForm.get('name').value)
    let dob= this.AddForm.get('dob').value
    console.log(dob)
    let std=this.AddForm.get('std').value;
    console.log(this.AddForm.get('std').value)
    let addr=this.AddForm.get('address').value;
    console.log(this.AddForm.get('address').value)
   let student=new Student(0,name,std,dob,addr,'Y');
      this.studentService.createStudent(student).subscribe((student) => {
        console.log(student);
   alert("Student Added Successfully")
        this._router.navigate(['/liststudent']);
      }, (error) => {
        console.log(error)
      });
      this.AddForm.reset()
    
   
//       let student=new Student(0,name,dob,std,addr,'Y');
//       this.studentService.updateStudent(student).subscribe((student) => {
//         alert("Student Updated Successfully")
//      this._router.navigate(['/liststudent']);
//  }, (error) => {
//         console.log(error);
//       });

    // this.AddForm.reset()

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
    this._router.navigate(['/liststudent']);

  }
    
  onSubmit(file:File){
   
    this.studentService.uploadRecord(file).subscribe((data)=>{
console.log(data)  })
  }



  }





