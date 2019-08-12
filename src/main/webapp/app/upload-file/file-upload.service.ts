import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadFile } from './upload-file';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  
  private headers = new Headers({
    'Content-Type': 'application/json',  "x-auth-token":localStorage.getItem('jwt')
  });
  
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private httpc: HttpClient,private http : Http) { }

  pushFileToStorage(file: UploadFile,rollNo): Observable<HttpEvent<{}>> {
    let headers = new HttpHeaders({
      "x-auth-token":localStorage.getItem('jwt')
     });
    const formdata: FormData = new FormData();
    
    formdata.append('file', file);
    
    var req = new HttpRequest('POST', 'http://localhost:8080/api/rest/file/upload/'+rollNo,formdata,{
      reportProgress: true,
      responseType: 'text',
      headers :headers
     });
 
    return this.httpc.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.httpc.get('http://localhost:8080/api/rest/file/all');
  }

  getFilesById(rollNo): Observable<UploadFile[]> {
    let headers = new Headers({
      "x-auth-token":localStorage.getItem('jwt')
     
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/rest/file/'+rollNo,options)
    .map(res=>res.json());
  }

  
  getFilesViewById(id) {
    let headers = new Headers({
      "x-auth-token":localStorage.getItem('jwt')
        });
         let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:8080/api/rest/fileView/'+id,options)
  
  }

  downloadFile(id:number){
    let headers = new Headers({
      "x-auth-token":localStorage.getItem('jwt')
      });
         let options = new RequestOptions({ headers: headers });
         return this.http.get('http://localhost:8080/api/rest/download/file/'+id,options)
        
        
  }
  deleteFileById(id){
    let headers = new Headers({
      'Content-Type': 'attachment',
      "x-auth-token":localStorage.getItem('jwt')
         });
         let options = new RequestOptions({ headers: headers });
         console.log("@@@@@@@@DELETE SERVICE"+id)
         return this.http.delete('http://localhost:8080/api/file/delete/'+id,options);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
