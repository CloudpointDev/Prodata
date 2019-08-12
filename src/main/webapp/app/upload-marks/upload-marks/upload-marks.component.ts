import { Component, OnInit } from '@angular/core';
import { UploadMarksService } from '../upload-marks.service';
import { HttpEventType, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-marks',
  templateUrl: './upload-marks.component.html',
  styleUrls: ['./upload-marks.component.css']
})
export class UploadMarksComponent implements OnInit {
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
  constructor(private uploadService : UploadMarksService,private _router:Router,public dialogRef: MatDialogRef<UploadMarksComponent>) { }

  ngOnInit() {
  }

  
  selectFile(event) {
    this.selectedFiles= event.target.files;
  }

  onNoClick(): void {
    this.dialogRef.close();
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

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
 
    console.log(  this.currentFileUpload );
    if (this.currentFileUpload.size <= 1048576) {
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
       
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
          
        } else if (event instanceof HttpResponse) {
         
        }
        
        this.dialogRef.close()
      });
     
    }

}
onPage(){
  this.dialogRef.close();
}
}