import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivateChild,CanActivate {

    jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) {}

  canActivateChild() { 
    let token= localStorage.getItem('jwt');
    console.log(" IN AUTH GUARD PROCESS" +token)
    if (localStorage.getItem('jwt') !== null&&!this.jwtHelper.isTokenExpired(token)) {

      return true;
    
    }
    this.router.navigate(['/login']);
    return false;

  }

  canActivate() {
    
    let token= localStorage.getItem('jwt');
    console.log("-----------------"+token)
    if (localStorage.getItem('jwt') !== null&&!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['/listStudent']);
      return true;
    }
    this.router.navigate(['/']);
    return false;

  }
}