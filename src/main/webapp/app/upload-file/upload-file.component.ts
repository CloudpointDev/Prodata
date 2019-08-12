import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from './file-upload.service';
import { Student } from '../student';
import { UploadFile } from './upload-file';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  private students: Student;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  message: string;
  roll:any
  imagePath: any;
  imgURL: string | ArrayBuffer;
  imgURL1: string | ArrayBuffer;
  imagePath1: any;
  files:File;

  constructor(private uploadService: FileUploadService,private route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {

  }

  selectFile(event) {
    this.selectedFiles= event.target.files;
  }


  preview(files) {
    if (files.length === 0)
      return;
    this.selectedFiles = files;
    var mimeType = files[0].type;
 console.log(mimeType)
if(mimeType=="application/pdf"){
  
}
else{
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    }
  }

  previewFile(files) {
    if (files.length === 0)
      return;
    this.selectedFiles = files;
    var mimeType = files[0].type;
 

    var reader = new FileReader();
    this.imagePath1 = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL1 = reader.result;
      
    }
  }
  onHomePage(){
    this._router.navigate(['/liststudent']);

  }
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.roll = this.route.snapshot.paramMap.get("rollNo")
 
    console.log(  this.currentFileUpload );
    if (this.currentFileUpload.size <= 1048576) {
      this.uploadService.pushFileToStorage(this.currentFileUpload,this.roll).subscribe(event => {
       
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
          
        } else if (event instanceof HttpResponse) {
         
        }
      });
     
    }
}


}
