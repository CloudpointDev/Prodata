import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FileUploadService } from '../upload-file/file-upload.service';
import { saveAs } from 'file-saver';
import * as $ from "jquery";
import 'datatables.net';
import 'datatables.net-bs4';
import { NgxLoadingModule } from 'ngx-loading';
import { ActivatedRoute } from '@angular/router';
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: any[];
}
@Component({
  selector: 'app-listfiles',
  templateUrl: './listfiles.component.html',
  styleUrls: ['./listfiles.component.css']
})
export class ListfilesComponent implements OnInit {
  @ViewChild(DatatableComponent) public table: DatatableComponent;
  showFile = false;
  data:any;


  roll:any
  viewImage:boolean=false
  viewPdf:boolean=false
  fileSrc:any
  loading: NgxLoadingModule
  imageBlobUrl: any
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public dataTable: DataTable = {
    headerRow: ['Name','Action'],
    footerRow: ['Name','Action'],
     dataRows: []
 };
  fileUploads: Observable<string[]>;
  constructor(private fileuploadService : FileUploadService,private route : ActivatedRoute) { }
  ngOnInit() {
 
  this.getFileByRoll();
  }


getFileByRoll(){
  var self=this;
  this.roll = this.route.snapshot.paramMap.get("rollNo")

this.fileuploadService.getFilesById(this.roll).subscribe((data)=>{
  this.loading = false
  $('#datatables').DataTable().destroy()
  this.dataTable.dataRows = data;
  console.log(data)
  console.log(this.dataTable.dataRows)
  setTimeout(function () {
      self.initTable();
  }, 50);
}, (error) => {
  console.log(error)
})
}

viewFile(id:number){
 
  this.fileuploadService.getFilesViewById(id).subscribe((data)=>{
    var contenttype=data.headers.get('content-type')
 if(contenttype=="application/pdf"){
   this.viewImage=false
   this.viewPdf=true;
 }
 if(contenttype=="image/png"){
   this.viewPdf=false
  this.viewImage=true;
}
  this.fileSrc=data.url
  })
}

downloadFile(id:number){
this.fileuploadService.downloadFile(id).subscribe((file)=>{
var contentDisposition=file.headers.get('content-type');
var fileName=contentDisposition.split(".")[0];
var type=contentDisposition.split("/")[1];
var fileNameType=fileName+"."+type;
console.log(fileNameType)
saveAs(file.url,fileNameType)
 })
  
  }

 
//  createImageFromBlob(image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => {
//       this.imageBlobUrl = reader.result;
//     }, false);
//     if (image) {
//       reader.readAsDataURL(image);
//     }

// }

private initTable() {
  
  $('#datatables').DataTable({
      "ordering": true,
      "paging":false,
      "info":false,
      "searching":false,
      order:[ [ 0, 'asc' ]],
      columnDefs: [
        { orderable: false, targets: [-1] }
     ],
    
      "language": {
          "emptyTable": "No Records Available"
      },
  
      
  });

}
}
