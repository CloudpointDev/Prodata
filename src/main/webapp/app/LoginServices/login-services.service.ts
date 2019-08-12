import { Login } from './../login';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {JwtHelper} from 'angular2-jwt';

import 'rxjs/Rx';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  jwtHelper: JwtHelper = new JwtHelper();
  private headers = new Headers({
    'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'true'
  });
  private options = new RequestOptions({headers: this.headers });

  constructor(private http:Http,private router: Router) { }

  login(username, password):Observable<Response> {
    let loginRequest = JSON.stringify({username: username, password: password});
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/auth/login', loginRequest)
                    .do(resp => {
                        localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
                        let token=  localStorage.getItem('jwt')
                        if (localStorage.getItem('jwt') !== null&&!this.jwtHelper.isTokenExpired(token)) {
                       this.router.navigate(['/listStudent']);
                        }
                    }).catch(this.handleError);
}
errorHandler(error: Response | any) {

  return Observable.throw(error || "Server Error");
}

private handleError(error: Response | any) {
  return Observable.throw(error.status);
}

}


