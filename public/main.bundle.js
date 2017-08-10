webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-side-menu></app-side-menu>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bittiger';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_side_menu_side_menu_component__["a" /* SideMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng_sidebar__["SidebarModule"].forRoot()
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .sidemenu {\n    height: 100%;\n    width: 250px;\n    top: 0;\n    left: 0;\n    overflow-x: hidden;\n    padding-top: 60px;\n    transition: 0.5s;\n}\n\n.sidemenu .closebtn {\n    font-size: 36px;\n    margin-left: 50px;\n} */\n\nng-sidebar-container {\n    height: 100vh;\n}\n\n.side {\n    background: ghostwhite;\n    height: 100%;\n}\n\n/*vh: 1/100th view point height*/\n\n.side-menu .side-menu-item {\n    list-style-type: none;\n}\n\n.side-menu .side-menu-item a {\n    font-size:14px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"side-menu\" class=\"sidemenu\">\n  <a class=\"closebtn\" (click)=\"closeSideMenu()\">&times;</a>\n  <ul class=\"list-group\">\n    \n    <li class=\"list-group-item\">week1</li>\n    <li class=\"list-group-item\">week2</li>\n    <li class=\"list-group-item\">week3</li>\n    <li class=\"list-group-item\">week4</li>\n    <li class=\"list-group-item\">week5</li>\n  </ul>  \n</div>\n\n<button type=\"button\" class=\"btn btn-default\" aria-label=\"Toggle Side Menu\" (click)=\"openSideMenu()\">\n  <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n</button> -->\n\n<!-- Container for sidebar(s) + page content -->\n\n<ng-sidebar-container>\n\n  <!-- A sidebar -->\n  <ng-sidebar [(opened)]=\"_opened\" [mode]=\"_mode\">\n    <div class=\"side\">\n      <a closeSidebar>Closes the sidebar</a>\n      <p>Sidebar contents</p>\n\n      <ul class=\"side-menu\">\n        <li class=\"side-menu-item\" *ngFor=\"let folder of folders\">\n          <a href=\"#\">{{folder.name}}</a>\n          <ul>\n            <li *ngFor=\"let cid of folder.courses\">\n              <a href=\"#\">{{courses[cid - 1].name}}</a>\n            </li>\n          </ul>\n        </li>\n      </ul>  \n    </div>\n  </ng-sidebar>\n\n  <!-- Page content -->\n  <div ng-sidebar-content>\n    <button type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"_toggleSidebar()\">\n      <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n    </button>\n    <h1> Welcome to Bittiger</h1>\n  </div>\n\n</ng-sidebar-container>"

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var SideMenuComponent = (function () {
    function SideMenuComponent(dataService) {
        this.dataService = dataService;
        this._opened = true;
        this._mode = 'push';
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.getCourses();
        this.getFolders();
    };
    SideMenuComponent.prototype.getFolders = function () {
        this.folders = this.dataService.getFolders();
        console.log(this.folders);
    };
    SideMenuComponent.prototype.getCourses = function () {
        this.courses = this.dataService.getCourses();
    };
    SideMenuComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    return SideMenuComponent;
}());
SideMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], SideMenuComponent);

//# sourceMappingURL=side-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data/courseList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COURSES; });
var COURSES = [
    {
        cid: 1,
        name: 'Intro to Project Manager Class',
        week: 1,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 2,
        name: 'Intro to Project Manager Class',
        week: 1,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 3,
        name: 'Intro to Project Manager Class',
        week: 2,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 4,
        name: 'Intro to Project Manager Class',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 5,
        name: 'Intro to Project Manager Class',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 6,
        name: 'Intro to Project Manager Class',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 7,
        name: 'Intro to Project Manager Class',
        week: 4,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    }
];
//# sourceMappingURL=courseList.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data/folderList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOLDERS; });
var FOLDERS = [
    {
        fid: 1,
        name: 'week1',
        courses: [1, 2]
    },
    {
        fid: 2,
        name: 'week2',
        courses: [3]
    },
    {
        fid: 3,
        name: 'week3',
        courses: [4, 5, 6]
    },
    {
        fid: 4,
        name: 'capstone',
        courses: [7]
    }
];
//# sourceMappingURL=folderList.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data_folderList__ = __webpack_require__("../../../../../src/app/mock-data/folderList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data_courseList__ = __webpack_require__("../../../../../src/app/mock-data/courseList.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService() {
        this.folders = __WEBPACK_IMPORTED_MODULE_1__mock_data_folderList__["a" /* FOLDERS */];
        this.courses = __WEBPACK_IMPORTED_MODULE_2__mock_data_courseList__["a" /* COURSES */];
    }
    DataService.prototype.getFolders = function () {
        return this.folders;
    };
    DataService.prototype.getCourses = function () {
        return this.courses;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map