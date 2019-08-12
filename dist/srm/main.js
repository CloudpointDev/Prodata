(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var main_webapp_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! main/webapp/app/app.module */ "./src/main/webapp/app/app.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(main_webapp_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/main/webapp/app/LoginServices/login-services.service.ts":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/LoginServices/login-services.service.ts ***!
  \*********************************************************************/
/*! exports provided: LoginServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServicesService", function() { return LoginServicesService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginServicesService = /** @class */ (function () {
    function LoginServicesService(http, router) {
        this.http = http;
        this.router = router;
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'true'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: this.headers });
    }
    LoginServicesService.prototype.login = function (username, password) {
        var _this = this;
        var loginRequest = JSON.stringify({ username: username, password: password });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.post('http://localhost:8080/auth/login', loginRequest)
            .do(function (resp) {
            localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
            var token = localStorage.getItem('jwt');
            if (localStorage.getItem('jwt') !== null && !_this.jwtHelper.isTokenExpired(token)) {
                _this.router.navigate(['/listStudent']);
            }
        }).catch(this.handleError);
    };
    LoginServicesService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || "Server Error");
    };
    LoginServicesService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    LoginServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginServicesService);
    return LoginServicesService;
}());



/***/ }),

/***/ "./src/main/webapp/app/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/main/webapp/app/login/login.component.ts");
/* harmony import */ var _relatives_add_relatives_add_relatives_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatives/add-relatives/add-relatives.component */ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.ts");
/* harmony import */ var _relatives_list_relatives_list_relatives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatives/list-relatives/list-relatives.component */ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/liststudent/liststudent.component */ "./src/main/webapp/app/student/liststudent/liststudent.component.ts");
/* harmony import */ var _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/add-student/add-student.component */ "./src/main/webapp/app/student/add-student/add-student.component.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/main/webapp/app/upload-file/upload-file.component.ts");
/* harmony import */ var _listfiles_listfiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listfiles/listfiles.component */ "./src/main/webapp/app/listfiles/listfiles.component.ts");
/* harmony import */ var _upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-marks/upload-marks/upload-marks.component */ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth-guard */ "./src/main/webapp/app/shared/auth-guard.ts");
/* harmony import */ var _staffmember_staffmember_staffmember_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./staffmember/staffmember/staffmember.component */ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'listStudent',
        component: _student_liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_5__["ListstudentComponent"],
        canActivateChild: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
    },
    {
        path: 'srm',
        component: _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__["AddStudentComponent"],
    },
    {
        path: 'listRelative',
        component: _relatives_list_relatives_list_relatives_component__WEBPACK_IMPORTED_MODULE_2__["ListRElativesComponent"],
    },
    {
        path: "listRelative/:rollNo",
        component: _relatives_list_relatives_list_relatives_component__WEBPACK_IMPORTED_MODULE_2__["ListRElativesComponent"],
    },
    {
        path: 'addRelative/:rollNo',
        component: _relatives_add_relatives_add_relatives_component__WEBPACK_IMPORTED_MODULE_1__["AddRElativesComponent"],
    },
    {
        path: 'uploadDoc/:rollNo',
        component: _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileComponent"],
    },
    {
        path: 'uploadMarks',
        component: _upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_9__["UploadMarksComponent"],
    },
    {
        path: 'listFiles/:rollNo',
        component: _listfiles_listfiles_component__WEBPACK_IMPORTED_MODULE_8__["ListfilesComponent"],
    },
    {
        path: 'addMember',
        component: _staffmember_staffmember_staffmember_component__WEBPACK_IMPORTED_MODULE_11__["StaffmemberComponent"],
    },
    {
        path: '**',
        component: _student_liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_5__["ListstudentComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/main/webapp/app/app.component.css":
/*!***********************************************!*\
  !*** ./src/main/webapp/app/app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/main/webapp/app/app.component.html":
/*!************************************************!*\
  !*** ./src/main/webapp/app/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\t<router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "./src/main/webapp/app/app.component.ts":
/*!**********************************************!*\
  !*** ./src/main/webapp/app/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'srm';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/main/webapp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/main/webapp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.pipe */ "./src/main/webapp/app/filter.pipe.ts");
/* harmony import */ var _relatives_relatives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatives/relatives.module */ "./src/main/webapp/app/relatives/relatives.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedservices/student-services.service */ "./src/main/webapp/app/sharedservices/student-services.service.ts");
/* harmony import */ var _student_liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student/liststudent/liststudent.component */ "./src/main/webapp/app/student/liststudent/liststudent.component.ts");
/* harmony import */ var _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/add-student/add-student.component */ "./src/main/webapp/app/student/add-student/add-student.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/main/webapp/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/main/webapp/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/main/webapp/app/login/login.component.ts");
/* harmony import */ var _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sharedService/relatives.service */ "./src/main/webapp/app/sharedService/relatives.service.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/main/webapp/app/upload-file/upload-file.component.ts");
/* harmony import */ var _listfiles_listfiles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./listfiles/listfiles.component */ "./src/main/webapp/app/listfiles/listfiles.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./upload-marks/upload-marks/upload-marks.component */ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.ts");
/* harmony import */ var _sharedservices_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sharedservices/modal.service */ "./src/main/webapp/app/sharedservices/modal.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/auth-guard */ "./src/main/webapp/app/shared/auth-guard.ts");
/* harmony import */ var _staffmember_staffmember_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staffmember/staffmember.module */ "./src/main/webapp/app/staffmember/staffmember.module.ts");
/* harmony import */ var _staffmember_staffmember_staffmember_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./staffmember/staffmember/staffmember.component */ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.ts");
/* harmony import */ var _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sharedservices/staffMemberService.service */ "./src/main/webapp/app/sharedservices/staffMemberService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _student_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_6__["AddStudentComponent"],
                _listfiles_listfiles_component__WEBPACK_IMPORTED_MODULE_18__["ListfilesComponent"],
                _student_liststudent_liststudent_component__WEBPACK_IMPORTED_MODULE_5__["ListstudentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _staffmember_staffmember_staffmember_component__WEBPACK_IMPORTED_MODULE_26__["StaffmemberComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"],
                _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_17__["UploadFileComponent"],
                _upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_21__["UploadMarksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__["PdfViewerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _relatives_relatives_module__WEBPACK_IMPORTED_MODULE_2__["RelativesModule"],
                _staffmember_staffmember_module__WEBPACK_IMPORTED_MODULE_25__["StaffmemberModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__["NgxDatatableModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].threeBounce,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '10px',
                    primaryColour: ' #AE275F',
                    secondaryColour: ' #AE275F',
                    tertiaryColour: '#AE275F'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_14__["NgDatepickerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["NO_ERRORS_SCHEMA"]],
            providers: [_sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_4__["StudentServicesService"], _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_16__["RelativesService"], _sharedservices_modal_service__WEBPACK_IMPORTED_MODULE_22__["ModalService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"], _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_27__["StaffMemberService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/main/webapp/app/filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/main/webapp/app/filter.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        return value.filter(function (val) {
            var rVal = (val.name.toLocaleLowerCase().includes(args));
            return rVal;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchByName'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/main/webapp/app/listfiles/listfiles.component.css":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/listfiles/listfiles.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablehead {\r\n\ttext-align: center;\r\n\tbackground-color: #a62659;\r\n\tcolor: azure\r\n}\r\n\r\nh1 {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbGlzdGZpbGVzL2xpc3RmaWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9saXN0ZmlsZXMvbGlzdGZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVoZWFkIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2E2MjY1OTtcclxuXHRjb2xvcjogYXp1cmVcclxufVxyXG5cclxuaDEge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGNvbG9yOiAjYTYyNjU5O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/listfiles/listfiles.component.html":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/listfiles/listfiles.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n\t<h1>\n\t\t<strong>List of Uploaded Files</strong>\n\t</h1>\n\t<table id=\"datatables\"\n\t\tclass=\"table table-striped table-condensed table-hover\" width=\"50%\">\n\t\t<ngx-loading [show]=\"loading\"></ngx-loading>\n\t\t<thead class=\"tablehead\">\n\t\t\t<tr>\n\t\t\t\t<th>{{ dataTable.headerRow[0] }}</th>\n\t\t\t\t<th>{{ dataTable.headerRow[1] }}</th>\n\t\t\t</tr>\n\n\t\t</thead>\n\n\t\t<!-- <tfoot>\n      <tr>\n      <th class=\"tablehead\">{{ dataTable.footerRow[0] }}</th>\n      <th class=\"tablehead\">{{ dataTable.footerRow[1] }}</th>\n      <th class=\"tablehead\">{{ dataTable.footerRow[2] }}</th>\n      <th class=\"tablehead\">{{ dataTable.footerRow[3] }} </th>\n      <th class=\"tablehead\"> {{ dataTable.footerRow[4] }}</th>\n      <th class=\"tablehead\">{{ dataTable.footerRow[5] }}</th>\n    </tr>\n     \n    </tfoot> -->\n\n\t\t<tbody>\n\n\t\t\t<tr *ngFor=\"let file of dataTable.dataRows\">\n\n\t\t\t\t<td><a class=\"butn\" type=\"submit\"\n\t\t\t\t\t(click)=viewFile(file.id)><span tooltip\n\t\t\t\t\t\tcontent=\"You can have any html or plain text content here\">{{file.name}}\n\t\t\t\t\t</span></a></td>\n\t\t\t\t<td width=\"10%\">\n\t\t\t\t\t<button class=\"zoomout btn \" (click)=\"downloadFile(file.id)\"\n\t\t\t\t\t\tstyle=\"background: transparent\">\n\t\t\t\t\t\t<i class=\" fa fa-download\" style=\"color: #28a745; font-size: 20px\"></i>\n\t\t\t\t\t</button>\n\t\t\t</tr>\n\n\n\t\t</tbody>\n\n\t</table>\n\n\t<div *ngIf=\"viewImage\">\n\t<img alt=\"Image\" src={{fileSrc}} />\n\t</div>\n\t<div *ngIf=\"viewPdf\">\n<pdf-viewer [src]=\"fileSrc\" \n[render-text]=\"false\"\nstyle=\"display: block;\"\n></pdf-viewer>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/main/webapp/app/listfiles/listfiles.component.ts":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/listfiles/listfiles.component.ts ***!
  \**************************************************************/
/*! exports provided: ListfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListfilesComponent", function() { return ListfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upload_file_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-file/file-upload.service */ "./src/main/webapp/app/upload-file/file-upload.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListfilesComponent = /** @class */ (function () {
    function ListfilesComponent(fileuploadService, route) {
        this.fileuploadService = fileuploadService;
        this.route = route;
        this.showFile = false;
        this.viewImage = false;
        this.viewPdf = false;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.dataTable = {
            headerRow: ['Name', 'Action'],
            footerRow: ['Name', 'Action'],
            dataRows: []
        };
    }
    ListfilesComponent.prototype.ngOnInit = function () {
        this.getFileByRoll();
    };
    ListfilesComponent.prototype.getFileByRoll = function () {
        var _this = this;
        var self = this;
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        this.fileuploadService.getFilesById(this.roll).subscribe(function (data) {
            _this.loading = false;
            jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable().destroy();
            _this.dataTable.dataRows = data;
            console.log(data);
            console.log(_this.dataTable.dataRows);
            setTimeout(function () {
                self.initTable();
            }, 50);
        }, function (error) {
            console.log(error);
        });
    };
    ListfilesComponent.prototype.viewFile = function (id) {
        var _this = this;
        this.fileuploadService.getFilesViewById(id).subscribe(function (data) {
            var contenttype = data.headers.get('content-type');
            if (contenttype == "application/pdf") {
                _this.viewImage = false;
                _this.viewPdf = true;
            }
            if (contenttype == "image/png") {
                _this.viewPdf = false;
                _this.viewImage = true;
            }
            _this.fileSrc = data.url;
        });
    };
    ListfilesComponent.prototype.downloadFile = function (id) {
        this.fileuploadService.downloadFile(id).subscribe(function (file) {
            var contentDisposition = file.headers.get('content-type');
            var fileName = contentDisposition.split(".")[0];
            var type = contentDisposition.split("/")[1];
            var fileNameType = fileName + "." + type;
            console.log(fileNameType);
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(file.url, fileNameType);
        });
    };
    //  createImageFromBlob(image: Blob) {
    //     let reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       this.imageBlobUrl = reader.result;
    //     }, false);
    //     if (image) {
    //       reader.readAsDataURL(image);
    //     }
    // }
    ListfilesComponent.prototype.initTable = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable({
            "ordering": true,
            "paging": false,
            "info": false,
            "searching": false,
            order: [[0, 'asc']],
            columnDefs: [
                { orderable: false, targets: [-1] }
            ],
            "language": {
                "emptyTable": "No Records Available"
            },
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], ListfilesComponent.prototype, "table", void 0);
    ListfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listfiles',
            template: __webpack_require__(/*! ./listfiles.component.html */ "./src/main/webapp/app/listfiles/listfiles.component.html"),
            styles: [__webpack_require__(/*! ./listfiles.component.css */ "./src/main/webapp/app/listfiles/listfiles.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_file_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ListfilesComponent);
    return ListfilesComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n\tmax-width: 400px;\r\n\tmargin: 65px auto 0;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.border {\r\n\tborder-style: solid;\r\n}\r\n\r\n.error {\r\n\tcolor: tomato;\r\n\tfont-size: 12px;\r\n\tpadding-top: 4px\r\n}\r\n\r\n.heading {\r\n\tpadding: 60px;\r\n\tpadding-left: 0px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n\r\nform {\r\n\tmargin: 0;\r\n\tpadding: 5rem 0;\r\n\tborder: 2px solid #ae285d;\r\n}\r\n\r\n.btn {\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 30px;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 1.42857143;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n\ttouch-action: manipulation;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tbackground-image: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 4px;\r\n\tbackground: #ae285d\r\n}\r\n\r\n.zoom {\r\n\tpadding: -50px;\r\n\tbackground-color: white;\r\n\ttransition: -webkit-transform .1s;\r\n\ttransition: transform .1s;\r\n\ttransition: transform .1s, -webkit-transform .1s; /* Animation */\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QiwyQkFBMkI7Q0FDM0IsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtDQUMxQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLGtDQUEwQjtDQUExQiwwQkFBMEI7Q0FBMUIsaURBQTBCLENBQUMsZUFBZTtDQUMxQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGVBQWU7Q0FDZjs7QUFJRDtDQUNDLDhCQUFxQjtTQUFyQixxQkFBcUI7Q0FDckIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcblx0bWF4LXdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDY1cHggYXV0byAwO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcblx0Y29sb3I6IHRvbWF0bztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0cGFkZGluZy10b3A6IDRweFxyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0cGFkZGluZzogNjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICNhNjI2NTk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cmVtIDA7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2FlMjg1ZDtcclxufVxyXG5cclxuLmJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0YmFja2dyb3VuZDogI2FlMjg1ZFxyXG59XHJcblxyXG4uem9vbSB7XHJcblx0cGFkZGluZzogLTUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xczsgLyogQW5pbWF0aW9uICovXHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnpvb21vdXQ6aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC44KVxyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"heading\">SRM LOGIN</div>\n<body>\n\t<div class=\"zoom\">\n\t\t<form [formGroup]=\"logForm\" (ngSubmit)=\"onLogin()\">\n\t\t\t<div class=\"login-container \">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Login ID</label> <input type=\"email\"\n\t\t\t\t\t\t\t\tformControlName=\"loginid\" required\n\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf='logForm.get(\"loginid\").touched && logForm.get(\"loginid\").invalid'\n\t\t\t\t\t\t\t\tclass=\" alert-danger\">Login Id is required!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Password</label> <input type=\"password\"\n\t\t\t\t\t\t\t\tformControlName=\"password\"  required\n\t\t\t\t\t\t\t\trequired class=\"form-control\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf='logForm.get(\"password\").touched && logForm.get(\"password\").invalid'\n\t\t\t\t\t\t\t\tclass=\" alert-danger\">Password is must!</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<button class=\"zoomout btn btn-success pull-right\">Login</button>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</body>\n"

/***/ }),

/***/ "./src/main/webapp/app/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _LoginServices_login_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../LoginServices/login-services.service */ "./src/main/webapp/app/LoginServices/login-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.test = new Date();
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelper"]();
        this.isExpired = true;
        this.errorFlagForUserName = false;
        this.errorFlagForPassword = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.validateError();
        this.logForm.reset();
    };
    LoginComponent.prototype.validateError = function () {
        this.logForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'loginid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.logForm.valid) {
            var loginid = this.logForm.get('loginid').value;
            var password = this.logForm.get('password').value;
            this.loginService.login(loginid, password)
                .subscribe(function () { });
            (function (errorCode) { return _this.statusCode = errorCode; });
            //Loader logic
            if (this.statusCode != 0) {
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/main/webapp/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/main/webapp/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_LoginServices_login_services_service__WEBPACK_IMPORTED_MODULE_0__["LoginServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/relatives.ts":
/*!******************************************!*\
  !*** ./src/main/webapp/app/relatives.ts ***!
  \******************************************/
/*! exports provided: Relatives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relatives", function() { return Relatives; });
var Relatives = /** @class */ (function () {
    function Relatives(id, mobNo, name, relation, rollno) {
        this.id = id;
        this.mobNo = mobNo;
        this.name = name;
        this.relation = relation;
        this.rollno = rollno;
    }
    return Relatives;
}());



/***/ }),

/***/ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.css":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/add-relatives/add-relatives.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url(\"src/assets/final.jpg\") no-repeat center;\r\n    background-position: top center;\r\n    background-size: cover;\r\n\r\n\r\n} */\r\n.example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 100%;\r\n}\r\nform {\r\n\tposition: absolute;\r\n\tleft: 25%;\r\n\twidth: 100%;\r\n}\r\ninput[type=date], textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\ninput[type=text], select, textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\n/* Style the label to display next to the inputs */\r\nlabel {\r\n\tpadding: 12px 12px 12px 0;\r\n\tdisplay: inline-block;\r\n}\r\n/* Style the submit button */\r\ninput[type=submit] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 14px 60px;\r\n\tborder: none;\r\n\tborder-radius: 24px;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n}\r\n/* Style the container */\r\n.container {\r\n\tborder-radius: 5px;\r\n\tpadding: 20px;\r\n}\r\n/* Floating column for labels: 25% width */\r\n.col-25 {\r\n\tfloat: left;\r\n\twidth: 9%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Floating column for inputs: 75% width */\r\n.col-75 {\r\n\tfloat: left;\r\n\twidth: 75%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 120px) {\r\n\t.col-25, .col-75, input[type=submit] {\r\n\t\twidth: 50%;\r\n\t\tmargin-top: 0;\r\n\t}\r\n}\r\n.heading {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\ninput[type=reset] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 14px 60px;\r\n\tborder: none;\r\n\tborder-radius: 24px;\r\n\tcursor: pointer;\r\n\tmargin: 20px;\r\n\tmargin-right: 5px;\r\n}\r\n.success {\r\n\tfont-weight: 200;\r\n\tborder: solid red 1px\r\n}\r\n.alert {\r\n\tpadding: 20px;\r\n\tbackground-color: #f44336; /* Red */\r\n\tcolor: white;\r\n\tmargin-bottom: 15px;\r\n}\r\n.closebtn {\r\n\tmargin-left: 15px;\r\n\tcolor: white;\r\n\tfont-weight: bold;\r\n\tfloat: right;\r\n\tfont-size: 22px;\r\n\tline-height: 20px;\r\n\tcursor: pointer;\r\n\ttransition: 0.3s;\r\n}\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvcmVsYXRpdmVzL2FkZC1yZWxhdGl2ZXMvYWRkLXJlbGF0aXZlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQVFJO0FBQ0o7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCO0FBRUQsbURBQW1EO0FBQ25EO0NBQ0MsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QjtBQUVELDZCQUE2QjtBQUM3QjtDQUNDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjtBQUVELHlCQUF5QjtBQUN6QjtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Q7QUFFRCwyQ0FBMkM7QUFDM0M7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGdCQUFnQjtDQUNoQjtBQUVELDJDQUEyQztBQUMzQztDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCO0FBRUQsb0NBQW9DO0FBQ3BDO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRCxnSkFBZ0o7QUFDaEo7Q0FDQztFQUNDLFdBQVc7RUFDWCxjQUFjO0VBQ2Q7Q0FDRDtBQUVEO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCO0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsMEJBQTBCLENBQUMsU0FBUztDQUNwQyxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyw4QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvcmVsYXRpdmVzL2FkZC1yZWxhdGl2ZXMvYWRkLXJlbGF0aXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ZpbmFsLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG5cclxufSAqL1xyXG4uZXhhbXBsZS1mb3JtIHtcclxuXHRtaW4td2lkdGg6IDE1MHB4O1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjUlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWRhdGVdLCB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAxMnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAxMnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXHJcbmxhYmVsIHtcclxuXHRwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxNHB4IDYwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY29udGFpbmVyICovXHJcbi5jb250YWluZXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBGbG9hdGluZyBjb2x1bW4gZm9yIGxhYmVsczogMjUlIHdpZHRoICovXHJcbi5jb2wtMjUge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA5JTtcclxuXHRtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8qIEZsb2F0aW5nIGNvbHVtbiBmb3IgaW5wdXRzOiA3NSUgd2lkdGggKi9cclxuLmNvbC03NSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDc1JTtcclxuXHRtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGRpc3BsYXk6IHRhYmxlO1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwcHgpIHtcclxuXHQuY29sLTI1LCAuY29sLTc1LCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICNhNjI2NTk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmVzZXRdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxNHB4IDYwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMjBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0Ym9yZGVyOiBzb2xpZCByZWQgMXB4XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAvKiBSZWQgKi9cclxuXHRjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNsb3NlYnRuIHtcclxuXHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnpvb21vdXQ6aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC44KVxyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.html":
/*!**********************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/add-relatives/add-relatives.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">\n\t<label>Relative Information</label>\n</div>\n\n<div class=\"container\">\n\n\t<form [formGroup]=\"AddForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<ngx-loading [show]=\"loading\"></ngx-loading>\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-25\">\n\t\t\t\t<label> Name : </label>\n\t\t\t</div>\n\t\t\t<div class=\"col-75\">\n\t\t\t\t<input formControlName=\"name\" type=\"text\" name=\"name\"\n\t\t\t\t\tclass='form-control'>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf='AddForm.get(\"name\").touched && AddForm.get(\"name\").invalid'\n\t\t\t\t\tclass=\" alert-danger\">Name is required!</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-25\">\n\t\t\t\t<label>Mobile : </label>\n\t\t\t</div>\n\t\t\t<div class=\"col-75\">\n\t\t\t\t<input formControlName=\"mob\" type=\"text\" name=\"mob\"\n\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t<div\n\t\t\t\t\t*ngIf='AddForm.get(\"mob\").touched && AddForm.get(\"mob\").invalid'\n\t\t\t\t\tclass=\" alert-danger\">Mobile Number is Required and Should Be\n\t\t\t\t\tof 10 Digits</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-25\">\n\t\t\t\t<label>Relation : </label>\n\t\t\t</div>\n\t\t\t<div class=\"col-75\">\n\t\t\t\t<select formControlName=\"relation\" class='select-option' required>\n\t\t\t\t\t<option class='option' *ngFor='let relative of relations'\n\t\t\t\t\t\t[(ngValue)]=\"relative.name\">{{relative.name}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"col-25\">\n\n\t\t\t<input type=\"submit\" class=\"zoomout\" id=\"button\" value=\"Save\"\n\t\t\t\tstyle=\"background: #ae285d\">\n\n\t\t\t<!-- </ng-template> -->\n\t\t\t<!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\" [template]=\"customLoadingTemplate\"></ngx-loading> -->\n\t\t</div>\n\t\t<input type=\"reset\" class=\"zoomout\" value=\"Reset\"\n\t\t\tstyle=\"background: #ae285d; margin: 20px; margin-left: 50px; margin-top: 10px\">\n\t\t<input type=\"submit\" class=\"zoomout\" value=\"Cancel\"\n\t\t\t(click)=\"onHomePage()\"\n\t\t\tstyle=\"background: #ae285d; margin: 20px; margin-right: 30px; margin-top: 10px\">\n\n\t</form>\n\n</div>"

/***/ }),

/***/ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.ts":
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/add-relatives/add-relatives.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddRElativesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRElativesComponent", function() { return AddRElativesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _relatives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../relatives */ "./src/main/webapp/app/relatives.ts");
/* harmony import */ var _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sharedService/relatives.service */ "./src/main/webapp/app/sharedService/relatives.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRElativesComponent = /** @class */ (function () {
    function AddRElativesComponent(relativeService, route, _router, formbuilder) {
        this.relativeService = relativeService;
        this.route = route;
        this._router = _router;
        this.formbuilder = formbuilder;
        this.statusError = false;
        this.relations = [
            { name: 'Mother' },
            { name: 'Father' },
            { name: 'Sister' },
            { name: 'Brother' },
            { name: 'Spouse' }
        ];
    }
    AddRElativesComponent.prototype.ngOnInit = function () {
        this.validateError();
    };
    AddRElativesComponent.prototype.validateError = function () {
        this.AddForm = this.formbuilder.group({
            'rollNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'mob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            'relation': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    AddRElativesComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.AddForm.get("roll").value)
        this.rollNo = this.route.snapshot.paramMap.get("rollNo");
        var name = this.AddForm.get("name").value;
        console.log(this.AddForm.get("name").value);
        var mob = this.AddForm.get("mob").value;
        console.log(this.AddForm.get("mob").value);
        var relation = this.AddForm.get("relation").value;
        console.log(this.AddForm.get("relation").value);
        var relative = new _relatives__WEBPACK_IMPORTED_MODULE_3__["Relatives"](0, this.rollNo, name, relation, mob);
        if (this.AddForm.valid) {
            this.relativeService.createRelative(relative).subscribe(function (relative) {
                _this.AddForm.reset();
                _this.onHomePage();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alert("Please fill all the fields");
        }
        // this.relativeService.updateRelative(this.relative).subscribe((student) => {
        //   this._router.navigate(['listRelative/' + this.rollNo])
        // }, (error) => {
        //   console.log(error);
        // });
    };
    AddRElativesComponent.prototype.onHomePage = function () {
        this.rollNo = this.route.snapshot.paramMap.get("rollNo");
        this._router.navigate(['listRelative/' + this.rollNo]);
    };
    AddRElativesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-relatives',
            template: __webpack_require__(/*! ./add-relatives.component.html */ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.html"),
            styles: [__webpack_require__(/*! ./add-relatives.component.css */ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_4__["RelativesService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddRElativesComponent);
    return AddRElativesComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.css":
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/list-relatives/list-relatives.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n\tbackground-color: DodgerBlue;\r\n\tborder: none;\r\n\tcolor: white;\r\n\tpadding: 12px 16px;\r\n\tfont-size: 16px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* Darker background on mouse-over */\r\n\r\n.btn:hover {\r\n\tbackground-color: RoyalBlue;\r\n}\r\n\r\n.form {\r\n\tdisplay: block;\r\n\twidth: 30%;\r\n\theight: calc(2.25rem + 2px);\r\n\tpadding: .375rem .75rem;\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5;\r\n\tcolor: #495057;\r\n\tbackground-color: #fff;\r\n\tbackground-clip: padding-box;\r\n\tborder: 1px solid #ced4da;\r\n\tborder-radius: .25rem;\r\n\ttransition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n}\r\n\r\n.bg {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-position: top center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.heading {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n\r\n.data {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n.tablehead {\r\n\ttext-align: center;\r\n\tbackground-color: #a62659;\r\n\tcolor: azure\r\n}\r\n\r\n.button {\r\n\tbackground-color: #28a745;\r\n\tborder: none;\r\n\tcolor: white;\r\n\tpadding: 9px 10px;\r\n\tfont-size: 12px;\r\n\tcursor: pointer;\r\n\tborder-radius: 12px\r\n}\r\n\r\n/* input[type=text], select, textarea{\r\n    width: 10%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  } */\r\n\r\n.col-fixed-240 {\r\n\twidth: 240px;\r\n\tbackground: red;\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\tz-index: 1;\r\n}\r\n\r\n.formSave {\r\n\tmargin-top: 80px\r\n}\r\n\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n\r\n.form-control {\r\n\twidth: 95%;\r\n\tpadding: 20px 0px;\r\n}\r\n\r\n.select-option {\r\n\twidth: 95%;\r\n}\r\n\r\n.move-right{\r\n\tmargin-left:105px;\r\n}\r\n\r\n.margin{\r\n\tmargin-top: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvcmVsYXRpdmVzL2xpc3QtcmVsYXRpdmVzL2xpc3QtcmVsYXRpdmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQjs7QUFFRCxxQ0FBcUM7O0FBQ3JDO0NBQ0MsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0Qix1RUFBdUU7Q0FDdkU7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGdDQUFnQztDQUNoQyx1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQjs7QUFFRDs7Ozs7O01BTU07O0FBQ047Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsV0FBVztDQUNYOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsOEJBQXFCO1NBQXJCLHFCQUFxQjtDQUNyQjs7QUFFRDtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9yZWxhdGl2ZXMvbGlzdC1yZWxhdGl2ZXMvbGlzdC1yZWxhdGl2ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxMnB4IDE2cHg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4uYnRuOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMzAlO1xyXG5cdGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuXHRwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRjb2xvcjogIzQ5NTA1NztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcblx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJnIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICNhNjI2NTk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5kYXRhIHtcclxuXHRmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGFibGVoZWFkIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2E2MjY1OTtcclxuXHRjb2xvcjogYXp1cmVcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDlweCAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweFxyXG59XHJcblxyXG4vKiBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICB9ICovXHJcbi5jb2wtZml4ZWQtMjQwIHtcclxuXHR3aWR0aDogMjQwcHg7XHJcblx0YmFja2dyb3VuZDogcmVkO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmZvcm1TYXZlIHtcclxuXHRtYXJnaW4tdG9wOiA4MHB4XHJcbn1cclxuXHJcbi56b29tb3V0OmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOClcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcblx0d2lkdGg6IDk1JTtcclxuXHRwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG5cclxuLnNlbGVjdC1vcHRpb24ge1xyXG5cdHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5tb3ZlLXJpZ2h0e1xyXG5cdG1hcmdpbi1sZWZ0OjEwNXB4O1xyXG59XHJcblxyXG4ubWFyZ2lue1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.html":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/list-relatives/list-relatives.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"utf-8\">\n<div class=\"bg\">\n\t<div class=\"heading\">\n\t\t<label class>Student Relatives Information</label>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-4 col-lg-2 col-sm-4 move-right\">\n\t\t<button (click)=\"homepage()\" class=\"zoomout button\" style=\"background: #ae285d\">Go Home</button>\n\t</div>\n</div>\n\n\n\n<div class=\"container\">\n\t<div class=\"alert-danger margin\">\n\t\t<div class=\"col-md-10 col-lg-10 col-sm-10\">\n\t\t\t<ui *ngFor=\"let student of students\">\n\t\t\t\t<li class=\"data\">Candidate name: {{student.name}}</li>\n\t\t\t\t<li class=\"data\">Roll No : {{student.rollno}}</li>\n\t\t\t</ui>\n\t\t</div>\n\t\t<button type=\"button\" class=\"zoomout button\" id=\"button\" (click)=\"getFileList()\"\n\t\t\tstyle=\"background: #ae285d; margin: 10px\">View\n\t\t\tFiles</button>\n\t</div>\n\n\t<br>\n\t<div class=\"card-content \">\n\t\t<div *ngIf=\"statusError\" class=\"alert alert-danger\" data-icon-bg-color=\"alert-red\">\n\t\t\t<strong>Please Fill All Fields!</strong>\n\t\t</div>\n\t</div>\n\t<div class=\"card-content \">\n\t\t\t<div *ngIf=\"statusCode === 201\" class=\"alert alert-success\" data-icon-bg-color=\"alert-red\">\n\t\t\t\t<strong>Relative Added Successfully</strong>\n\t\t\t</div>\n</div>\n\t\t\t<div class=\"formSave\">\n\t\t\t\t<form [formGroup]=\"AddRelativeForm\" (ngSubmit)=\"onSubmit()\">\n\n\t\t\t\t\t<table *ngIf=\"isDisabled\" id=\"insertDatatables\"\n\t\t\t\t\t\tclass=\"table table-striped table-condensed table-hover\" width=\"100%\">\n\t\t\t\t\t\t<thead>\n\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[0] }}</th>\n\t\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[1] }}</th>\n\t\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[2] }}</th>\n\t\t\t\t\t\t\t\t<th class=\"tablehead\"></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t\t<td>\n\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"name\" type=\"text\" class='form-control'>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf='AddRelativeForm.get(\"name\").touched && AddRelativeForm.get(\"name\").invalid'\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Name\" class=\" alert-danger\">Name is\n\t\t\t\t\t\t\t\t\t\t\trequired!</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName=\"relation\" class='select-option' required>\n\t\t\t\t\t\t\t\t\t\t\t<option class='option' *ngFor='let rel of relations' [(ngValue)]=\"rel.name\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{rel.name}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"mob\" id=\"mobNo\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf='AddRelativeForm.get(\"mob\").touched && AddRelativeForm.get(\"mob\").invalid'\n\t\t\t\t\t\t\t\t\t\t\tclass=\" alert-danger\">Mobile Number is Required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"zoomout button \" id=\"button\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"background: #ae285d; margin-left: 10px\" value=\"Add Relative\">Add\n\t\t\t\t\t\t\t\t\t\tRelative</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<table id=\"datatables\" *ngIf=\"isPresent\"\n\t\t\t\t\tclass=\"table table-striped table-responsive table-condensed table-hover\" width=\"100%\">\n\n\t\t\t\t\t<thead class=\"tablehead\">\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[0] }}</th>\n\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[1] }}</th>\n\t\t\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[2] }}</th>\n\t\t\t\t\t\t\t<th class=\"  tablehead\">{{ dataTable.headerRow[3] }}</th>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</thead>\n\n\t\t\t\t\t<!-- <tfoot>\n        <tr>\n          <th class=\"tablehead\">{{ dataTable.footerRow[0] }}</th>\n          <th class=\"tablehead\">{{ dataTable.footerRow[1] }} </th>\n          <th class=\"tablehead\"> {{ dataTable.footerRow[2] }}</th>\n          <th class=\"tablehead\">{{ dataTable.footerRow[3] }}</th>\n        </tr>\n\n  \n      </tfoot> -->\n\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let relative of dataTable.dataRows\">\n\n\t\t\t\t\t\t\t<td style=\"text-align: center\" width=\"10%\">{{relative.name}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"text-align: center\" width=\"10%\">{{relative.relation}}</td>\n\t\t\t\t\t\t\t<td style=\"text-align: center\" width=\"10%\">{{relative.mobNo}}</td>\n\n\n\t\t\t\t\t\t\t<td style=\"text-align: center\" width=\"10%\">\n\n\t\t\t\t\t\t\t\t<button class=\"zoomout btn \" (click)=\"deleteRelative(relative.id)\"\n\t\t\t\t\t\t\t\t\tstyle=\"background: transparent\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash \" style=\"color: red; font-size: 20px\"></i>\n\t\t\t\t\t\t\t\t</button></td>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\t\t\t</div>"

/***/ }),

/***/ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/main/webapp/app/relatives/list-relatives/list-relatives.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListRElativesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRElativesComponent", function() { return ListRElativesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../sharedservices/student-services.service */ "./src/main/webapp/app/sharedservices/student-services.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _relatives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../relatives */ "./src/main/webapp/app/relatives.ts");
/* harmony import */ var _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sharedService/relatives.service */ "./src/main/webapp/app/sharedService/relatives.service.ts");
/* harmony import */ var _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sharedservices/staffMemberService.service */ "./src/main/webapp/app/sharedservices/staffMemberService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListRElativesComponent = /** @class */ (function () {
    function ListRElativesComponent(formBuilder, route, relativeService, _router, relativeServices, studentService, roleguard) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.relativeService = relativeService;
        this._router = _router;
        this.relativeServices = relativeServices;
        this.studentService = studentService;
        this.roleguard = roleguard;
        this.searchText = '';
        this.statusError = false;
        this.isPresent = false;
        this.isDisabled = true;
        this.relations = [
            { name: 'Mother' },
            { name: 'Father' },
            { name: 'Sister' },
            { name: 'Brother' },
            { name: 'Son' },
            { name: 'Daughter' },
            { name: 'Spouse' },
            { name: 'CareTaker' },
            { name: 'Guardian' },
        ];
        this.isAdmin = false;
        this.dataTable = {
            headerRow: ['Name', 'Relation', 'Contact No', 'Action'],
            footerRow: ['Name', 'Relation', 'Contact No', 'Action'],
            dataRows: []
        };
    }
    ListRElativesComponent.prototype.ngOnInit = function () {
        this.validateError();
        document.getElementById("button").style.visibility = "visible";
        this.getRelativeById();
        this.getStudentData();
    };
    ListRElativesComponent.prototype.validateError = function () {
        this.AddRelativeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'mob': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]),
            'relation': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    };
    ListRElativesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.statusError = false;
        var self = this;
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        var name = (this.AddRelativeForm.get('name').value);
        var mob = this.AddRelativeForm.get('mob').value;
        var relative = (this.AddRelativeForm.get('relation').value);
        var relatives = new _relatives__WEBPACK_IMPORTED_MODULE_6__["Relatives"](0, mob, name, relative, this.roll);
        if (this.AddRelativeForm.valid) {
            this.isPresent = false;
            this.relativeService.createRelative(relatives).subscribe(function (data) {
                _this.AddRelativeForm.reset();
                _this.statusCode = 201;
                _this.setTimeOut();
                _this.getRelativeById();
                setTimeout(function () { _this.isPresent = true; }, 50);
            });
        }
        else {
            this.statusError = true;
            this.setTimeOut();
        }
    };
    ListRElativesComponent.prototype.getRelativeById = function () {
        var _this = this;
        var self = this;
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        this.relativeServices.getRelative(this.roll).subscribe(function (relatives) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable().destroy();
            _this.dataTable.dataRows = relatives;
            setTimeout(function () {
                self.initTable();
            }, 50);
            _this.relatives = relatives;
            _this.count = _this.relatives.length;
            if (_this.count == 5) {
                _this.isDisabled = false;
            }
            if (_this.count > 0) {
                _this.isPresent = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListRElativesComponent.prototype.initTable = function () {
        var table = jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable({
            "ordering": true,
            order: [[0, 'asc']],
            columnDefs: [{ orderable: false, "targets": -1 }],
            "paging": false,
            "info": false,
            "language": {
                "emptyTable": "No Records Available"
            },
        });
        var table = jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable();
        jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').on('click', '.remove', function (e) {
            var $tr = jquery__WEBPACK_IMPORTED_MODULE_4__(this).closest('tr');
            table.row($tr).remove();
            //('#datatables').DataTable().destroy();
            //$('#datatables').DataTable().draw();
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_4__('#datatables').DataTable().draw();
        });
    };
    ListRElativesComponent.prototype.initInsertTable = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('#insertDatatables').DataTable({
            "ordering": true,
            order: [[0, 'asc']],
            columnDefs: [{ orderable: false, "targets": -1 }],
            "paging": true,
            "info": false,
            "language": {
                "emptyTable": "No Records Available"
            },
        });
    };
    ListRElativesComponent.prototype.getStudentData = function () {
        var _this = this;
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        this.studentService.getStudentById(this.roll).subscribe(function (students) {
            _this.students = Array.of(students);
        }, function (error) {
        });
    };
    ListRElativesComponent.prototype.onHomePage = function () {
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        this._router.navigate(['listRelative/' + this.roll]);
    };
    ListRElativesComponent.prototype.deleteRelative = function (id) {
        var _this = this;
        this.relativeServices.deleteRelative(id).subscribe(function () {
            _this.getRelativeById();
            document.getElementById("button").style.display = "block";
            _this.isDisabled = false;
        }, function (error) {
            alert(error);
            console.log(error);
        });
    };
    ListRElativesComponent.prototype.setTimeOut = function () {
        window.setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".alert").fadeTo(2000, 500).slideUp(500, function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".alert").slideUp(500);
            });
        }, 4000);
    };
    ListRElativesComponent.prototype.newRelatives = function () {
        this._router.navigate(['/addRelative/' + this.roll]);
    };
    ListRElativesComponent.prototype.getFileList = function () {
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        this._router.navigate(['/listFiles/' + this.roll]);
    };
    ListRElativesComponent.prototype.homepage = function () {
        this._router.navigate(['/liststudent']);
    };
    ListRElativesComponent.prototype.adminCheck = function () {
        var _this = this;
        this.roleguard.roleCheck()
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            console.log(_this.statusCode);
            if (_this.statusCode === 200) {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        }, function (errorCode) {
        });
    };
    ListRElativesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list-relatives',
            template: __webpack_require__(/*! ./list-relatives.component.html */ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.html"),
            styles: [__webpack_require__(/*! ./list-relatives.component.css */ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_7__["RelativesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sharedService_relatives_service__WEBPACK_IMPORTED_MODULE_7__["RelativesService"], _sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_2__["StudentServicesService"], _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_8__["StaffMemberService"]])
    ], ListRElativesComponent);
    return ListRElativesComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/relatives/relatives.module.ts":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/relatives/relatives.module.ts ***!
  \***********************************************************/
/*! exports provided: RelativesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativesModule", function() { return RelativesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_relatives_add_relatives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-relatives/add-relatives.component */ "./src/main/webapp/app/relatives/add-relatives/add-relatives.component.ts");
/* harmony import */ var _list_relatives_list_relatives_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-relatives/list-relatives.component */ "./src/main/webapp/app/relatives/list-relatives/list-relatives.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RelativesModule = /** @class */ (function () {
    function RelativesModule() {
    }
    RelativesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_relatives_add_relatives_component__WEBPACK_IMPORTED_MODULE_2__["AddRElativesComponent"], _list_relatives_list_relatives_component__WEBPACK_IMPORTED_MODULE_3__["ListRElativesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_4__["NgxLoadingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], RelativesModule);
    return RelativesModule;
}());



/***/ }),

/***/ "./src/main/webapp/app/shared/auth-guard.ts":
/*!**************************************************!*\
  !*** ./src/main/webapp/app/shared/auth-guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
    }
    AuthGuard.prototype.canActivateChild = function () {
        var token = localStorage.getItem('jwt');
        console.log(" IN AUTH GUARD PROCESS" + token);
        if (localStorage.getItem('jwt') !== null && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivate = function () {
        var token = localStorage.getItem('jwt');
        console.log("-----------------" + token);
        if (localStorage.getItem('jwt') !== null && !this.jwtHelper.isTokenExpired(token)) {
            this.router.navigate(['/listStudent']);
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/main/webapp/app/sharedService/relatives.service.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/sharedService/relatives.service.ts ***!
  \****************************************************************/
/*! exports provided: RelativesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativesService", function() { return RelativesService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelativesService = /** @class */ (function () {
    function RelativesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/rest';
    }
    //Get All the Relatives without Id or roll No
    RelativesService.prototype.getAllRelatives = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.get(this.baseUrl + '/getAllStudentRelatives', options)
            .map(this.extractData);
    };
    //Get Relatives using roll no
    RelativesService.prototype.getRelative = function (rollNo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.get(this.baseUrl + '/getStudentRelativesById/' + rollNo, options)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    // Delete relative using ID
    RelativesService.prototype.deleteRelative = function (id) {
        return this.http.delete(this.baseUrl + '/removeStudentRelativesById', { params: { id: id } })
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    //Insert Relative data
    RelativesService.prototype.createRelative = function (relative) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + '/createStudentRelatives', relative, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    //Update Relatives data
    RelativesService.prototype.updateRelative = function (relative) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.put(this.baseUrl + '/updateRelative', relative, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    RelativesService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || "Server Error");
    };
    RelativesService.prototype.extractData = function (res) {
        console.log(JSON.stringify(res));
        var body = res.json();
        return body || [];
    };
    RelativesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], RelativesService);
    return RelativesService;
}());



/***/ }),

/***/ "./src/main/webapp/app/sharedservices/modal.service.ts":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/sharedservices/modal.service.ts ***!
  \*************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/main/webapp/app/sharedservices/staffMemberService.service.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/sharedservices/staffMemberService.service.ts ***!
  \**************************************************************************/
/*! exports provided: StaffMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMemberService", function() { return StaffMemberService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffMemberService = /** @class */ (function () {
    function StaffMemberService(http, httpc) {
        this.http = http;
        this.httpc = httpc;
        this.baseUrl = 'http://localhost:8080/api/rest';
    }
    StaffMemberService.prototype.createStaff = function (staff) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + '/createStaff', staff, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StaffMemberService.prototype.createStaffRole = function (staffRole) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + '/createStaffRoles', staffRole, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StaffMemberService.prototype.roleCheck = function () {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt') });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.get(this.baseUrl + '/isAdmin', options)
            .map(function (success) { return success.status; })
            .catch(this.errorHandler);
    };
    StaffMemberService.prototype.errorHandler = function (error) {
        console.log(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(error);
    };
    StaffMemberService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    StaffMemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StaffMemberService);
    return StaffMemberService;
}());



/***/ }),

/***/ "./src/main/webapp/app/sharedservices/student-services.service.ts":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/sharedservices/student-services.service.ts ***!
  \************************************************************************/
/*! exports provided: StudentServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServicesService", function() { return StudentServicesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentServicesService = /** @class */ (function () {
    // private headers = new Headers({
    //   'Content-Type': 'application/json' , "x-auth-token": localStorage.getItem('jwt') });
    // private options = new RequestOptions({ headers: this.headers });
    function StudentServicesService(http, httpc) {
        this.http = http;
        this.httpc = httpc;
        this.baseUrl = 'http://localhost:8080/api/rest';
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelper"]();
    }
    StudentServicesService.prototype.getAllStudent = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.get(this.baseUrl + '/getAllStudentData', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    };
    StudentServicesService.prototype.getStudentById = function (rollNo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.get(this.baseUrl + '/getStudentDataById/' + rollNo, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StudentServicesService.prototype.deleteStudent = function (rollNo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.baseUrl + '/removeStudentDataById/' + rollNo, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StudentServicesService.prototype.createStudent = function (student) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        console.log(student.name);
        return this.http.post(this.baseUrl + '/createStudentData', student, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StudentServicesService.prototype.updateStudent = function (student) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.put(this.baseUrl + '/updateStudent', student, options)
            .map(this.extractData)
            .catch(this.errorHandler);
    };
    StudentServicesService.prototype.uploadRecord = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'multipart/form-data', "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', 'http://localhost:8080/api/rest/upload', formdata);
        return this.httpc.request(req);
        // this.http.post('http://localhost:8080/api/rest/upload',formdata,options)
    };
    StudentServicesService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(error);
    };
    StudentServicesService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    StudentServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentServicesService);
    return StudentServicesService;
}());



/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember.module.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember.module.ts ***!
  \***************************************************************/
/*! exports provided: StaffmemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffmemberModule", function() { return StaffmemberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffmemberModule = /** @class */ (function () {
    function StaffmemberModule() {
    }
    StaffmemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], StaffmemberModule);
    return StaffmemberModule;
}());



/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember/StaffRole.ts":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember/StaffRole.ts ***!
  \******************************************************************/
/*! exports provided: StaffRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRole", function() { return StaffRole; });
var StaffRole = /** @class */ (function () {
    function StaffRole(staffRoleId, staffId, authority, displayName) {
        this.staffRoleId = staffRoleId;
        this.staffId = staffId;
        this.authority = authority;
        this.displayName = displayName;
    }
    StaffRole.prototype.splice = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    StaffRole.prototype.indexOf = function (student) {
        throw new Error("Method not implemented.");
    };
    return StaffRole;
}());



/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember/staffMember.ts":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember/staffMember.ts ***!
  \********************************************************************/
/*! exports provided: StaffMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMember", function() { return StaffMember; });
var StaffMember = /** @class */ (function () {
    function StaffMember(staffId, staffFname, staffLname, loginKey, loginid, activeFlag) {
        this.staffId = staffId;
        this.staffFname = staffFname;
        this.staffLname = staffLname;
        this.loginKey = loginKey;
        this.loginid = loginid;
        this.activeFlag = activeFlag;
    }
    StaffMember.prototype.splice = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    StaffMember.prototype.indexOf = function (student) {
        throw new Error("Method not implemented.");
    };
    return StaffMember;
}());



/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.css":
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember/staffmember.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url(\"src/assets/final.jpg\") no-repeat center;\r\n    background-position: top center;\r\n    background-size: cover;\r\n\r\n\r\n} */\r\n.example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 100%;\r\n}\r\nform {\r\n\tposition: absolute;\r\n\tleft: 25%;\r\n\twidth: 100%;\r\n}\r\ninput[type=date], textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\ninput[type=text], select, textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\n/* Style the label to display next to the inputs */\r\nlabel {\r\n\tpadding: 12px 12px 12px 0;\r\n\tdisplay: inline-block;\r\n}\r\n/* Style the submit button */\r\ninput[type=submit] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 12px 40px;\r\n\tborder: none;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n}\r\n/* Style the container */\r\n.container {\r\n\tborder-radius: 5px;\r\n\tpadding: 20px;\r\n}\r\n/* Floating column for labels: 25% width */\r\n.col-25 {\r\n\tfloat: left;\r\n\twidth: 9%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Floating column for inputs: 75% width */\r\n.col-75 {\r\n\tfloat: left;\r\n\twidth: 75%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 120px) {\r\n\t.col-25, .col-75, input[type=submit] {\r\n\t\twidth: 50%;\r\n\t\tmargin-top: 0;\r\n\t}\r\n}\r\n.heading {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n.reset {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 14px 60px;\r\n\tborder: none;\r\n\tborder-radius: 24px;\r\n\tcursor: pointer;\r\n\tmargin: 20px;\r\n\tmargin-right: 10px;\r\n}\r\ninput[type=reset] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 12px 40px;\r\n\tborder: none;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\tmargin: 20px;\r\n\tmargin-right: 20px;\r\n}\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvc3RhZmZtZW1iZXIvc3RhZmZtZW1iZXIvc3RhZmZtZW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFRSTtBQUNKO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1o7QUFFRDtDQUNDLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixZQUFZO0NBQ1o7QUFFRDtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQjtBQUVELG1EQUFtRDtBQUNuRDtDQUNDLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEI7QUFFRCw2QkFBNkI7QUFDN0I7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7QUFDRCx5QkFBeUI7QUFDekI7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkO0FBRUQsMkNBQTJDO0FBQzNDO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEI7QUFFRCwyQ0FBMkM7QUFDM0M7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQjtBQUVELG9DQUFvQztBQUNwQztDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtDQUNaO0FBRUQsZ0pBQWdKO0FBQ2hKO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsY0FBYztFQUNkO0NBQ0Q7QUFFRDtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsOEJBQXFCO1NBQXJCLHFCQUFxQjtDQUNyQiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3N0YWZmbWVtYmVyL3N0YWZmbWVtYmVyL3N0YWZmbWVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZmluYWwuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcblxyXG59ICovXHJcbi5leGFtcGxlLWZvcm0ge1xyXG5cdG1pbi13aWR0aDogMTUwcHg7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyNSU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZGF0ZV0sIHRleHRhcmVhIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgbGFiZWwgdG8gZGlzcGxheSBuZXh0IHRvIHRoZSBpbnB1dHMgKi9cclxubGFiZWwge1xyXG5cdHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEycHggNDBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuLyogU3R5bGUgdGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xyXG4uY29sLTI1IHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogOSU7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4vKiBGbG9hdGluZyBjb2x1bW4gZm9yIGlucHV0czogNzUlIHdpZHRoICovXHJcbi5jb2wtNzUge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA3NSU7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMHB4KSB7XHJcblx0LmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdH1cclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGNvbG9yOiAjYTYyNjU5O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ucmVzZXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDE0cHggNjBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yZXNldF0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEycHggNDBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnpvb21vdXQ6aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC44KVxyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.html":
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember/staffmember.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">\n  <label>Add Staff Information</label>\n</div>\n\n<div class=\"container\">\n\n  <form [formGroup]=\"AddStaffForm\" (ngSubmit)=\"processForm()\">\n   \n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label> Name : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"name\" type=\"text\" name=\"name\" class=\"form-control\">\n        <div *ngIf='AddStaffForm.get(\"name\").touched && AddStaffForm.get(\"name\").invalid' class=\" alert-danger\">\n          Name is required!\n\n        </div>\n      </div>\n\n    \n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label> Last Name : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"lname\" type=\"text\" name=\"lname\" class=\"form-control\">\n        <div *ngIf='AddStaffForm.get(\"lname\").touched && AddStaffForm.get(\"lname\").invalid' class=\" alert-danger\">\n         Last Name is required!\n\n        </div>\n      </div>\n\n    \n    </div>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label>  Username : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"username\" type=\"text\" name=\"username\" class=\"form-control\">\n        <div *ngIf='AddStaffForm.get(\"username\").touched && AddStaffForm.get(\"username\").invalid' class=\" alert-danger\">\n          username is required!\n\n        </div>\n      </div>\n\n    \n    </div>\n \n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label>Password : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"password\" type=\"password\" name=\"password\" class=\"form-control\" >\n        <div *ngIf='AddStaffForm.get(\"password\").touched && AddStaffForm.get(\"password\").invalid' class=\" alert-danger\">\n          password is required\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n\t\t\t<div class=\"col-25\">\n\t\t\t\t<label>Role : </label>\n\t\t\t</div>\n\t\t\t<div class=\"col-75\">\n\t\t\t\t<select formControlName=\"roles\" class='select-option' required>\n\t\t\t\t\t<option class='option' *ngFor='let roles of staffRoles'\n\t\t\t\t\t\t[(ngValue)]=\"roles.role\">{{roles.role}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\n    <div class=\"col-25\">\n      <!-- <ng-template #customLoadingTemplate> -->\n      <input type=\"submit\" class=\"zoomout\" value=\"Save\"  style=\" background:#ae285d \"> \n    \n      <!-- </ng-template> -->\n      <!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\" [template]=\"customLoadingTemplate\"></ngx-loading> -->\n    </div>\n    <input type=\"reset\" value=\"Reset\"  class=\"zoomout\" style=\"background:#ae285d  ; margin: 20px ; margin-left:  50px ; margin-top :0px ; \" >\n    <input type=\"submit\" value=\"Cancel\" class=\"zoomout\" (click)=\"onHomePage()\" style=\"background:#ae285d  ; margin: 15px ; margin-right: 20px ; margin-top :10px\" > \n  </form>\n   \n  \n\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.ts":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/staffmember/staffmember/staffmember.component.ts ***!
  \******************************************************************************/
/*! exports provided: StaffmemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffmemberComponent", function() { return StaffmemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _staffMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staffMember */ "./src/main/webapp/app/staffmember/staffmember/staffMember.ts");
/* harmony import */ var _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sharedservices/staffMemberService.service */ "./src/main/webapp/app/sharedservices/staffMemberService.service.ts");
/* harmony import */ var _StaffRole__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaffRole */ "./src/main/webapp/app/staffmember/staffmember/StaffRole.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffmemberComponent = /** @class */ (function () {
    function StaffmemberComponent(staffService, _router) {
        this.staffService = staffService;
        this._router = _router;
        this.activeflag = 'Y';
        this.minDate = new Date(1900, 0, 1);
        this.maxDate = new Date();
        this.minEndDate = new Date();
        this.staffRoles = [
            { role: 'ROLE_ADMIN' },
            { role: 'ROLE_USER' },
        ];
        this.options = {
            displayFormat: 'DD-MM-YYYY',
            minYear: 1970,
            maxYear: 2030,
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            maxDate: new Date(Date.now()),
            barTitleIfEmpty: 'Click to select date',
            placeholder: 'Click to select date',
        };
    }
    StaffmemberComponent.prototype.ngOnInit = function () {
        this.validateError();
    };
    StaffmemberComponent.prototype.validateError = function () {
        this.AddStaffForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'lname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'roles': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    StaffmemberComponent.prototype.formReset = function () {
        this.AddStaffForm.reset();
    };
    StaffmemberComponent.prototype.processForm = function () {
        var _this = this;
        var bcrypt = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
        var name = this.AddStaffForm.get('name').value;
        var lname = this.AddStaffForm.get('lname').value;
        var username = this.AddStaffForm.get('username').value;
        var password = this.AddStaffForm.get('password').value;
        var hashPassword = bcrypt.hashSync(password, 10);
        var role = this.AddStaffForm.get('roles').value;
        var staff = new _staffMember__WEBPACK_IMPORTED_MODULE_3__["StaffMember"](0, name, lname, hashPassword.toString(), username, 'Y');
        this.staffService.createStaff(staff).switchMap(function (staff) {
            _this.staffId = staff.staffId;
            var staffRole = new _StaffRole__WEBPACK_IMPORTED_MODULE_5__["StaffRole"](0, _this.staffId, role, name);
            return _this.staffService.createStaffRole(staffRole);
        }).subscribe(function (successCode) {
        }, function (errorCode) {
        });
    };
    StaffmemberComponent.prototype.onHomePage = function () {
        this._router.navigate(['/liststudent']);
    };
    StaffmemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staffmember',
            template: __webpack_require__(/*! ./staffmember.component.html */ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.html"),
            styles: [__webpack_require__(/*! ./staffmember.component.css */ "./src/main/webapp/app/staffmember/staffmember/staffmember.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_4__["StaffMemberService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StaffmemberComponent);
    return StaffmemberComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/student.ts":
/*!****************************************!*\
  !*** ./src/main/webapp/app/student.ts ***!
  \****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(rollno, name, std, dob, address, activeflag) {
        this.rollno = rollno;
        this.name = name;
        this.std = std;
        this.dob = dob;
        this.address = address;
        this.activeflag = activeflag;
    }
    Student.prototype.splice = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    Student.prototype.indexOf = function (student) {
        throw new Error("Method not implemented.");
    };
    return Student;
}());



/***/ }),

/***/ "./src/main/webapp/app/student/add-student/add-student.component.css":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/student/add-student/add-student.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .bg{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url(\"src/assets/final.jpg\") no-repeat center;\r\n    background-position: top center;\r\n    background-size: cover;\r\n\r\n\r\n} */\r\n.example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 100%;\r\n}\r\nform {\r\n\tposition: absolute;\r\n\tleft: 25%;\r\n\twidth: 100%;\r\n}\r\ninput[type=date], textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\ninput[type=text], select, textarea {\r\n\twidth: 50%;\r\n\tpadding: 12px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\n/* Style the label to display next to the inputs */\r\nlabel {\r\n\tpadding: 12px 12px 12px 0;\r\n\tdisplay: inline-block;\r\n}\r\n/* Style the submit button */\r\ninput[type=submit] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 12px 40px;\r\n\tborder: none;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n}\r\n/* Style the container */\r\n.container {\r\n\tborder-radius: 5px;\r\n\tpadding: 20px;\r\n}\r\n/* Floating column for labels: 25% width */\r\n.col-25 {\r\n\tfloat: left;\r\n\twidth: 9%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Floating column for inputs: 75% width */\r\n.col-75 {\r\n\tfloat: left;\r\n\twidth: 75%;\r\n\tmargin-top: 6px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 120px) {\r\n\t.col-25, .col-75, input[type=submit] {\r\n\t\twidth: 50%;\r\n\t\tmargin-top: 0;\r\n\t}\r\n}\r\n.heading {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n.reset {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 14px 60px;\r\n\tborder: none;\r\n\tborder-radius: 24px;\r\n\tcursor: pointer;\r\n\tmargin: 20px;\r\n\tmargin-right: 10px;\r\n}\r\ninput[type=reset] {\r\n\tbackground-color: #4CAF50;\r\n\tcolor: white;\r\n\tpadding: 12px 40px;\r\n\tborder: none;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\tmargin: 20px;\r\n\tmargin-right: 20px;\r\n}\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvc3R1ZGVudC9hZGQtc3R1ZGVudC9hZGQtc3R1ZGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQVFJO0FBQ0o7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsWUFBWTtDQUNaO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7Q0FDWjtBQUVEO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCO0FBRUQsbURBQW1EO0FBQ25EO0NBQ0MsMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QjtBQUVELDZCQUE2QjtBQUM3QjtDQUNDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjtBQUNELHlCQUF5QjtBQUN6QjtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Q7QUFFRCwyQ0FBMkM7QUFDM0M7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGdCQUFnQjtDQUNoQjtBQUVELDJDQUEyQztBQUMzQztDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCO0FBRUQsb0NBQW9DO0FBQ3BDO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0NBQ1o7QUFFRCxnSkFBZ0o7QUFDaEo7Q0FDQztFQUNDLFdBQVc7RUFDWCxjQUFjO0VBQ2Q7Q0FDRDtBQUVEO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyw4QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvc3R1ZGVudC9hZGQtc3R1ZGVudC9hZGQtc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ZpbmFsLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG5cclxufSAqL1xyXG4uZXhhbXBsZS1mb3JtIHtcclxuXHRtaW4td2lkdGg6IDE1MHB4O1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjUlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWRhdGVdLCB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAxMnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAxMnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXHJcbmxhYmVsIHtcclxuXHRwYWRkaW5nOiAxMnB4IDEycHggMTJweCAwO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxMnB4IDQwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcbi8qIFN0eWxlIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEZsb2F0aW5nIGNvbHVtbiBmb3IgbGFiZWxzOiAyNSUgd2lkdGggKi9cclxuLmNvbC0yNSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDklO1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xyXG4uY29sLTc1IHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNzUlO1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjBweCkge1xyXG5cdC5jb2wtMjUsIC5jb2wtNzUsIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0bWFyZ2luLXRvcDogMDtcclxuXHR9XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRjb2xvcjogI2E2MjY1OTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnJlc2V0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxNHB4IDYwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMjBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmVzZXRdIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxMnB4IDQwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMjBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi56b29tb3V0OmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOClcclxufSJdfQ== */"

/***/ }),

/***/ "./src/main/webapp/app/student/add-student/add-student.component.html":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/student/add-student/add-student.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">\n  <label>Student Information</label>\n</div>\n\n<div class=\"container\">\n\n  <form [formGroup]=\"AddForm\" (ngSubmit)=\"processForm()\">\n    <ngx-loading [show]=\"loading\"></ngx-loading>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label> Name : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"name\" type=\"text\" name=\"name\" class=\"form-control\">\n        <div *ngIf='AddForm.get(\"name\").touched && AddForm.get(\"name\").invalid' class=\" alert-danger\">\n          Name is required!\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label>Date of Birth : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"dob\" type=\"date\" name=\"dob\" [options]=\"options\">\n        <div *ngIf='AddForm.get(\"dob\").touched && AddForm.get(\"dob\").invalid' class=\"alert-danger\">\n          Date of birth is required\n\n        </div>\n      </div>\n    </div>\n \n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label>Class : </label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"std\" type=\"text\" name=\"std\" class=\"form-control\" >\n        <div *ngIf='AddForm.get(\"std\").touched && AddForm.get(\"std\").invalid' class=\" alert-danger\">\n          Class is require</div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label>Address : </label>\n      </div>\n      <div class=\"col-75\">\n        <textarea formControlName=\"address\" type=\"textarea\" name=\"address\" class=\"form-control\"></textarea>\n      </div>\n    </div>\n    <!-- <div>\n            <span>Select</span>\n            <select>\n                <option *ngFor =\"let data of Data\">{{data}}</option>\n            </select>\n      </div> -->\n\n    <div class=\"col-25\">\n      <!-- <ng-template #customLoadingTemplate> -->\n      <input type=\"submit\" class=\"zoomout\" value=\"Save\"  style=\" background:#ae285d \"> \n    \n      <!-- </ng-template> -->\n      <!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\" [template]=\"customLoadingTemplate\"></ngx-loading> -->\n    </div>\n    <input type=\"reset\" value=\"Reset\"  class=\"zoomout\" style=\"background:#ae285d  ; margin: 20px ; margin-left:  50px ; margin-top :0px ; \" >\n    <input type=\"submit\" value=\"Cancel\" class=\"zoomout\" (click)=\"onHomePage()\" style=\"background:#ae285d  ; margin: 15px ; margin-right: 20px ; margin-top :10px\" > \n  </form>\n   \n  \n\n</div>"

/***/ }),

/***/ "./src/main/webapp/app/student/add-student/add-student.component.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/student/add-student/add-student.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var _sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../sharedservices/student-services.service */ "./src/main/webapp/app/sharedservices/student-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student */ "./src/main/webapp/app/student.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddStudentComponent = /** @class */ (function () {
    function AddStudentComponent(studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.activeflag = 'Y';
        this.minDate = new Date(1900, 0, 1);
        this.maxDate = new Date();
        this.minEndDate = new Date();
        this.options = {
            displayFormat: 'DD-MM-YYYY',
            minYear: 1970,
            maxYear: 2030,
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            maxDate: new Date(Date.now()),
            barTitleIfEmpty: 'Click to select date',
            placeholder: 'Click to select date',
        };
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        this.validateError();
    };
    AddStudentComponent.prototype.validateError = function () {
        this.AddForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'std': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]),
        });
    };
    AddStudentComponent.prototype.formReset = function () {
        this.AddForm.reset();
    };
    AddStudentComponent.prototype.processForm = function () {
        var _this = this;
        var name = this.AddForm.get('name').value;
        console.log(this.AddForm.get('name').value);
        var dob = this.AddForm.get('dob').value;
        console.log(dob);
        var std = this.AddForm.get('std').value;
        console.log(this.AddForm.get('std').value);
        var addr = this.AddForm.get('address').value;
        console.log(this.AddForm.get('address').value);
        var student = new _student__WEBPACK_IMPORTED_MODULE_2__["Student"](0, name, std, dob, addr, 'Y');
        this.studentService.createStudent(student).subscribe(function (student) {
            console.log(student);
            alert("Student Added Successfully");
            _this._router.navigate(['/liststudent']);
        }, function (error) {
            console.log(error);
        });
        this.AddForm.reset();
        //       let student=new Student(0,name,dob,std,addr,'Y');
        //       this.studentService.updateStudent(student).subscribe((student) => {
        //         alert("Student Updated Successfully")
        //      this._router.navigate(['/liststudent']);
        //  }, (error) => {
        //         console.log(error);
        //       });
        // this.AddForm.reset()
    };
    AddStudentComponent.prototype.onHomePage = function () {
        this._router.navigate(['/liststudent']);
    };
    AddStudentComponent.prototype.onSubmit = function (file) {
        this.studentService.uploadRecord(file).subscribe(function (data) {
            console.log(data);
        });
    };
    AddStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-student',
            template: __webpack_require__(/*! ./add-student.component.html */ "./src/main/webapp/app/student/add-student/add-student.component.html"),
            styles: [__webpack_require__(/*! ./add-student.component.css */ "./src/main/webapp/app/student/add-student/add-student.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_0__["StudentServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddStudentComponent);
    return AddStudentComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/student/liststudent/liststudent.component.css":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/student/liststudent/liststudent.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n\tbackground-color: DodgerBlue;\r\n\tborder: none;\r\n\tcolor: white;\r\n\tpadding: 12px 16px;\r\n\tfont-size: 16px;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* Darker background on mouse-over */\r\n\r\n.btn:hover {\r\n\tbackground-color: RoyalBlue;\r\n}\r\n\r\n/* .form {\r\n    display: block;\r\n    width: 30%;\r\n    height: calc(2.25rem + 2px);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n} */\r\n\r\n.bg {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-position: top center;\r\n\tbackground-size: cover;\r\n}\r\n\r\ntd {\r\n\ttext-align: center;\r\n}\r\n\r\n.tablehead {\r\n\ttext-align: center;\r\n\tbackground-color: #ae285d;\r\n\tcolor: azure;\r\n}\r\n\r\n.button {\r\n\tbackground-color: #28a745;\r\n\tborder: none;\r\n\tcolor: white;\r\n\tpadding: 9px 10px;\r\n\tfont-size: 12px;\r\n\tcursor: pointer;\r\n\tborder-radius: 12px\r\n}\r\n\r\n.butn {\r\n\tborder-color: none;\r\n\tborder: none;\r\n\tbackground-color: white;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 14px;\r\n\tcolor: black;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.heading {\r\n\tpadding: 10px;\r\n\tfont-size: 30px;\r\n\tcolor: #a62659;\r\n\ttext-align: center\r\n}\r\n\r\ninput[type=text], select, textarea {\r\n\twidth: 12%;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\r\n\tresize: vertical;\r\n}\r\n\r\n.tooltip {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tborder-bottom: 1px dotted black;\r\n\t/* If you want dots under the hoverable text */\r\n}\r\n\r\n/* Tooltip text */\r\n\r\n.tooltip .tooltiptext {\r\n\tvisibility: hidden;\r\n\twidth: 120px;\r\n\tbackground-color: black;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tpadding: 5px 0;\r\n\tborder-radius: 6px;\r\n\t/* Position the tooltip text - see examples below! */\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover .tooltiptext {\r\n\tvisibility: visible;\r\n}\r\n\r\n.zoomout:hover {\r\n\t-webkit-transform: scale(0.8);\r\n\t        transform: scale(0.8)\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvc3R1ZGVudC9saXN0c3R1ZGVudC9saXN0c3R1ZGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEI7O0FBRUQscUNBQXFDOztBQUNyQztDQUNDLDRCQUE0QjtDQUM1Qjs7QUFFRDs7Ozs7Ozs7Ozs7OztJQWFJOztBQUNKO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQ0FBZ0M7Q0FDaEMsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLCtDQUErQztDQUMvQzs7QUFFRCxrQkFBa0I7O0FBQ2xCO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLHFEQUFxRDtDQUNyRCxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYOztBQUVELHFFQUFxRTs7QUFDckU7Q0FDQyxvQkFBb0I7Q0FDcEI7O0FBRUQ7Q0FDQyw4QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvc3R1ZGVudC9saXN0c3R1ZGVudC9saXN0c3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEycHggMTZweDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBtb3VzZS1vdmVyICovXHJcbi5idG46aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IFJveWFsQmx1ZTtcclxufVxyXG5cclxuLyogLmZvcm0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn0gKi9cclxuLmJnIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG50ZCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGVoZWFkIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2FlMjg1ZDtcclxuXHRjb2xvcjogYXp1cmU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiA5cHggMTBweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEycHhcclxufVxyXG5cclxuLmJ1dG4ge1xyXG5cdGJvcmRlci1jb2xvcjogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICNhNjI2NTk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG5cdHdpZHRoOiAxMiU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRyZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG5cdC8qIElmIHlvdSB3YW50IGRvdHMgdW5kZXIgdGhlIGhvdmVyYWJsZSB0ZXh0ICovXHJcbn1cclxuXHJcbi8qIFRvb2x0aXAgdGV4dCAqL1xyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR3aWR0aDogMTIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDVweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHQvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSB0b29sdGlwIHRleHQgd2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgdG9vbHRpcCBjb250YWluZXIgKi9cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uem9vbW91dDpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/main/webapp/app/student/liststudent/liststudent.component.html":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/student/liststudent/liststudent.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"utf-8\">\n<div class=\"heading\">\n\t<label>Student Relation Management</label>\n</div>\n<div class=\"container\" style=\"padding: 0.75rem\">\n\t<div class=\"col-md-11\">\n\t\t<button (click)=\"logout()\" class=\"btn btn-success pull-right zoomout button\"\n\t\t\tstyle=\"background: #ae285d\">Logout</button>\n\n\t</div>\n\n\t<div  *ngIf=\"isAdmin\" class=\"row\">\n\t\t<div class=\"col-md-6 col-lg-6 col-sm-6\">\n\t\t\t<button class=\"zoomout button\" (click)=\"newUser()\" style=\"background: #ae285d\">Add Student</button>\n\t\t\t\n\t\t\t<button class=\"zoomout button\" (click)=\"uploadMarks()\" style=\"background: #ae285d; margin: 10px\">Upload Marks</button>\n\n\t\t\t<button class=\"zoomout button\" (click)=\"addStaff()\" style=\"background: #ae285d; margin: 10px\">Add Staff</button>\n\t\t</div>\n\t\t</div>\n\n\n</div>\n\n<div class=\"bg\">\n\t<div class=\"container\" style=\"padding: 0.75rem\">\n\t\t<div class=\"col-md-11\">\n\t\t\t<div class=\"form-group\"></div>\n\t\t</div>\n\t\t<table id=\"datatables\" class=\"table table-striped table-condensed table-hover\" width=\"100%\">\n\t\t\t<ngx-loading [show]=\"loading\"></ngx-loading>\n\t\t\t<thead class=\"tablehead\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[0] }}</th>\n\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[1] }}</th>\n\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[2] }}</th>\n\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[4] }}</th>\n\t\t\t\t\t<th class=\"tablehead\">{{ dataTable.headerRow[5] }}</th>\n\t\t\t\t\t<th class=\"disabled-sorting tablehead \">{{\n\t\t\t\t\t\tdataTable.headerRow[6] }}</th>\n\t\t\t\t</tr>\n\n\t\t\t</thead>\n\n\t\t\t<!-- <tfoot>\n        <tr>\n        <th class=\"tablehead\">{{ dataTable.footerRow[0] }}</th>\n        <th class=\"tablehead\">{{ dataTable.footerRow[1] }}</th>\n        <th class=\"tablehead\">{{ dataTable.footerRow[2] }}</th>\n        <th class=\"tablehead\">{{ dataTable.footerRow[3] }} </th>\n        <th class=\"tablehead\"> {{ dataTable.footerRow[4] }}</th>\n        <th class=\"tablehead\">{{ dataTable.footerRow[5] }}</th>\n      </tr>\n       \n      </tfoot> -->\n\n\t\t\t<tbody>\n\n\t\t\t\t<tr *ngFor=\"let student of dataTable.dataRows\">\n\n\t\t\t\t\t<td style=\"color-adjust: 10\" width=\"10%\">{{student.rollno}}</td>\n\t\t\t\t\t<td><a class=\"butn\" type=\"submit\" (click)=relativeStudent(student.rollno)><span tooltip\n\t\t\t\t\t\t\t\tcontent=\"You can have any html or plain text content here\">{{student.name}}\n\t\t\t\t\t\t\t</span></a></td>\n\t\t\t\t\t<td width=\"10%\">{{student.std}}</td>\n\t\t\t\t\t<td>{{student.address}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button class=\"zoomout btn\" (click)=\"uploadDoc(student)\"\n\t\t\t\t\t\t\tstyle=\"background: transparent; margin-right: 20px;\">\n\t\t\t\t\t\t\t<i class=\" fa fa-upload \" style=\"color: #28a745; font-size: 20px\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style=\"text-align: center\" width=\"15%\">\n\t\t\t\t\t\t<!-- <button class=\"zoomout btn\" (click)=\"updateUser(student)\"\n\t\t\t\t\t\t\tstyle=\"background: transparent; margin-right: 20px;\">\n\t\t\t\t\t\t\t<i class=\" fa fa-pencil \" style=\"color: #28a745; font-size: 20px\"></i>\n\t\t\t\t\t\t</button> -->\n\n\t\t\t\t\t\t<button class=\"zoomout btn \" (click)=\"deleteUser(student.rollno)\"\n\t\t\t\t\t\t\tstyle=\"background: transparent\">\n\t\t\t\t\t\t\t<i class=\" fa fa-trash \" style=\"color: red; font-size: 20px\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\n\t\t</table>\n\n\n\n\n\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/main/webapp/app/student/liststudent/liststudent.component.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/student/liststudent/liststudent.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListstudentComponent", function() { return ListstudentComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../sharedservices/student-services.service */ "./src/main/webapp/app/sharedservices/student-services.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-student/add-student.component */ "./src/main/webapp/app/student/add-student/add-student.component.ts");
/* harmony import */ var _upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../upload-marks/upload-marks/upload-marks.component */ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.ts");
/* harmony import */ var _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sharedservices/staffMemberService.service */ "./src/main/webapp/app/sharedservices/staffMemberService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListstudentComponent = /** @class */ (function () {
    function ListstudentComponent(studServices, _router, dialog, roleguard) {
        this.studServices = studServices;
        this._router = _router;
        this.dialog = dialog;
        this.roleguard = roleguard;
        this.isAdmin = false;
        this.showUploadMarksModal = false;
        this.dataTable = {
            headerRow: ['Roll No', 'Name', 'Class', 'Date of Birth ', 'Address', 'Upload', 'Action'],
            footerRow: ['Roll No', 'Name', 'Class', 'Date of Birth ', 'Address', 'Action'],
            dataRows: []
        };
    }
    ListstudentComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getAllStudentDetails();
        this.adminCheck();
    };
    ListstudentComponent.prototype.getAllStudentDetails = function () {
        var _this = this;
        var self = this;
        this.studServices.getAllStudent().subscribe(function (students) {
            _this.loading = false;
            jquery__WEBPACK_IMPORTED_MODULE_3__('#datatables').DataTable().destroy();
            _this.dataTable.dataRows = students;
            setTimeout(function () {
                self.initTable();
            }, 50);
        }, function (error) {
            console.log(error);
        });
    };
    ListstudentComponent.prototype.initTable = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#datatables').DataTable({
            "ordering": true,
            order: [[0, 'asc']],
            columnDefs: [
                { orderable: false, targets: [-1] }
            ],
            "language": {
                "emptyTable": "No Records Available"
            },
        });
        var table = jquery__WEBPACK_IMPORTED_MODULE_3__('#datatables').DataTable();
        jquery__WEBPACK_IMPORTED_MODULE_3__('#datatables').on('click', '.remove', function (e) {
            var $ABtr = jquery__WEBPACK_IMPORTED_MODULE_3__(this).closest('tr');
            table.row($ABtr).remove();
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_3__('#datatables').DataTable().draw();
        });
    };
    ListstudentComponent.prototype.deleteUser = function (rollNo) {
        var _this = this;
        console.log("IN delete student method" + rollNo);
        this.studServices.deleteStudent(rollNo).subscribe(function () {
            _this.getAllStudentDetails();
            _this.loading = false;
            alert("Student Record Deleted ");
        }, function (error) {
            _this.loading = false;
            console.log(error);
            alert(error);
        });
    };
    ListstudentComponent.prototype.logout = function () {
        localStorage.clear();
        localStorage.removeItem('jwt');
        this._router.navigate(['/']);
    };
    // updateUser(student) {
    //   this.loading = false;
    //    this._router.navigate(['/srm'])
    // }
    ListstudentComponent.prototype.uploadDoc = function (student) {
        this._router.navigate(['/uploadDoc/' + student.rollno]);
    };
    ListstudentComponent.prototype.newUser = function () {
        this.loading = false;
        this._router.navigate(['/srm']);
    };
    ListstudentComponent.prototype.relativeStudent = function (rollno) {
        this._router.navigate(['listRelative/' + rollno]);
    };
    ListstudentComponent.prototype.uploadMarks = function () {
        //  $('#myModal').modal();
        // this._router.navigate(['uploadMarks/'])
        var dialogRef = this.dialog.open(_upload_marks_upload_marks_upload_marks_component__WEBPACK_IMPORTED_MODULE_8__["UploadMarksComponent"], {
            width: '1800px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ListstudentComponent.prototype.adminCheck = function () {
        var _this = this;
        this.roleguard.roleCheck()
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            if (_this.statusCode === 200) {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        }, function (errorCode) {
        });
    };
    ListstudentComponent.prototype.addStaff = function () {
        this._router.navigate(['/addMember']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__["AddStudentComponent"]),
        __metadata("design:type", _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__["AddStudentComponent"])
    ], ListstudentComponent.prototype, "addStudent", void 0);
    ListstudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liststudent',
            template: __webpack_require__(/*! ./liststudent.component.html */ "./src/main/webapp/app/student/liststudent/liststudent.component.html"),
            styles: [__webpack_require__(/*! ./liststudent.component.css */ "./src/main/webapp/app/student/liststudent/liststudent.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedservices_student_services_service__WEBPACK_IMPORTED_MODULE_1__["StudentServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _sharedservices_staffMemberService_service__WEBPACK_IMPORTED_MODULE_9__["StaffMemberService"]])
    ], ListstudentComponent);
    return ListstudentComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/upload-file/file-upload.service.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/upload-file/file-upload.service.ts ***!
  \****************************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadService = /** @class */ (function () {
    function FileUploadService(httpc, http) {
        this.httpc = httpc;
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json', "x-auth-token": localStorage.getItem('jwt')
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    FileUploadService.prototype.pushFileToStorage = function (file, rollNo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', 'http://localhost:8080/api/rest/file/upload/' + rollNo, formdata, {
            reportProgress: true,
            responseType: 'text',
            headers: headers
        });
        return this.httpc.request(req);
    };
    FileUploadService.prototype.getFiles = function () {
        return this.httpc.get('http://localhost:8080/api/rest/file/all');
    };
    FileUploadService.prototype.getFilesById = function (rollNo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get('http://localhost:8080/api/rest/file/' + rollNo, options)
            .map(function (res) { return res.json(); });
    };
    FileUploadService.prototype.getFilesViewById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get('http://localhost:8080/api/rest/fileView/' + id, options);
    };
    FileUploadService.prototype.downloadFile = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get('http://localhost:8080/api/rest/download/file/' + id, options);
    };
    FileUploadService.prototype.deleteFileById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'attachment',
            "x-auth-token": localStorage.getItem('jwt')
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log("@@@@@@@@DELETE SERVICE" + id);
        return this.http.delete('http://localhost:8080/api/file/delete/' + id, options);
    };
    FileUploadService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    FileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/main/webapp/app/upload-file/upload-file.component.css":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/upload-file/upload-file.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the submit button */\r\ninput[type=submit], button {\r\n\tbackground-color: #ae285d;\r\n\tcolor: white;\r\n\tpadding: 12px 40px;\r\n\tborder: none;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\tmargin: 5px;\r\n}\r\n.page {\r\n\tposition: absolute;\r\n\twidth: 592px; /*image width */\r\n\theight: 512px; /*image height */\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin-left: -296px; /*image width/2 */\r\n\tmargin-top: -256px; /*image height/2 */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixhQUFhLENBQUMsZ0JBQWdCO0NBQzlCLGNBQWMsQ0FBQyxpQkFBaUI7Q0FDaEMsVUFBVTtDQUNWLFNBQVM7Q0FDVCxvQkFBb0IsQ0FBQyxrQkFBa0I7Q0FDdkMsbUJBQW1CLENBQUMsbUJBQW1CO0NBQ3ZDIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbmlucHV0W3R5cGU9c3VibWl0XSwgYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWUyODVkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxMnB4IDQwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4ucGFnZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiA1OTJweDsgLyppbWFnZSB3aWR0aCAqL1xyXG5cdGhlaWdodDogNTEycHg7IC8qaW1hZ2UgaGVpZ2h0ICovXHJcblx0bGVmdDogNTAlO1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMjk2cHg7IC8qaW1hZ2Ugd2lkdGgvMiAqL1xyXG5cdG1hcmdpbi10b3A6IC0yNTZweDsgLyppbWFnZSBoZWlnaHQvMiAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/upload-file/upload-file.component.html":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/upload-file/upload-file.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<p>\n\t<li>Do not Forget to rename the file that you want to upload. For\n\t\tex. If you want to upload aadhar Card then rename file as 'AadharCard'\n\t</li>\n\t<li>Preview the selected File</li>\n\t<li>Click on Upload</li> <strong> <ui>Note: Only PNG and\n\t\tPDF files are supported</ui></strong>\n\t</p>\n\n\n\t<label class=\"btn btn-default\"> <!-- <input type=\"file\" (change)=\"selectFile($event)\"> -->\n\t\t<div *ngIf=\"currentFileUpload\" class=\"progress\">\n\t\t\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\n\t\t\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n\t\t\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\n\t\t\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\n\t\t\t\t{{progress.percentage}}%</div>\n\t\t</div> <input #file type=\"file\" accept='application/pdf,image/*'\n\t\t(change)=\"preview(file.files)\" /> <img [src]=\"imgURL\" height=\"400\"\n\t\twidth=\"600\" *ngIf=\"imgURL\"> <!-- <input #file type=\"file\"  (change)=\"preview(file.files)\" />\n<img [src]=\"imgURL\" height=\"400\" width=\"600\" *ngIf=\"imgURL\"> -->\n\t</label>\n\n\t<button class=\"btn\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n\t<input type=\"submit\" value=\"Cancel\" class=\"zoomout\"\n\t\t(click)=\"onHomePage()\">\n\t<!-- \n<div>\n  <app-listfiles></app-listfiles>\n</div> -->\n</div>"

/***/ }),

/***/ "./src/main/webapp/app/upload-file/upload-file.component.ts":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/upload-file/upload-file.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.service */ "./src/main/webapp/app/upload-file/file-upload.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(uploadService, route, _router) {
        this.uploadService = uploadService;
        this.route = route;
        this._router = _router;
        this.progress = { percentage: 0 };
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UploadFileComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.selectedFiles = files;
        var mimeType = files[0].type;
        console.log(mimeType);
        if (mimeType == "application/pdf") {
        }
        else {
            var reader = new FileReader();
            this.imagePath = files;
            reader.readAsDataURL(files[0]);
            reader.onload = function (_event) {
                _this.imgURL = reader.result;
            };
        }
    };
    UploadFileComponent.prototype.previewFile = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.selectedFiles = files;
        var mimeType = files[0].type;
        var reader = new FileReader();
        this.imagePath1 = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL1 = reader.result;
        };
    };
    UploadFileComponent.prototype.onHomePage = function () {
        this._router.navigate(['/liststudent']);
    };
    UploadFileComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.roll = this.route.snapshot.paramMap.get("rollNo");
        console.log(this.currentFileUpload);
        if (this.currentFileUpload.size <= 1048576) {
            this.uploadService.pushFileToStorage(this.currentFileUpload, this.roll).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    _this.progress.percentage = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                }
            });
        }
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/main/webapp/app/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/main/webapp/app/upload-file/upload-file.component.css")]
        }),
        __metadata("design:paramtypes", [_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/main/webapp/app/upload-marks/upload-marks.service.ts":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/upload-marks/upload-marks.service.ts ***!
  \******************************************************************/
/*! exports provided: UploadMarksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMarksService", function() { return UploadMarksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadMarksService = /** @class */ (function () {
    function UploadMarksService(httpc) {
        this.httpc = httpc;
    }
    UploadMarksService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "x-auth-token": localStorage.getItem('jwt')
        });
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'http://localhost:8080/api/rest/uploadMarks', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers: headers
        });
        return this.httpc.request(req);
    };
    UploadMarksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadMarksService);
    return UploadMarksService;
}());



/***/ }),

/***/ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.css":
/*!**********************************************************************************!*\
  !*** ./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.border{\r\n    border: solid 2px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvdXBsb2FkLW1hcmtzL3VwbG9hZC1tYXJrcy91cGxvYWQtbWFya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvdXBsb2FkLW1hcmtzL3VwbG9hZC1tYXJrcy91cGxvYWQtbWFya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJvcmRlcntcclxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.html":
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container border\">\n    <div class=\"page\">\n        <p>\n          <li>Do not Forget to rename the file that you want to upload. i.e StudentMarks.csv\n          </li>\n          <li>Click on Upload</li> <strong> <ui>Note: Extension for the file to upload is .csv</ui></strong>\n          </p>\n          <div class=\"uploadStyle\">\n<div *ngIf=\"currentFileUpload\" class=\"progress\">\n  <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n    role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n    aria-valuemin=\"0\" aria-valuemax=\"100\"\n    [ngStyle]=\"{width:progress.percentage+'%'}\">\n    {{progress.percentage}}%</div>\n</div> <input #file type=\"file\" accept=\".csv\" multiple\n(change)=\"preview(file.files)\" /> \n\n<button class=\"btn\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n\t<input type=\"submit\" value=\"Cancel\" class=\"zoomout\"\n    (click)=\"onPage()\">\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UploadMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMarksComponent", function() { return UploadMarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_marks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload-marks.service */ "./src/main/webapp/app/upload-marks/upload-marks.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadMarksComponent = /** @class */ (function () {
    function UploadMarksComponent(uploadService, _router, dialogRef) {
        this.uploadService = uploadService;
        this._router = _router;
        this.dialogRef = dialogRef;
        this.progress = { percentage: 0 };
    }
    UploadMarksComponent.prototype.ngOnInit = function () {
    };
    UploadMarksComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UploadMarksComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UploadMarksComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.selectedFiles = files;
        var mimeType = files[0].type;
        console.log(mimeType);
        if (mimeType == "application/pdf") {
        }
        else {
            var reader = new FileReader();
            this.imagePath = files;
            reader.readAsDataURL(files[0]);
            reader.onload = function (_event) {
                _this.imgURL = reader.result;
            };
        }
    };
    UploadMarksComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        console.log(this.currentFileUpload);
        if (this.currentFileUpload.size <= 1048576) {
            this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    _this.progress.percentage = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                }
                _this.dialogRef.close();
            });
        }
    };
    UploadMarksComponent.prototype.onPage = function () {
        this.dialogRef.close();
    };
    UploadMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-marks',
            template: __webpack_require__(/*! ./upload-marks.component.html */ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.html"),
            styles: [__webpack_require__(/*! ./upload-marks.component.css */ "./src/main/webapp/app/upload-marks/upload-marks/upload-marks.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_marks_service__WEBPACK_IMPORTED_MODULE_1__["UploadMarksService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], UploadMarksComponent);
    return UploadMarksComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\srm-workspace\ProData\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map