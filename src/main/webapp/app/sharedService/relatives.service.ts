import { Relatives } from './../relatives';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
@Injectable({
  providedIn: 'root'
})
export class RelativesService {
  private baseUrl: string = 'http://localhost:8080/api/rest';


  constructor(private http: Http) { }

  //Get All the Relatives without Id or roll No
  getAllRelatives() {
    let headers = new Headers({
      'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl + '/getAllStudentRelatives', options)
      .map(this.extractData)

  }

  //Get Relatives using roll no
  getRelative(rollNo): Observable<Relatives[]> {
    let headers = new Headers({
      'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + '/getStudentRelativesById/' + rollNo, options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  // Delete relative using ID
  deleteRelative(id: number) {
    return this.http.delete(this.baseUrl + '/removeStudentRelativesById', { params: { id: id } })
      .map(this.extractData)
      .catch(this.errorHandler);
  }

  //Insert Relative data
  createRelative(relative: Relatives): Observable<Relatives> {
    let headers = new Headers({
      'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + '/createStudentRelatives', relative, options)
      .map(this.extractData)
      .catch(this.errorHandler)

  }

  //Update Relatives data
  updateRelative(relative: Relatives) {
    let headers = new Headers({
      'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/updateRelative', relative, options)
      .map(this.extractData)
      .catch(this.errorHandler);
  }


  errorHandler(error: Response | any) {

    return Observable.throw(error || "Server Error");
  }

  private extractData(res: Response) {
    console.log(JSON.stringify(res))
    let body = res.json();
    return body || [];
  }
}

