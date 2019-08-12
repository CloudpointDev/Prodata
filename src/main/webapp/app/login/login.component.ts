
import { LoginServicesService } from './../LoginServices/login-services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:Login
logForm:FormGroup
pass:any
test: Date = new Date();
	errorMessage: string;
	statusCode:number;
	jwtHelper: JwtHelper = new JwtHelper();
	lastVisitedURL: string;

  isExpired:boolean=true;
  errorFlagForUserName : boolean= false;
	errorFlagForPassword : boolean= false;
	
 loginID: any;
  constructor(private loginService:LoginServicesService,private router:Router) { }

  ngOnInit() {
    localStorage.clear();
    this.validateError()
    this.logForm.reset();
  }

  private validateError() {
    
      this.logForm = new FormGroup({
        'loginid': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
    });
    }

    onLogin() {
      if (this.logForm.valid) {
      let loginid=  this.logForm.get('loginid').value;
      let password = this.logForm.get('password').value;
        this.loginService.login(loginid, password)
        
        .subscribe(() => { });
          
  errorCode =>  this.statusCode = errorCode
         //Loader logic
         if(this.statusCode!=0){
         
         }
        }
       
    }
  }
