import { Observable } from 'rxjs';
import { Student } from './../student';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UploadFile } from '../upload-file/upload-file';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import 'rxjs/add/observable/throw'
import { catchError, map } from 'rxjs/operators';
import { StaffMember } from '../staffmember/staffmember/staffMember';
import { StaffRole } from '../staffmember/staffmember/StaffRole';
@Injectable()
export class StaffMemberService {
  private baseUrl: string = 'http://localhost:8080/api/rest';

 

  constructor(private http:Http , private httpc:HttpClient) { }



createStaff(staff:StaffMember):Observable<StaffMember> {
 let headers = new Headers({
    'Content-Type': 'application/json', "x-auth-token":localStorage.getItem('jwt')
  });
   let options = new RequestOptions({ headers: headers });
  
  return this.http.post(this.baseUrl + '/createStaff',staff, options)
  .map(this.extractData)
  .catch(this.errorHandler);
 }

createStaffRole(staffRole:StaffRole):Observable<StaffRole> {
  let headers = new Headers({
    'Content-Type': 'application/json', "x-auth-token":localStorage.getItem('jwt')
  });
  let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + '/createStaffRoles',staffRole, options)
    .map(this.extractData)
    .catch(this.errorHandler);
}

 roleCheck(): Observable<number> {

  let cpHeaders = new Headers({ 'Content-Type': 'application/json', "x-auth-token":localStorage.getItem('jwt') });
  let options = new RequestOptions({ headers: cpHeaders });
  return this.http.get(this.baseUrl + '/isAdmin',options)
  .map(success => success.status)
  .catch(this.errorHandler);
}







errorHandler(error: Response | any) {
  console.log(error);
  return Observable.throw(error)}

  private extractData(res: Response) {
    let body = res.json();
    return body
  }
}
