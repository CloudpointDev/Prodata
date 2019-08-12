import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders ,} from '@angular/common/http';
import { UploadFile } from '../upload-file/upload-file';
import { Observable } from 'rxjs';
import { RequestOptions ,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UploadMarksService {

  constructor(private httpc :HttpClient ) { }

  pushFileToStorage(file): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    let headers = new HttpHeaders({
      "x-auth-token":localStorage.getItem('jwt')
     });
    formdata.append('file', file);
    
    var req = new HttpRequest('POST', 'http://localhost:8080/api/rest/uploadMarks',formdata, {
      reportProgress: true,
      responseType: 'text',
      headers:headers
    });
 
    return this.httpc.request(req);
  }
 
}
