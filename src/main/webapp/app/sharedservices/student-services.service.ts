import { Observable } from 'rxjs';
import { Student } from './../student';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UploadFile } from '../upload-file/upload-file';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import 'rxjs/add/observable/throw'
import { catchError, map } from 'rxjs/operators';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class StudentServicesService {
  private baseUrl: string = 'http://localhost:8080/api/rest';
  // private headers = new Headers({
  //   'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
  // private options = new RequestOptions({ headers: this.headers });
 

  constructor(private http:Http , private httpc:HttpClient) { }
  jwtHelper: JwtHelper = new JwtHelper();
  
  getAllStudent(){
   let headers = new Headers({
      'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl + '/getAllStudentData', options).pipe(
    map(this.extractData),
    catchError(this.errorHandler))
}

getStudentById(rollNo:number){
  let headers = new Headers({
    'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
  let options = new RequestOptions({ headers: headers });
  return this.http.get(this.baseUrl+'/getStudentDataById/'+rollNo,options)
  .map(this.extractData)
  .catch(this.errorHandler);
}

deleteStudent(rollNo :number){
  let headers = new Headers({
   "x-auth-token":localStorage.getItem('jwt')
  });
  let  options = new RequestOptions({ headers:headers });
  return this.http.delete(this.baseUrl+'/removeStudentDataById/'+rollNo,options)
  .map(this.extractData)
  .catch(this.errorHandler);
}

createStudent(student:Student):Observable<Student> {
  let headers = new Headers({
    'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
  let options = new RequestOptions({ headers: headers });
  console.log(student.name);
  return this.http.post(this.baseUrl + '/createStudentData',student, options)
  .map(this.extractData)
  .catch(this.errorHandler);
 

}

updateStudent(student:Student){
  let headers = new Headers({
    'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
  let options = new RequestOptions({ headers: headers });
  return this.http.put(this.baseUrl + '/updateStudent',student, options)
  .map(this.extractData)
  .catch(this.errorHandler);
}

uploadRecord(file): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  
  formdata.append('file', file);
  let headers = new Headers({
    'Content-Type':  'multipart/form-data', "x-auth-token":localStorage.getItem('jwt')
  });
  let  options = new RequestOptions({ headers: headers });
  var req = new HttpRequest('POST', 'http://localhost:8080/api/rest/upload',formdata)

  return this.httpc.request(req);
  // this.http.post('http://localhost:8080/api/rest/upload',formdata,options)
}


errorHandler(error: Response | any) {

  return Observable.throw(error)}

  private extractData(res: Response) {
    let body = res.json();
    return body
  }
}
