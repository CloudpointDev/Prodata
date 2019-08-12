import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '@angular/router';
import { StudentServicesService } from './../../sharedservices/student-services.service';
import { NgxLoadingModule } from 'ngx-loading';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

import 'datatables.net';
import { Relatives } from '../../relatives';
import { RelativesService } from '../../sharedService/relatives.service';
import { StaffMemberService } from '../../sharedservices/staffMemberService.service';



declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-list-relatives',
  templateUrl: './list-relatives.component.html',
  styleUrls: ['./list-relatives.component.css']
})
export class ListRElativesComponent implements OnInit {
  searchText = '';
  statusError:boolean=false;
  statusCode:number;
  isPresent:boolean=false;
  rel: Relatives;
  private AddRelativeForm :FormGroup
  relativeRows: FormArray;
  relatives: any[]
  students: any[]
  roll: any
  count:any
  isDisabled : boolean = true
  res: Response
  relations: any[] = [
    { name: 'Mother' },
    { name: 'Father' },
    { name: 'Sister' },
    { name: 'Brother' },
    {name:'Son'},
    {name:'Daughter'},
    {name : 'Spouse'},
    {name : 'CareTaker'},
    {name : 'Guardian'},
  ];

  isAdmin:boolean=false;
  public dataTable: DataTable = {
    headerRow: [ 'Name', 'Relation', 'Contact No', 'Action'],
    footerRow: [  'Name', 'Relation', 'Contact No', 'Action'],
    dataRows: []
 };
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private relativeService : RelativesService, private _router: Router, private relativeServices: RelativesService, private studentService: StudentServicesService,private roleguard:StaffMemberService) { }
  private loading: NgxLoadingModule
  ngOnInit() {

    this.validateError();
  document.getElementById("button").style.visibility = "visible"
   this.getRelativeById()
   this.getStudentData()
   

  }

  private validateError() {
     this.AddRelativeForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'mob': new FormControl('', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      'relation': new FormControl('', Validators.required),
    });


  }

 onSubmit(){
   this.statusError=false;
  var self = this;
  this.roll=this.route.snapshot.paramMap.get("rollNo")
  let name=(this.AddRelativeForm.get('name').value);
  let mob=this.AddRelativeForm.get('mob').value;
 let relative = (this.AddRelativeForm.get('relation').value);
  let relatives=new Relatives(0,mob,name,relative,this.roll)
  if(this.AddRelativeForm.valid){
    this.isPresent=false
    this.relativeService.createRelative(relatives).subscribe((data)=>{
     this.AddRelativeForm.reset()
     this.statusCode=201;
     this.setTimeOut();
     this.getRelativeById()
     setTimeout(()=>{this.isPresent = true},50);
 })

 }
 else{
   this.statusError=true;
   this.setTimeOut();
 }
}

 
  

  getRelativeById(){
    var self = this;
    this.roll = this.route.snapshot.paramMap.get("rollNo")
    this.relativeServices.getRelative(this.roll).subscribe((relatives) => {
      $('#datatables').DataTable().destroy();
      this.dataTable.dataRows = <any>relatives;
      setTimeout(function () {
          self.initTable();
      }, 50);
      this.relatives =<any> relatives;
      this.count=this.relatives.length;
      if(this.count==5){
         this.isDisabled=false
        }
      if(this.count>0){
      this.isPresent=true   }
    }, (error) => {
      console.log(error)
    })
    
  }

 
private initTable(){
   var table = $('#datatables').DataTable({
      "ordering": true,
      order:[ [ 0, 'asc' ]],
      columnDefs: [{ orderable: false, "targets": -1 }] ,
      "paging":false,
      "info":false,
      "language": {
          "emptyTable": "No Records Available"
      },
     });
  var table = $('#datatables').DataTable();
  $('#datatables').on('click', '.remove', function (e: any) {
        const $tr = $(this).closest('tr');
        table.row($tr).remove();
        //('#datatables').DataTable().destroy();
        //$('#datatables').DataTable().draw();
        e.preventDefault();
        $('#datatables').DataTable().draw();
});


}

initInsertTable(){
 $('#insertDatatables').DataTable({
    "ordering": true,
    order:[ [ 0, 'asc' ]],
    columnDefs: [{ orderable: false, "targets": -1 }] ,
    "paging":true,
    "info":false,
    "language": {
        "emptyTable": "No Records Available"
    },
   });
}

  getStudentData(){
    this.roll = this.route.snapshot.paramMap.get("rollNo")
    this.studentService.getStudentById( this.roll).subscribe((students) => {
      this.students = Array.of(students);
       }, (error) => {
    })

}
onHomePage(){
  this.roll = this.route.snapshot.paramMap.get("rollNo");
  this._router.navigate(['listRelative/' + this.roll])
}

deleteRelative(id:number) {
    this.relativeServices.deleteRelative(id).subscribe(() => {
      this.getRelativeById()
      document.getElementById("button").style.display = "block";
      this.isDisabled=false;
    }, (error) => {
      alert(error);
      console.log(error)
    })
   
  }


  setTimeOut() {
    window.setTimeout(function () {
        $(".alert").fadeTo(2000, 500).slideUp(500, function () {
            $(".alert").slideUp(500);
        });
    }, 4000);
}

  newRelatives(){
    this._router.navigate(['/addRelative/' + this.roll])
  }

  

  getFileList(){
    this.roll = this.route.snapshot.paramMap.get("rollNo")
    this._router.navigate(['/listFiles/'+this.roll])
  }

  homepage() {
    this._router.navigate(['/liststudent']);
  }

  adminCheck() {
    this.roleguard.roleCheck()
        .subscribe(successCode => {
            this.statusCode = successCode;
            console.log(this.statusCode)
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








