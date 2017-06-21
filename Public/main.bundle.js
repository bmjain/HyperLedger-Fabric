webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\" href=\"#\">DMV Title Transfer</a>\n\t\t\t<app-login></app-login>\n\t\t</div>\n\t\t<div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"active\"><a href=\"#\">Home</a></li>\n\t\t\t\t<li><a href=\"#about\">About</a></li>\n\t\t\t\t<li><a href=\"#contact\">Contact</a></li>\n\t\t\t</ul>\n\t\t</div><!--/.nav-collapse -->\n\t</div>\n</nav>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-3 col-lg-2\">\n\t\t\t<nav class=\"navbar navbar-default navbar-fixed-side\">\n\t\t\t\t<h4>Navigation</h4>\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li><a routerLink=\"/vehicleLookup\"\n                 routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t VEHICLE LOOKUP</a>\n\t\t\t\t\t</li>\n\t\t\t\t  <li><a routerLink=\"/createRegistration\">\n\t\t\t\t\t\t\t\t <i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t CREATE REGISTRATION</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a>\n\t\t\t\t\t\t\t\t <i class=\"fa  fa-refresh\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t RENEW REGISTRATION</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a>\n\t\t\t\t\t\t\t\t <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t VEHICLE STATUS</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li><a routerLink=\"/livestats\">\n\t\t\t\t\t\t\t\t <i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t LIVE STATS</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"col-sm-9 col-lg-10 col-sm-pull-3 col-lg-pull-2\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 contentArea\">\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- /.container -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #1b2431;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n.navbar {\n  height: 38px;\n  padding: 0 16px;\n  margin-top: -8px;\n  margin-left: -8px; }\n\n.navbar .container {\n  width: 100%; }\n\n.navbar-inverse {\n  background-color: #470a68; }\n\n.navbar-default {\n  background-color: #12385f;\n  border-top: 0 #454545;\n  border-right: 1px #454545 solid;\n  border-bottom: 0 #454545;\n  border-left: 0 #454545;\n  box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.45);\n  text-transform: uppercase;\n  color: white;\n  font-size: 14px; }\n\n.navbar-nav li {\n  display: block; }\n  .navbar-nav li a {\n    display: block;\n    padding: 0 0 0 13px !important;\n    font: 14px/27px 'Source Sans Pro', sans-serif;\n    text-decoration: none;\n    border-style: none !important;\n    color: #a3c5e3; }\n    .navbar-nav li a span {\n      font-family: 'FontAwesome';\n      display: inline-block;\n      margin-right: 5px; }\n    .navbar-nav li a:hover {\n      background-color: #a3c5e3;\n      color: #ffffff; }\n    .navbar-nav li a.active {\n      background-color: #a3c5e3;\n      color: #ffffff; }\n\n/* Nav bar media styles */\n@media (max-width: 768px) {\n  .navbar-fixed-side {\n    margin-left: -15px;\n    margin-right: -15px; } }\n\n@media (min-width: 768px) {\n  .navbar-fixed-side {\n    position: fixed;\n    margin: 0 -15px;\n    height: 100vh;\n    width: inherit;\n    overflow: auto;\n    border-top-width: 0;\n    border-bottom-width: 0;\n    border-radius: 0; }\n  .navbar-fixed-side .container, .navbar-fixed-side .container-fluid {\n    width: auto;\n    padding-left: 0;\n    padding-right: 0; }\n  .navbar-fixed-side .navbar-header {\n    float: none; }\n  .navbar-fixed-side .navbar-brand {\n    height: auto; }\n  .navbar-fixed-side > .container .navbar-brand, .navbar-fixed-side > .container-fluid .navbar-brand {\n    margin-left: 0; }\n  .navbar-fixed-side .navbar-collapse {\n    width: 100%;\n    border-top: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-nav {\n    float: none;\n    margin: 0 -15px; }\n  .navbar-fixed-side .navbar-nav > li {\n    float: none; }\n  .navbar-fixed-side .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-form {\n    margin: 0;\n    margin-left: -15px;\n    margin-right: -15px;\n    padding: 10px 15px;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-text {\n    float: none;\n    margin-left: 0;\n    margin-right: 0; }\n  .navbar-fixed-side .navbar-left, .navbar-fixed-side .navbar-right {\n    float: none !important; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a, .navbar-fixed-side .navbar-nav .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a {\n    line-height: 20px;\n    color: #777; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:hover, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:focus {\n    background-image: none; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > .active > a {\n    background-color: #e7e7e7;\n    color: #555; }\n  .navbar-fixed-side .navbar-nav > li > a:hover, .navbar-fixed-side .navbar-nav > li > a:focus, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:hover, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:focus {\n    background-color: #f0f0f0;\n    color: #333; }\n  .navbar-fixed-side .dropdown > .dropdown-toggle, .navbar-fixed-side .dropdown-menu > .dropdown-header {\n    background-color: transparent !important;\n    color: #9d9d9d !important;\n    cursor: default;\n    font-size: 0.8em;\n    text-transform: uppercase;\n    border-bottom: none;\n    padding-bottom: 0; }\n  .navbar-fixed-side .dropdown-toggle .caret {\n    display: none; }\n  .navbar-fixed-side .dropdown-menu {\n    display: block; }\n  .navbar-fixed-side.navbar-inverse .navbar-collapse, .navbar-fixed-side.navbar-inverse .navbar-nav > li > a, .navbar-fixed-side.navbar-inverse .navbar-form, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu {\n    border-color: #363636; }\n  .navbar-fixed-side.navbar-inverse .divider {\n    background-color: #363636; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li > a {\n    color: #9d9d9d; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > .active > a {\n    background-color: #090909;\n    color: #fff; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav > li:not(.active) > a:hover, .navbar-fixed-side.navbar-inverse .navbar-nav > li:not(.active) > a:focus, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li:not(.active) > a:hover, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li:not(.active) > a:focus {\n    background-color: #2f2f2f;\n    color: #fff; }\n  .navbar-fixed-side.navbar-inverse .dropdown > .dropdown-toggle {\n    color: #777777 !important; } }\n\n/* router outlet/content area container */\n.contentArea {\n  height: calc(100vh - 75px);\n  border-style: solid none none solid;\n  border-width: 1px;\n  border-color: #44474f;\n  background-color: #262d3a;\n  padding-left: 0;\n  padding-right: 0;\n  margin-top: 30px; }\n\n/* buttons */\n.kpmg-btn, .kpmg-btn-primary, .kpmg-btn-secondary {\n  height: 34px;\n  font-size: 14px;\n  border: 1px solid #374a5e;\n  border-radius: 4px; }\n  .kpmg-btn .fa, .kpmg-btn-primary .fa, .kpmg-btn-secondary .fa {\n    margin-right: 6px; }\n\n.kpmg-btn:hover, .kpmg-btn-primary:hover, .kpmg-btn-secondary:hover {\n  background-color: #344356;\n  color: #2ea2f8; }\n\n.kpmg-btn-primary {\n  background-color: #0068a0;\n  color: #c9cbd0; }\n\n.kpmg-btn-secondary {\n  background-color: #587089;\n  color: #c9cbd0; }\n\n/* form controls */\n.form-input {\n  padding-left: 15px;\n  border-color: #303a4a;\n  border-radius: 4px;\n  background-color: #394a5e;\n  height: 34px;\n  color: #d8d8d8;\n  size: 14px; }\n\n.form-input-focus {\n  border-color: #2f304b;\n  background-color: #374a5e;\n  color: rb(255, 255, 255);\n  font-weight: 500; }\n\n.form-input-hover {\n  border-color: #2f3a4b;\n  background-color: #3a4e63; }\n\n/* dialog */\n.kpmg-ui-dialog {\n  background-color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_live_stats_live_stats_component__ = __webpack_require__("./src/app/components/live-stats/live-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_vehicle_lookup_vehicle_lookup_component__ = __webpack_require__("./src/app/components/vehicle-lookup/vehicle-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_vehicle_detail_vehicle_detail_component__ = __webpack_require__("./src/app/components/vehicle-detail/vehicle-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_registration_create_registration_component__ = __webpack_require__("./src/app/components/create-registration/create-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_form_fields_vehicle_information_form_fields_vehicle_information_component__ = __webpack_require__("./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_form_login_form_component__ = __webpack_require__("./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_vehicle_transfer_vehicle_transfer_component__ = __webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_vehicle_transfer_vehicle_transfer_status_vehicle_transfer_status_component__ = __webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_vehicle_lookup_vehicle_lookup_component__["a" /* VehicleLookupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_vehicle_detail_vehicle_detail_component__["a" /* VehicleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_create_registration_create_registration_component__["a" /* CreateRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_form_fields_vehicle_information_form_fields_vehicle_information_component__["a" /* FormFieldsVehicleInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_live_stats_live_stats_component__["a" /* LiveStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_vehicle_transfer_vehicle_transfer_component__["a" /* VehicleTransferComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_vehicle_transfer_vehicle_transfer_status_vehicle_transfer_status_component__["a" /* VehicleTransferStatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* appRouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["GalleriaModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vehicle_lookup_vehicle_lookup_component__ = __webpack_require__("./src/app/components/vehicle-lookup/vehicle-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_create_registration_create_registration_component__ = __webpack_require__("./src/app/components/create-registration/create-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vehicle_detail_vehicle_detail_component__ = __webpack_require__("./src/app/components/vehicle-detail/vehicle-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_live_stats_live_stats_component__ = __webpack_require__("./src/app/components/live-stats/live-stats.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterModule; });
/* app.routes.ts */

// target route components here...




var appRoutes = [
    {
        path: '',
        redirectTo: '/vehicleLookup',
        pathMatch: 'full'
    },
    {
        path: 'vehicleLookup',
        component: __WEBPACK_IMPORTED_MODULE_1__components_vehicle_lookup_vehicle_lookup_component__["a" /* VehicleLookupComponent */]
    },
    {
        path: 'createRegistration',
        component: __WEBPACK_IMPORTED_MODULE_2__components_create_registration_create_registration_component__["a" /* CreateRegistrationComponent */]
    },
    {
        path: 'vehicleDetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__components_vehicle_detail_vehicle_detail_component__["a" /* VehicleDetailComponent */]
    },
    {
        path: 'livestats',
        component: __WEBPACK_IMPORTED_MODULE_4__components_live_stats_live_stats_component__["a" /* LiveStatsComponent */]
    }
];
var appRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/components/create-registration/create-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Vehicle Title Registration</h3>\n<form novalidate (ngSubmit)=\"onSubmit()\">\n<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"SECTION 1 -- VEHICLE INFORMATION\">\n    <ng-template ngbPanelContent>\n      <app-form-fields-vehicle-information\n        [vehicle]=\"vehicle\"></app-form-fields-vehicle-information>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n<button class=\"btn btn-secondary\" (click)=\"noSubmit()\">Cancel</button>\n<button class=\"btn btn-secondary\"  (click)=\"noSubmit()\">Save Draft</button>\n<button class=\"btn btn-primary\">Create Record</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/create-registration/create-registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/create-registration/create-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRegistrationComponent = (function () {
    function CreateRegistrationComponent(http) {
        this.http = http;
        this.vehicle = {
            v5cID: '',
            identity: 'DVLA',
            VIN: '13245',
            License: '',
            make: '',
            model: '',
            colour: '',
            Reg: '',
            year: null,
            FuelType: '',
            BodyType: '',
            StateLicenseNumber: '',
            VehicleType: '',
            MotorCycleEngineNumber: '',
            TransportationUse: null,
            CommercialVehicle: null,
            OwnerName: '',
            OwnerDL: '',
            OwnerDLState: '',
            CoOwnerName: '',
            CoOwnerDL: '',
            CoOwnerDLState: '',
            OwnerPhyAddr: '',
            OwnerMailAddr: '',
            CoOwnerPhyAddr: '',
            CoOwnerMailAddr: '',
            LegalOwnerName: '',
            LegalOwnerPhyAddr: '',
            LegalOwnerMailAddr: '',
            OdometerReading: null,
            VehiclePurchaseDate: '',
            VehiclePurchaseType: '',
            VehiclePurchaseLocation: '',
            VehicleEnteredStateDate: '',
            VehicleOperatedStateDate: '',
            VehicleCost: '',
            VehiclePurchasedFrom: '',
            BodyTypeMod: '',
            SalesTaxPaid: null,
            SalesTaxAmount: null,
            IsMemOfMilitary: null,
            IsMemOfMilitaryWhenLastLicensed: null,
            Scrapped: '',
            Status: '',
            V5cID: '',
            LeaseContractID: '',
            MSRP: null,
            SellingPrice: null,
            StateTax: null,
            State: ''
        };
    }
    CreateRegistrationComponent.prototype.ngOnInit = function () {
    };
    CreateRegistrationComponent.prototype.noSubmit = function () {
        return false;
    };
    /* object methods */
    CreateRegistrationComponent.prototype.onSubmit = function () {
        console.log('vehicle' + this.vehicle.VIN);
        var url = 'http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/vehicles';
        console.log('posting');
        return this.http.post(url, this.vehicle)
            .toPromise().then(function (res) {
            // display success to user
            console.log('post returned: ' + res);
        }).catch(function (data) {
            // display fail to user
            console.log('http post failed: ' + data);
        });
    };
    return CreateRegistrationComponent;
}());
CreateRegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-registration',
        template: __webpack_require__("./src/app/components/create-registration/create-registration.component.html"),
        styles: [__webpack_require__("./src/app/components/create-registration/create-registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CreateRegistrationComponent);

var _a;
//# sourceMappingURL=create-registration.component.js.map

/***/ }),

/***/ "./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n  <label for=\"VIN\">Vehicle Identification Number (VIN)</label>\n  <input type=\"text\"\n         class=\"form-control\"\n         name=\"VIN\"\n         [(ngModel)]=\"vehicle.VIN\"\n         required />\n\n  <label for=\"make\">Make</label>\n  <input type=\"text\" class=\"form-control\" id=\"make\" required>\n\n  <label for=\"yearModel\">Year Model</label>\n  <input type=\"text\" class=\"form-control\" id=\"yearModel\" required>\n\n  <label for=\"fuel\">Fuel Type</label>\n  <select id=\"fuel\" class=\"form-control\" required>\n    <option>Gas</option>\n    <option>Propane</option>\n    <option>Diesel</option>\n    <option>Electric</option>\n  </select>\n\n  <label for=\"model\">Model or Series</label>\n  <input type=\"text\" class=\"form-control\" id=\"model\">\n\n  <label for=\"bodyTypeModel\">Body Type Model</label>\n  <select id=\"bodyTypeModel\" class=\"form-control\">\n    <option>AT - All Terrain</option>\n    <option>OTH - Other</option>\n  </select>\n\n</div>\n\n<div class=\"form-group\">\n  <label for=\"license\">California License Number</label>\n  <input type=\"text\" class=\"form-control\" id=\"license\" required/>\n\n  <label for=\"typeVehicle\">Type of Vehicle</label>\n  <select id=\"typeVehicle\" class=\"form-control\">\n    <option>Automobile</option>\n    <option>Commercial</option>\n    <option>Motorcycle</option>\n    <option>Boat</option>\n    <option>Trailer</option>\n  </select>\n\n  <label for=\"motorcyleEngineNumber\">Motorcycle Engine Number</label>\n  <input type=\"text\" class=\"form-control\" id=\"motorcyleEngineNumber\"/>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__ = __webpack_require__("./src/app/interfaces/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldsVehicleInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormFieldsVehicleInformationComponent = (function () {
    function FormFieldsVehicleInformationComponent() {
    }
    FormFieldsVehicleInformationComponent.prototype.ngOnInit = function () {
    };
    return FormFieldsVehicleInformationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__["Vehicle"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__["Vehicle"]) === "function" && _a || Object)
], FormFieldsVehicleInformationComponent.prototype, "vehicle", void 0);
FormFieldsVehicleInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-fields-vehicle-information',
        template: __webpack_require__("./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.html"),
        styles: [__webpack_require__("./src/app/components/form-fields-vehicle-information/form-fields-vehicle-information.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FormFieldsVehicleInformationComponent);

var _a;
//# sourceMappingURL=form-fields-vehicle-information.component.js.map

/***/ }),

/***/ "./src/app/components/live-stats/live-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%\">\n    <iframe style=\"background-color: white;\" width=\"100%\" height=\"100%\" name=\"Live Stats\" src=\"http://kvrnsit.westus.cloudapp.azure.com:8080/stats.html\"></iframe>\n</div>"

/***/ }),

/***/ "./src/app/components/live-stats/live-stats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\n.lookupBase {\n  font-family: \"Source Sans Pro\", sans-serif;\n  padding: 0; }\n  .lookupBase .toolbar {\n    height: 60px;\n    background-color: #465b78;\n    margin: 0; }\n    .lookupBase .toolbar .searchText {\n      display: inline-block;\n      width: 215px;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      border-radius: 6px;\n      color: #d8d8d8;\n      margin-right: 10px;\n      margin-top: 12px; }\n    .lookupBase .toolbar button {\n      display: inline-block;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      color: #d8d8d8;\n      border-radius: 6px;\n      padding: 1px 6px;\n      margin-top: 2px; }\n    .lookupBase .toolbar label {\n      display: inline-block;\n      line-height: 60px;\n      margin-right: 10px;\n      color: #d8d8d8; }\n    .lookupBase .toolbar select {\n      display: inline-block;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      color: #d8d8d8;\n      border-radius: 6px;\n      padding: 1px 6px;\n      margin-top: 2px;\n      min-width: 160px; }\n  .lookupBase .table-base {\n    margin: 0;\n    padding: 0;\n    background-color: #465b78; }\n    .lookupBase .table-base > div {\n      padding: 0; }\n  .lookupBase table {\n    border-style: none; }\n    .lookupBase table th {\n      color: #465b78;\n      background-color: #253245;\n      border-style: none;\n      font-weight: 400;\n      border-style: none; }\n    .lookupBase table td {\n      border-style: none none solid none;\n      border-width: 1px;\n      border-color: #5c7089;\n      color: #d8d8d8;\n      font-size: 12px;\n      line-height: 48px;\n      padding: 0 12px;\n      font-weight: 300; }\n      .lookupBase table td a {\n        display: inline-block;\n        background-color: #394a5e;\n        border: 1px solid #313d4f;\n        border-radius: 6px;\n        font-family: 'FontAwesome';\n        color: #d8d8d8;\n        font-size: 18px;\n        padding: 0 8px;\n        cursor: pointer;\n        text-decoration: none;\n        line-height: 30px;\n        padding: 0 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/live-stats/live-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveStatsComponent = (function () {
    function LiveStatsComponent() {
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        // this.getVehicles();
    };
    return LiveStatsComponent;
}());
LiveStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-lookup',
        template: __webpack_require__("./src/app/components/live-stats/live-stats.component.html"),
        styles: [__webpack_require__("./src/app/components/live-stats/live-stats.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], LiveStatsComponent);

//# sourceMappingURL=live-stats.component.js.map

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n<label for=\"name\">name:</label>\n<input type=\"text\"\n       name=\"name\"\n       id=\"name\"\n       class=\"form-control\"\n       required\n       minlength=\"3\"\n       maxlength=\"40\"\n       [(ngModel)]=\"uName\"\n       #name=\"ngModel\">\n\n  <div *ngIf=\"formErrors.name\"\n       class=\"alert alert-danger\">\n       {{ formErrors.name }}\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = (function () {
    function LoginFormComponent() {
        this.uName = '';
        this.password = '';
        this.submitted = false;
        this.formErrors = {
            name: ''
            //, password: ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.'
            }
            //, password
        };
    }
    LoginFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.compForm) {
            this.compForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    LoginFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    LoginFormComponent.prototype.onValueChanged = function (data) {
        var form = this.compForm.form;
        for (var field in this.formErrors) {
            // clear out existing messages
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + '';
                }
            }
        }
    };
    return LoginFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], LoginFormComponent.prototype, "compForm", void 0);
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__("./src/app/components/login-form/login-form.component.html"),
        styles: [__webpack_require__("./src/app/components/login-form/login-form.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoginFormComponent);

var _a;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" (click)=\"loginPanel.toggle($event)\">\n  <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n  <span>Login</span>\n  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n</div>\n<p-overlayPanel #loginPanel [dismissable]=\"true\">\n  <app-login-form></app-login-form>\n</p-overlayPanel>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  max-width: 150px;\n  float: right;\n  margin-top: 10px;\n  color: #ffffff;\n  cursor: pointer; }\n\n.ui-overlaypanel {\n  background-color: #ffffff;\n  color: #000000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/vehicle-detail/vehicle-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid detailComponentBase\">\n\t<div class=\"row breadcrumbs\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<a href=\"/vehicleLookup\">\n\t\t\t\t<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> Vehicle Lookup / Details\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"row justify-content-center history-toggle\">\n\t\t<i class=\"fa {{ historyToggleClassname }}\"\n\t\t   title=\"{{ historyToggleTitle }}\"\n\t\t\t (click)=\"toggleHistory()\"></i>\n\t</div>\n\t<div class=\"row historyBase\" *ngIf=\"isHideHistory\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"historySliderBase\">\n\t\t\t\t<div class=\"historySlider\">\n\t\t\t\t\t<img src=\"assets/images/title-history.png\"\n\t\t\t\t\t     class=\"img-responsive\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row toolbar\">\n\t\t<div class=\"col-md-6 subnavigation\">\n\t\t\t<a [class.active]=\"statsVisible\" (click)=\"showStats()\">Vehicle Stats</a>\n\t\t\t<a [class.active]=\"!statsVisible\" (click) = \"showDetails()\">Registration Details</a></div>\n\t\t<div class=\"col-md-6 transfer\">\n\t\t\t<button class=\"btn btn-primary\" (click)=\"initTransfer();\">Initiate Transfer / Update</button>\n\t\t</div>\n\t</div>\n\t<div class=\"row statisticsBase\" [hidden]=\"!statsVisible\">\n\t\t<div class=\"col-md-12 statisticsContents\">\n\t\t\t<div class=\"row graphicStats\">\n\t\t\t\t<div class=\"col-md-3\"><div class=\"graphicStatsContent\"><h5>Smog Check</h5><h4>Exp. 10/12/2017</h4></div></div>\n\t\t\t\t<div class=\"col-md-3\"><div class=\"graphicStatsContent\"><h5>Tags</h5><h4>Exp. 12/10/2017</h4></div></div>\n\t\t\t\t<div class=\"col-md-3\"><div class=\"graphicStatsContent\"><h5>Insurance</h5><h4>Exp. 12/10/2017</h4></div></div>\n\t\t\t\t<div class=\"col-md-3\"><div class=\"graphicStatsContent\"><h5>Violations</h5><h4>No Violations</h4></div></div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\"><h3>VEHICLE DESCRIPTION</h3></div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>VIN</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Make</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Model</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Model Year</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\"><h3>REGISTRATION</h3></div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Registered Owner</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Residence</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Mailing Address</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>License Card ID</th><td></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row registrationBase\" [hidden]=\"statsVisible\">\n\t\t<div class=\"col-md-12 registrationContents\">\n\n\t\t\t<h2>Current Title Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STATE</th>\n\t\t\t\t\t\t\t<th>ISSUE DATE</th>\n\t\t\t\t\t\t\t<th>ODOMETER</th>\n\t\t\t\t\t\t\t<th>ACTUAL MILEAGE</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>{{ details.state }}</td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td>{{ details.odometerreading }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<h2>Historical Title Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STATE</th>\n\t\t\t\t\t\t\t<th>ISSUE DATE</th>\n\t\t\t\t\t\t\t<th>ODOMETER</th>\n\t\t\t\t\t\t\t<th>ACTUAL MILEAGE</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<h2>Junk &amp; Salvage Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>REPORTING OCCURRENCE</th>\n\t\t\t\t\t\t\t<th>REPORTING ENTITY</th>\n\t\t\t\t\t\t\t<th>DATE OBTAINED</th>\n\t\t\t\t\t\t\t<th>VEHICLE INTENDED FOR EXPORT?</th>\n\t\t\t\t\t\t\t<th>DISPOSITION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<h2>Lien Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>BANK/FINANCE COMPANY OR INDIVIDUAL</th>\n\t\t\t\t\t\t\t<th>ELECTRONIC LIENHOLDER ID NO.</th>\n\t\t\t\t\t\t\t<th>BUSINESS ADDRESS</th>\n\t\t\t\t\t\t\t<th>MAILING ADDRESS</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<h2>Owner Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>FULL NAME</th>\n\t\t\t\t\t\t\t<th>DRIVER LICENSE/ID CARD NUMBER</th>\n\t\t\t\t\t\t\t<th>STATE</th>\n\t\t\t\t\t\t\t<th>RESIDENCE</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<h2>Detailed Vehicle Information</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=\"4\">STANDARD DATA</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Body Type</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Manufactured</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Drive Line</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Engine Type</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Fuel Type</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Make</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Model</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Corporation</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Model Year</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Production Seq. No.</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Trim Level</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th>Type of Vehicle</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=\"4\">DIMENSIONS</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Base Curb Weight (lbs)</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Height (in)</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Width (in)</th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/vehicle-detail/vehicle-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\n.breadcrumbs a {\n  line-height: 30px;\n  color: #d8d8d8;\n  font-weight: 300; }\n  .breadcrumbs a i {\n    padding-right: 10px; }\n\n.history-toggle {\n  color: #d8d8d8; }\n\n.detailComponentBase {\n  font-family: \"Source Sans Pro\", sans-serif;\n  background-color: #465b78; }\n  .detailComponentBase .historyBase {\n    max-height: 400px; }\n  .detailComponentBase .toolbar {\n    height: 100px;\n    border-bottom: 1px solid #394a5e; }\n  .detailComponentBase .transfer {\n    text-align: right; }\n    .detailComponentBase .transfer button {\n      color: #d8d8d8;\n      font-weight: 300;\n      border: 1px solid #728795; }\n  .detailComponentBase .subnavigation {\n    padding-bottom: 0; }\n    .detailComponentBase .subnavigation a {\n      font-size: 18px;\n      line-height: 48px;\n      cursor: pointer;\n      color: #d8d8d8;\n      display: inline-block;\n      margin-right: 30px;\n      margin-top: 50px; }\n      .detailComponentBase .subnavigation a.active {\n        color: white;\n        border-bottom: 1px solid #318ef6; }\n  .detailComponentBase .graphicStats {\n    margin-top: 30px;\n    margin-bottom: 50px; }\n    .detailComponentBase .graphicStats div div.graphicStatsContent {\n      width: 100%;\n      height: 105px;\n      background: #394a5e;\n      border: 1px solid #2a3b4d;\n      border-radius: 6px; }\n      .detailComponentBase .graphicStats div div.graphicStatsContent h5 {\n        margin-left: 100px;\n        font-size: 16px;\n        margin-top: 20px;\n        font-weight: 300;\n        color: #d8d8d8; }\n      .detailComponentBase .graphicStats div div.graphicStatsContent h4 {\n        margin-left: 100px;\n        font-size: 18px;\n        margin-top: 16px;\n        font-weight: 300;\n        color: #e5e0a9; }\n  .detailComponentBase h2, .detailComponentBase h3 {\n    font-size: 24px;\n    line-height: 36px;\n    font-family: \"Source Sans Pro\", sans-serif;\n    color: #d8d8d8;\n    font-weight: 300;\n    padding: 0 20px;\n    margin: 30px 0 0 0; }\n  .detailComponentBase .registrationContents {\n    padding: 0; }\n  .detailComponentBase thead th {\n    background-color: #253245;\n    color: #d8d8d8;\n    border-style: none;\n    font-weight: 300; }\n  .detailComponentBase tbody td, .detailComponentBase tbody th {\n    border-style: none none solid none;\n    border-width: 1px;\n    border-color: #5c7089;\n    color: #d8d8d8;\n    font-size: 12px;\n    line-height: 48px;\n    padding: 0 12px;\n    font-weight: 300; }\n  .detailComponentBase tbody tr:last-child td,\n  .detailComponentBase tbody tr:last-child th {\n    border-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/vehicle-detail/vehicle-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_detail_service__ = __webpack_require__("./src/app/components/vehicle-detail/vehicle-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_vehicle__ = __webpack_require__("./src/app/interfaces/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_vehicle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_vehicle__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleDetailComponent = (function () {
    function VehicleDetailComponent(vehicleDetailService, route) {
        this.vehicleDetailService = vehicleDetailService;
        this.route = route;
        this.statsVisible = false;
        this.historyToggleTitleHide = "hide title history";
        this.historyToggleTitleShow = "show title history";
        this.historyToggleTitle = this.historyToggleTitleHide;
        this.historyToggleClassnameHide = "fa-toggle-up";
        this.historyToggleClassnameShow = "fa-toggle-down";
        this.historyToggleClassname = this.historyToggleClassnameHide;
        this.isHideHistory = true;
        this.transferReqEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VehicleDetailComponent.prototype.ngOnInit = function () {
        console.log('details id', this.details);
    };
    VehicleDetailComponent.prototype.initTransfer = function () {
        this.transferReqEmitter.emit(this.details);
    };
    VehicleDetailComponent.prototype.showStats = function () {
        this.statsVisible = true;
    };
    VehicleDetailComponent.prototype.showDetails = function () {
        this.statsVisible = false;
    };
    VehicleDetailComponent.prototype.toggleHistory = function () {
        // update tooltip
        this.historyToggleTitle = (this.isHideHistory) ?
            this.historyToggleTitleShow : this.historyToggleTitleHide;
        // update icon
        this.historyToggleClassname = (this.isHideHistory) ?
            this.historyToggleClassnameShow : this.historyToggleClassnameHide;
        // show/hide
        this.isHideHistory = !this.isHideHistory;
    };
    return VehicleDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_vehicle__["Vehicle"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_vehicle__["Vehicle"]) === "function" && _a || Object)
], VehicleDetailComponent.prototype, "details", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], VehicleDetailComponent.prototype, "transferReqEmitter", void 0);
VehicleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-detail',
        template: __webpack_require__("./src/app/components/vehicle-detail/vehicle-detail.component.html"),
        styles: [__webpack_require__("./src/app/components/vehicle-detail/vehicle-detail.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__vehicle_detail_service__["a" /* VehicleDetailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_detail_service__["a" /* VehicleDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_detail_service__["a" /* VehicleDetailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
], VehicleDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle-detail.component.js.map

/***/ }),

/***/ "./src/app/components/vehicle-detail/vehicle-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleDetailService = (function () {
    function VehicleDetailService() {
    }
    VehicleDetailService.prototype.getDetails = function () {
        return {
            history: [],
            statistics: {},
            registrationDetails: {
                CurrentTitleInformation: {
                    "State": "California",
                    "IssueDate": "07/10/2014",
                    "Odometer": "000080326",
                    "ActualMileage": "Yes"
                },
                HistoricalTitleInformation: {
                    "State": "California",
                    "IssueDate": "05/23/2012",
                    "Odometer": "000000008",
                    "ActualMileage": "Yes"
                },
                JunkSalvageInformation: {},
                LienInformation: {},
                OwnerInformation: [
                    {
                        "FullName": "",
                        "LicenseNumber": "",
                        "State": "",
                        "Residence": ""
                    },
                    {
                        "FullName": "",
                        "LicenseNumber": "",
                        "State": "",
                        "Residence": ""
                    }
                ],
                DetailedVehicleInformation: {
                    "BodyType": "2D Coupe",
                    "DriveLine": "Rear Wheel",
                    "FuelType": "Gas",
                    "Model": "370z",
                    "ModelYear": "2012",
                    "TrimLevel": "Sport",
                    "Manufactured": "Japan",
                    "EngineType": "3.7L V6 DOHC",
                    "Make": "Nissan",
                    "Corporation": "Nissan",
                    "ProductSeqNo": "12342",
                    "VehicleType": "Auto"
                },
                Dimensions: {
                    "BaseCurbWeight": 3292,
                    "Height": 56.5,
                    "Width": 69
                }
            }
        };
    }; // no-op
    return VehicleDetailService;
}());
VehicleDetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], VehicleDetailService);

//# sourceMappingURL=vehicle-detail.service.js.map

/***/ }),

/***/ "./src/app/components/vehicle-lookup/vehicle-lookup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid lookupBase\">\n<div *ngIf=\"isList\" class=\"search-view\">\n  <div class=\"row toolbar\">\n    <div class=\"col-md-4\">\n      <input type=\"text\"\n             class=\"form-control searchText\"\n             id=\"searchField\"\n             name=\"searchField\"\n             placeholder=\"Search VIN, Make, Model\"\n             [(ngModel)]=\"searchTerm\">\n      <button (click)=\"getVehicles()\" class=\"btn btn-primary\">Search</button>\n    </div>\n    <div class=\"col-md-4\">\n      <label>Show</label><select>\n        <option>All</option>\n        <option>Subaru</option>\n        <option>Chevrolet</option>\n        <option>Mazda</option>\n      </select>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n\t<div class=\"row table-base\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\" data-toggle=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th data-field=\"vin\" data-sortable=\"true\">VIN</th>\n\t\t\t\t\t\t\t<th>MAKE</th>\n\t\t\t\t\t\t\t<th>MODEL</th>\n\t\t\t\t\t\t\t<th>YEAR</th>\n\t\t\t\t\t\t\t<th>TRANSACTION TYPE</th>\n\t\t\t\t\t\t\t<th>TRANSACTION DATE</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let vehicle of vehicles\" (click)=\"showDetails(vehicle)\">\n\t\t\t\t\t\t\t<td>{{ vehicle.VIN }}</td>\n\t\t\t\t\t\t\t<td>{{ vehicle.make }}</td>\n\t\t\t\t\t\t\t<td>{{ vehicle.model }}</td>\n\t\t\t\t\t\t\t<td>{{ vehicle.year }}</td>\n\t\t\t\t\t\t\t<td>{{vehicle.VehiclePurchasedFrom}} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> Private</td>\n\t\t\t\t\t\t\t<td>{{ vehicle.VehiclePurchaseDate }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"isDetails\">\n  <app-vehicle-detail [details]=\"vehicleDetails\"\n                      (transferReqEmitter)=\"initTransfer(details)\"></app-vehicle-detail>\n</div>\n\n<div *ngIf=\"isTransfer\">\n  <app-vehicle-transfer [vehicleDetails]=\"vehicleDetails\"></app-vehicle-transfer>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/vehicle-lookup/vehicle-lookup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\n.lookupBase {\n  font-family: \"Source Sans Pro\", sans-serif;\n  padding: 0; }\n  .lookupBase .toolbar {\n    height: 60px;\n    background-color: #465b78;\n    margin: 0; }\n    .lookupBase .toolbar .searchText {\n      display: inline-block;\n      width: 215px;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      border-radius: 6px;\n      color: #d8d8d8;\n      margin-right: 10px;\n      margin-top: 12px; }\n    .lookupBase .toolbar button {\n      display: inline-block;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      color: #d8d8d8;\n      border-radius: 6px;\n      padding: 1px 6px;\n      margin-top: 2px; }\n    .lookupBase .toolbar label {\n      display: inline-block;\n      line-height: 60px;\n      margin-right: 10px;\n      color: #d8d8d8; }\n    .lookupBase .toolbar select {\n      display: inline-block;\n      height: 35px;\n      line-height: 33px;\n      border: 1px solid #313d4f;\n      background-color: #394a5e;\n      color: #d8d8d8;\n      border-radius: 6px;\n      padding: 1px 6px;\n      margin-top: 2px;\n      min-width: 160px; }\n  .lookupBase .table-base {\n    margin: 0;\n    padding: 0;\n    background-color: #465b78; }\n    .lookupBase .table-base > div {\n      padding: 0; }\n  .lookupBase table {\n    border-style: none; }\n    .lookupBase table th {\n      color: #465b78;\n      background-color: #253245;\n      border-style: none;\n      font-weight: 400;\n      border-style: none; }\n    .lookupBase table td {\n      border-style: none none solid none;\n      border-width: 1px;\n      border-color: #5c7089;\n      color: #d8d8d8;\n      font-size: 12px;\n      line-height: 48px;\n      padding: 0 12px;\n      font-weight: 300; }\n      .lookupBase table td a {\n        display: inline-block;\n        background-color: #394a5e;\n        border: 1px solid #313d4f;\n        border-radius: 6px;\n        font-family: 'FontAwesome';\n        color: #d8d8d8;\n        font-size: 18px;\n        padding: 0 8px;\n        cursor: pointer;\n        text-decoration: none;\n        line-height: 30px;\n        padding: 0 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/vehicle-lookup/vehicle-lookup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_lookup_service__ = __webpack_require__("./src/app/components/vehicle-lookup/vehicle-lookup.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleLookupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleLookupComponent = (function () {
    function VehicleLookupComponent(vehicleLookupService) {
        this.vehicleLookupService = vehicleLookupService;
        this.vehicles = [];
        this.vehicleDetails = null; // may need to back w/ a model
        this.searchTerm = '';
        // todo: make these more declarative w/ a specific case for details
        this.isList = true;
        this.isDetails = false;
        this.isTransfer = false;
    }
    VehicleLookupComponent.prototype.ngOnInit = function () {
        // this.getVehicles();
    };
    /* class methods */
    VehicleLookupComponent.prototype.getVehicles = function () {
        var _this = this;
        this.vehicleLookupService.getVehicles().then(function (res) {
            console.log(res);
            _this.vehicles = res;
        })
            .catch(function (err) {
            console.error('VehicleLookupComponent.getVehicles', err.message || err);
        });
    };
    VehicleLookupComponent.prototype.showDetails = function (vehicle) {
        this.isList = false;
        this.isTransfer = false;
        this.isDetails = true;
        this.vehicleDetails = vehicle;
    };
    VehicleLookupComponent.prototype.initTransfer = function (vehicle) {
        this.isList = false;
        this.isDetails = false;
        this.isTransfer = true;
    };
    VehicleLookupComponent.prototype.doTransfer = function (vehicle) { };
    return VehicleLookupComponent;
}());
VehicleLookupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-lookup',
        template: __webpack_require__("./src/app/components/vehicle-lookup/vehicle-lookup.component.html"),
        styles: [__webpack_require__("./src/app/components/vehicle-lookup/vehicle-lookup.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__vehicle_lookup_service__["a" /* VehicleLookupService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_lookup_service__["a" /* VehicleLookupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_lookup_service__["a" /* VehicleLookupService */]) === "function" && _a || Object])
], VehicleLookupComponent);

var _a;
//# sourceMappingURL=vehicle-lookup.component.js.map

/***/ }),

/***/ "./src/app/components/vehicle-lookup/vehicle-lookup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleLookupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleLookupService = (function () {
    function VehicleLookupService(http) {
        this.http = http;
        this.vehicle = {
            v5cID: '',
            identity: 'DVLA',
            VIN: 'YV4902NK4F1209769',
            License: '',
            make: 'Mazda',
            model: '3',
            colour: 'Silver',
            Reg: '',
            year: 2000,
            FuelType: '',
            BodyType: '',
            StateLicenseNumber: '',
            VehicleType: '',
            MotorCycleEngineNumber: '',
            TransportationUse: null,
            CommercialVehicle: null,
            OwnerName: '',
            OwnerDL: '',
            OwnerDLState: '',
            CoOwnerName: '',
            CoOwnerDL: '',
            CoOwnerDLState: '',
            OwnerPhyAddr: '',
            OwnerMailAddr: '',
            CoOwnerPhyAddr: '',
            CoOwnerMailAddr: '',
            LegalOwnerName: '',
            LegalOwnerPhyAddr: '',
            LegalOwnerMailAddr: '',
            OdometerReading: null,
            VehiclePurchaseDate: '',
            VehiclePurchaseType: '',
            VehiclePurchaseLocation: '',
            VehicleEnteredStateDate: '',
            VehicleOperatedStateDate: '',
            VehicleCost: '',
            VehiclePurchasedFrom: '',
            BodyTypeMod: '',
            SalesTaxPaid: null,
            SalesTaxAmount: null,
            IsMemOfMilitary: null,
            IsMemOfMilitaryWhenLastLicensed: null,
            Scrapped: '',
            Status: '',
            V5cID: '',
            LeaseContractID: '',
            MSRP: null,
            SellingPrice: null,
            StateTax: null,
            State: 'CA'
        };
    }
    VehicleLookupService.prototype.getVehicles = function () {
        var _this = this;
        var body = { "identity": "DVLA" };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/getallvehicles', body, options)
            .toPromise()
            .then(function (response) {
            return response.json();
            //return [this.vehicle, this.vehicle];
        })
            .catch(function (error) {
            console.error('vehiclelookupservice.getVehicles', error.message || error);
            //return Promise.reject(error.message|| error);
            return [_this.vehicle, _this.vehicle];
        });
    };
    return VehicleLookupService;
}());
VehicleLookupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VehicleLookupService);

var _a;
//# sourceMappingURL=vehicle-lookup.service.js.map

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transfer-status\">\n<!-- <p-galleria [images]=\"images\"\n            panelWidth=\"500\"\n            panelHeight=\"313\"\n            [showCaption]=\"true\"></p-galleria> -->\n            <div *ngIf=\"shouldShow()\">\n  <img src=\"assets/images/transfer-title.gif\"/>\n            </div>\n            <div *ngIf=\"!shouldShow()\">\n              Transfer completed\n            </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".transfer-status .ui-galleria-caption {\n  background-color: rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTransferStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleTransferStatusComponent = (function () {
    function VehicleTransferStatusComponent() {
        var _this = this;
        this.flag = true;
        setTimeout(function () {
            _this.flag = false;
        }, 12000);
    }
    VehicleTransferStatusComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'assets/images/rg-card-no-values.png',
            alt: 'Creating registration...',
            title: 'New Registration' });
        this.images.push({ source: 'assets/images/rg-card-w-values.png',
            alt: 'New registration complete.',
            title: 'Complete Registration' });
    };
    VehicleTransferStatusComponent.prototype.shouldShow = function () {
        return this.flag;
    };
    return VehicleTransferStatusComponent;
}());
VehicleTransferStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-transfer-status',
        template: __webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.html"),
        styles: [__webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], VehicleTransferStatusComponent);

//# sourceMappingURL=vehicle-transfer-status.component.js.map

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transfer-title\">\n<div class=\"container-fluid detailComponentBase\">\n\t<div class=\"row breadcrumbs\">\n    <!-- wire up click handler to nav back -->\n\t\t<div class=\"col-md-12\"> <i class=\"fa fa-angle-left\"></i>Vehicle Lookup / Details / Transfer Title</div>\n\t</div>\n  <div class=\"row transfer-header\">\n\t\t<img src=\"assets/images/vehicles/370z-car.png\"\n\t\t\t   class=\"img-responsive\"/>\n    <span class=\"vehicle-info\">VIN: {{vehicleDetails.VIN}}</span>\n    <span class=\"vehicle-info\">Make: {{vehicleDetails.make}}</span>\n    <span class=\"vehicle-info\">Model: {{vehicleDetails.model}}</span>\n    <span class=\"vehicle-info\">Model Year: {{vehicleDetails.year}} </span>\n    <span class=\"vehicle-info\">Color: {{vehicleDetails.colour}}</span>\n  </div>\n  <div class=\"row transfer-details\">\n    <div class=\"col-md-6\">\n      <h3>Current Owner</h3>\n      <div class=\"transfer-info\">\n        <label>Seller's or Leasee's Last Name (or) Company Name</label>\n        <p>Fulton Auto Center</p>\n\n        <label>Seller's or Leasee's Address</label>\n        <p>1415 Fulton Avenue Sacramento, CA 95864</p>\n\n        <label>Vehicle License or CF Number</label>\n        <p> {{ vehicleDetails.license }} </p>\n\n        <div class=\"row\">\n          <div class=\"col-sm-9\">\n            <div class=\"row\">\n              <div class=\"col-6 col-sm-6\">\n                <label>Smog Test</label>\n                <p>PASS</p>\n              </div>\n              <div class=\"col-6 col-sm-6\">\n                <label>Energy Tax Act</label>\n                <p>Exempt</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <label>Odometer Reading (No Tenths)</label>\n        <p><input type=\"text\"  class=\"form-control odometer-field\"></p>\n\n        <div class=\"row\">\n          <div class=\"col-sm-9\">\n            <div class=\"row\">\n              <div class=\"col-6 col-sm-6\">\n                <label>Selling Price (No Cents)</label>\n                <p><input type=\"text\"  class=\"form-control\"></p>\n              </div>\n              <div class=\"col-6 col-sm-6\">\n                <label>Date of Sale</label>\n\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t    <input type=\"text\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t\t</div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\t\t\t\t<em>If vehicle is a gift, enter 0 for the selling price</em>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <h3>Transfer to</h3>\n      <div class=\"transfer-info\">\n        <label>License Number</label>\n\t\t\t\t<div class=\"input-group\">\n\t\t      <input type=\"text\" class=\"form-control driver-license\"\n\t\t\t\t\t       [(ngModel)]=\"transferLicenseNum\">\n\t\t      <span class=\"input-group-btn\">\n\t\t        <button class=\"btn btn-secondary create-license\"\n\t\t\t\t\t\t\t\t\t\ttitle=\"Create new license number.\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"generateLicense()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</button>\n\t\t      </span>\n\t\t    </div>\n\n        <label>New Owner's Name (or) Company Name</label>\n        <div class=\"row\">\n          <div class=\"col-sm-10\">\n            <div class=\"row\">\n              <div class=\"col-4 col-sm-5\">\n                <input type=\"text\"\n\t\t\t\t\t\t\t\t       placeholder=\"First Name\"\n\t\t\t\t\t\t\t\t\t\t\t class=\"form-control\">\n              </div>\n              <div class=\"col-4 col-sm-2\">\n                <input type=\"text\"\n\t\t\t\t\t\t\t\t       class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t placeholder=\"MI\">\n              </div>\n              <div class=\"col-4 col-sm-5\">\n                <input type=\"text\"\n\t\t\t\t\t\t\t\t       class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Last Name\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-10\">\n            <div class=\"row\">\n              <div class=\"col-4 col-sm-5\">\n                <label>City</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"col-4 col-sm-4\">\n                <label>State</label>\n                <select class=\"form-control\">\n                  <option>California</option>\n                </select>\n              </div>\n              <div class=\"col-4 col-sm-3\">\n                <label>Zip</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </div>\n\t\t\t\t<!--\n\t\t\t\tgenerate license number button\n\t\t\t\tdriver licence info\n\t\t\t\towner placeholder text -->\n\t\t\t\t<p id=\"transfer-to-spacer\"></p>\n        <button class=\"btn btn-secondary\">Cancel</button>\n\t\t\t\t<button class=\"btn btn-primary\"\n\t\t\t\t        (click)=\"showTransferDialog()\">Register</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- transfer dialog -->\n<p-dialog header=\"Transfering title...\"\n          [(visible)]=\"isDisplayTransferDialog\">\n    <app-vehicle-transfer-status></app-vehicle-transfer-status>\n</p-dialog>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\n/* SCSS VARIABLES */\n/* FONTS */\n/* COLORS */\n/* #470a68 */\n/* #12385f */\n/* #0e121a */\n/* #1b2431 */\n/* #00a3a1 */\n/* #0054b9 */\n/* #bc1f4c */\n/* #0090da */\n/* #009a3a */\n/* #f68d2e */\n/* #cccccc */\n/* #d8d8d8 */\n/* #5a6278 */\n/* #465b78 */\n/* #728795 */\n/* #38404b */\n/* #222c3c */\n/* #313d4f */\n/* #ffffff */\n/* #000000 */\n/* #af20bc*/\n/* #544881 */\n/* #0091da */\n/* #99bfe3 */\n/* STRUCTURAL */\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #1b2431;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n.navbar {\n  height: 38px;\n  padding: 0 16px;\n  margin-top: -8px;\n  margin-left: -8px; }\n\n.navbar .container {\n  width: 100%; }\n\n.navbar-inverse {\n  background-color: #470a68; }\n\n.navbar-default {\n  background-color: #12385f;\n  border-top: 0 #454545;\n  border-right: 1px #454545 solid;\n  border-bottom: 0 #454545;\n  border-left: 0 #454545;\n  box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.45);\n  text-transform: uppercase;\n  color: white;\n  font-size: 14px; }\n\n.navbar-nav li {\n  display: block; }\n  .navbar-nav li a {\n    display: block;\n    padding: 0 0 0 13px !important;\n    font: 14px/27px 'Source Sans Pro', sans-serif;\n    text-decoration: none;\n    border-style: none !important;\n    color: #a3c5e3; }\n    .navbar-nav li a span {\n      font-family: 'FontAwesome';\n      display: inline-block;\n      margin-right: 5px; }\n    .navbar-nav li a:hover {\n      background-color: #a3c5e3;\n      color: #ffffff; }\n    .navbar-nav li a.active {\n      background-color: #a3c5e3;\n      color: #ffffff; }\n\n/* Nav bar media styles */\n@media (max-width: 768px) {\n  .navbar-fixed-side {\n    margin-left: -15px;\n    margin-right: -15px; } }\n\n@media (min-width: 768px) {\n  .navbar-fixed-side {\n    position: fixed;\n    margin: 0 -15px;\n    height: 100vh;\n    width: inherit;\n    overflow: auto;\n    border-top-width: 0;\n    border-bottom-width: 0;\n    border-radius: 0; }\n  .navbar-fixed-side .container, .navbar-fixed-side .container-fluid {\n    width: auto;\n    padding-left: 0;\n    padding-right: 0; }\n  .navbar-fixed-side .navbar-header {\n    float: none; }\n  .navbar-fixed-side .navbar-brand {\n    height: auto; }\n  .navbar-fixed-side > .container .navbar-brand, .navbar-fixed-side > .container-fluid .navbar-brand {\n    margin-left: 0; }\n  .navbar-fixed-side .navbar-collapse {\n    width: 100%;\n    border-top: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-nav {\n    float: none;\n    margin: 0 -15px; }\n  .navbar-fixed-side .navbar-nav > li {\n    float: none; }\n  .navbar-fixed-side .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-form {\n    margin: 0;\n    margin-left: -15px;\n    margin-right: -15px;\n    padding: 10px 15px;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-text {\n    float: none;\n    margin-left: 0;\n    margin-right: 0; }\n  .navbar-fixed-side .navbar-left, .navbar-fixed-side .navbar-right {\n    float: none !important; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n    border-bottom: 1px solid #e7e7e7; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a, .navbar-fixed-side .navbar-nav .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a {\n    line-height: 20px;\n    color: #777; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:hover, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:focus {\n    background-image: none; }\n  .navbar-fixed-side .navbar-nav .dropdown-menu > .active > a {\n    background-color: #e7e7e7;\n    color: #555; }\n  .navbar-fixed-side .navbar-nav > li > a:hover, .navbar-fixed-side .navbar-nav > li > a:focus, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:hover, .navbar-fixed-side .navbar-nav .dropdown-menu > li > a:focus {\n    background-color: #f0f0f0;\n    color: #333; }\n  .navbar-fixed-side .dropdown > .dropdown-toggle, .navbar-fixed-side .dropdown-menu > .dropdown-header {\n    background-color: transparent !important;\n    color: #9d9d9d !important;\n    cursor: default;\n    font-size: 0.8em;\n    text-transform: uppercase;\n    border-bottom: none;\n    padding-bottom: 0; }\n  .navbar-fixed-side .dropdown-toggle .caret {\n    display: none; }\n  .navbar-fixed-side .dropdown-menu {\n    display: block; }\n  .navbar-fixed-side.navbar-inverse .navbar-collapse, .navbar-fixed-side.navbar-inverse .navbar-nav > li > a, .navbar-fixed-side.navbar-inverse .navbar-form, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu {\n    border-color: #363636; }\n  .navbar-fixed-side.navbar-inverse .divider {\n    background-color: #363636; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li > a {\n    color: #9d9d9d; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > .active > a {\n    background-color: #090909;\n    color: #fff; }\n  .navbar-fixed-side.navbar-inverse .navbar-nav > li:not(.active) > a:hover, .navbar-fixed-side.navbar-inverse .navbar-nav > li:not(.active) > a:focus, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li:not(.active) > a:hover, .navbar-fixed-side.navbar-inverse .navbar-nav .dropdown-menu > li:not(.active) > a:focus {\n    background-color: #2f2f2f;\n    color: #fff; }\n  .navbar-fixed-side.navbar-inverse .dropdown > .dropdown-toggle {\n    color: #777777 !important; } }\n\n/* router outlet/content area container */\n.contentArea {\n  height: calc(100vh - 75px);\n  border-style: solid none none solid;\n  border-width: 1px;\n  border-color: #44474f;\n  background-color: #262d3a;\n  padding-left: 0;\n  padding-right: 0;\n  margin-top: 30px; }\n\n/* buttons */\n.kpmg-btn, .kpmg-btn-primary, .btn-primary, .kpmg-btn-secondary, .btn-secondary, .btn {\n  height: 34px;\n  font-size: 14px;\n  border: 1px solid #374a5e;\n  border-radius: 4px; }\n  .kpmg-btn .fa, .kpmg-btn-primary .fa, .btn-primary .fa, .kpmg-btn-secondary .fa, .btn-secondary .fa, .btn .fa {\n    margin-right: 6px; }\n\n.kpmg-btn:hover, .kpmg-btn-primary:hover, .btn-primary:hover, .kpmg-btn-secondary:hover, .btn-secondary:hover, .btn:hover {\n  background-color: #344356;\n  color: #2ea2f8; }\n\n.kpmg-btn-primary, .btn-primary {\n  background-color: #0068a0;\n  color: #c9cbd0; }\n\n.kpmg-btn-secondary, .btn-secondary {\n  background-color: #587089;\n  color: #c9cbd0; }\n\n/* form controls */\n.form-input, .transfer-details .transfer-info input, .transfer-details .transfer-info select {\n  padding-left: 15px;\n  border-color: #303a4a;\n  border-radius: 4px;\n  background-color: #394a5e;\n  height: 34px;\n  color: #d8d8d8;\n  size: 14px; }\n\n.form-input-focus, .transfer-details .transfer-info input:focus {\n  border-color: #2f304b;\n  background-color: #374a5e;\n  color: rb(255, 255, 255);\n  font-weight: 500; }\n\n.form-input-hover, .transfer-details .transfer-info input:hover {\n  border-color: #2f3a4b;\n  background-color: #3a4e63; }\n\n/* dialog */\n.kpmg-ui-dialog, .transfer-title .ui-dialog {\n  background-color: #ffffff; }\n\n.transfer-title {\n  background-color: #465b78;\n  padding-bottom: 20px; }\n  .transfer-title .ui-dialog {\n    min-width: 500px;\n    min-height: 625px; }\n\n.breadcrumbs {\n  font-weight: 500;\n  color: #d8d8d8; }\n  .breadcrumbs .fa {\n    font-weight: 700;\n    margin-right: 15px; }\n\n.btn-secondary .fa {\n  margin-right: 0; }\n\n.transfer-header {\n  display: table;\n  color: #cccccc; }\n  .transfer-header img {\n    margin: 0 15px; }\n  .transfer-header .vehicle-info {\n    display: table-cell;\n    vertical-align: bottom;\n    bottom: 0;\n    padding-right: 15px; }\n\n.transfer-details {\n  margin-top: 15px; }\n  .transfer-details h3 {\n    font-weight: 300;\n    font-size: 24px;\n    color: white; }\n  .transfer-details .transfer-info {\n    background-color: #465b78;\n    border: 1px solid #374a5e;\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-top: 15px;\n    color: #cccccc;\n    padding-bottom: 15px;\n    min-height: 436px; }\n    .transfer-details .transfer-info label {\n      font-size: 12px;\n      margin-bottom: 0; }\n    .transfer-details .transfer-info .btn.btn-secondary.create-license {\n      padding: 0 5px; }\n    .transfer-details .transfer-info .driver-license {\n      max-width: 107px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .transfer-details .transfer-info .input-group-addon {\n      line-height: .25;\n      background-color: #394a5e; }\n    .transfer-details .transfer-info ::-webkit-input-placeholder,\n    .transfer-details .transfer-info ::-moz-placeholder,\n    .transfer-details .transfer-info :-ms-input-placeholder,\n    .transfer-details .transfer-info :-moz-placeholder {\n      /* Firefox 18- */\n      color: #cccccc; }\n    .transfer-details .transfer-info .odometer-field {\n      max-width: 200px; }\n    .transfer-details .transfer-info #transfer-to-spacer {\n      height: 160px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/vehicle-transfer/vehicle-transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__ = __webpack_require__("./src/app/interfaces/vehicle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTransferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleTransferComponent = (function () {
    function VehicleTransferComponent(http) {
        this.http = http;
        this.isDisplayTransferDialog = false;
        this.transferLicenseNum = '';
    }
    VehicleTransferComponent.prototype.ngOnInit = function () {
    };
    VehicleTransferComponent.prototype.showTransferDialog = function () {
        this.isDisplayTransferDialog = true;
        this.http.post('http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/transfervehicle', {
            V5cID: this.vehicleDetails.v5cID,
            identity: "DVLA",
            OwnerType: "Manufacturer",
            OwnerName: "Alfa_Romeo"
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    VehicleTransferComponent.prototype.generateLicense = function () {
        this.transferLicenseNum = '8B12208';
    };
    return VehicleTransferComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__["Vehicle"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_vehicle__["Vehicle"]) === "function" && _a || Object)
], VehicleTransferComponent.prototype, "vehicleDetails", void 0);
VehicleTransferComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-transfer',
        template: __webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer.component.html"),
        styles: [__webpack_require__("./src/app/components/vehicle-transfer/vehicle-transfer.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], VehicleTransferComponent);

var _a, _b;
//# sourceMappingURL=vehicle-transfer.component.js.map

/***/ }),

/***/ "./src/app/interfaces/vehicle.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=vehicle.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map