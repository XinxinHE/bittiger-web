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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_question_board_question_board_component__ = __webpack_require__("../../../../../src/app/components/question-board/question-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_middle_board_middle_board_component__ = __webpack_require__("../../../../../src/app/components/middle-board/middle-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_side_menu_side_menu_pipe__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_side_menu_side_menu_component__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_question_board_question_board_component__["a" /* QuestionBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_middle_board_middle_board_component__["a" /* MiddleBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_side_menu_side_menu_pipe__["a" /* SelectedCoursePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng_sidebar__["SidebarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__["a" /* BoardComponent */],
    },
    {
        path: 'courses/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__["a" /* BoardComponent */],
    },
    {
        path: 'questions',
        component: __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__["a" /* BoardComponent */]
    },
    {
        path: 'questions/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__["a" /* BoardComponent */]
    },
    {
        path: '**',
        redirectTo: 'courses'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-sidebar-container {\n    height: 100vh;\n}\n\n/*vh: 1/100th view point height*/\n\n.side {\n    height: 100%;\n    width: 100%;\n}\n\n.btn {\n    background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Container for sidebar(s) + page content -->\n<ng-sidebar-container>\n  \n  <ng-sidebar [(opened)]=\"_leftopened\" [mode]=\"_mode\">\n    <div class=\"side\">\n      <app-side-menu></app-side-menu>\n    </div>\n  </ng-sidebar>\n\n  <!-- left toggle button -->\n  <div ng-sidebar-content>\n    \n    <button type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"_toggleLeftSidebar()\">\n      <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n    </button>\n\n    <button type=\"button\" class=\"btn pull-right\" aria-label=\"Right Align\" (click)=\"_toggleRightSidebar()\">\n      <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n    </button>\n\n    <section>\n      <app-middle-board></app-middle-board>\n    </section>\n\n  </div>\n\n  <ng-sidebar [(opened)]=\"_rightopened\" [mode]=\"_mode\" [position]=\"_position\">\n    <div class=\"side\">\n      <app-question-board></app-question-board>\n    </div>\n  </ng-sidebar>\n\n</ng-sidebar-container>"

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
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

var BoardComponent = (function () {
    function BoardComponent(dataService) {
        this.dataService = dataService;
        this._leftopened = false;
        this._rightopened = true;
        this._mode = 'push';
        this._position = 'right';
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.getCourses();
        this.getFolders();
    };
    BoardComponent.prototype.getFolders = function () {
        this.folders = this.dataService.getFolders();
        console.log(this.folders);
    };
    BoardComponent.prototype.getCourses = function () {
        this.courses = this.dataService.getCourses();
    };
    BoardComponent.prototype._toggleLeftSidebar = function () {
        this._leftopened = !this._leftopened;
        if (this._leftopened) {
            this._rightopened = false;
        }
    };
    BoardComponent.prototype._toggleRightSidebar = function () {
        this._rightopened = !this._rightopened;
        if (this._rightopened) {
            this._leftopened = false;
        }
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], BoardComponent);

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/middle-board/middle-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".middle {\n    padding: 5px 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/middle-board/middle-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"middle\" *ngIf=\"course\">\n  <h1>{{course.name}}</h1>\n  <p>{{course.teacher}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/middle-board/middle-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiddleBoardComponent; });
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


var MiddleBoardComponent = (function () {
    function MiddleBoardComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    MiddleBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // get course id from the activated router params
            _this.course = _this.data.getCourse(+params['id']);
        });
    };
    return MiddleBoardComponent;
}());
MiddleBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-middle-board',
        template: __webpack_require__("../../../../../src/app/components/middle-board/middle-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/middle-board/middle-board.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], MiddleBoardComponent);

var _a;
//# sourceMappingURL=middle-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/question-board/question-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 10px 15px;\n    max-width: 400px;\n    min-height: 100vh;\n    border-left: solid 1px #e2e2e2;\n}\n\n.side-menu {\n    margin: 0;\n    padding: 0;\n}\n\n.side-menu .side-menu-item {\n    list-style-type: none;\n}\n\n.side-menu .side-menu-item a {\n    font-size:14px;\n}\n\n.question-list {\n    padding: 10px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-board/question-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container side\">\n  <div class=\"row\">\n    <div class=\"col-xs-3\">\n      <button class=\"btn btn-primary\" type=\"button\">New Post</button>\n    </div>\n\n    <div class=\"col-xs-9\">\n        <div class=\"input-group pull-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\">Go!</button>\n          </span>\n        </div>\n    </div>\n  </div>\n  \n  <div class=\"question-list\">\n    <div class=\"panel panel-default\" *ngFor=\"let question of questions\">\n      <div class=\"panel-heading\">{{question.subject}}</div>\n      <div class=\"panel-body\">{{question.body}}</div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/question-board/question-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBoardComponent; });
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

var QuestionBoardComponent = (function () {
    function QuestionBoardComponent(dataService) {
        this.dataService = dataService;
        this._opened = true;
        this._mode = 'push';
        this._position = 'right';
    }
    QuestionBoardComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionBoardComponent.prototype.getQuestions = function () {
        this.questions = this.dataService.getQuestions();
    };
    QuestionBoardComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    return QuestionBoardComponent;
}());
QuestionBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-board',
        template: __webpack_require__("../../../../../src/app/components/question-board/question-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/question-board/question-board.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], QuestionBoardComponent);

//# sourceMappingURL=question-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 5px 15px;\n    max-width: 300px;\n    min-height: 100vh;\n    border-right: solid 1px #e2e2e2;\n}\n\n.side-menu {\n    margin: 0;\n    padding: 0;\n}\n\n.side-menu .side-menu-item {\n    list-style-type: none;\n}\n\n.side-menu .side-menu-item a {\n    font-size:14px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"side\">\n  <p>Sidebar contents</p>\n\n  <ul class=\"side-menu\">\n    <li class=\"side-menu-item\" *ngFor=\"let folder of folders\">\n      <span>{{folder.name}}</span>\n      <ul>\n        <li *ngFor=\"let course of (courses | selectedCourse: folder.courses)\">\n          <a [routerLink]=\"['/courses', course.cid]\">{{course.name}}</a>\n        </li>\n      </ul>\n    </li>\n  </ul>  \n</aside>"

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
        this._position = 'right';
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.getCourses();
        this.getFolders();
    };
    SideMenuComponent.prototype.getFolders = function () {
        this.folders = this.dataService.getFolders();
    };
    SideMenuComponent.prototype.getCourses = function () {
        this.courses = this.dataService.getCourses();
    };
    SideMenuComponent.prototype.getCourse = function (id) {
        return this.course = this.dataService.getCourse(id);
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

/***/ "../../../../../src/app/components/side-menu/side-menu.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCoursePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var SelectedCoursePipe = (function () {
    function SelectedCoursePipe() {
    }
    SelectedCoursePipe.prototype.transform = function (allCourses, cids) {
        var selectedCourses = [];
        for (var _i = 0, allCourses_1 = allCourses; _i < allCourses_1.length; _i++) {
            var course = allCourses_1[_i];
            if (cids.indexOf(course.cid) >= 0) {
                console.log(course.cid);
                selectedCourses.push(course);
            }
        }
        return selectedCourses;
    };
    return SelectedCoursePipe;
}());
SelectedCoursePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'selectedCourse' })
], SelectedCoursePipe);

//# sourceMappingURL=side-menu.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data/courseList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COURSES; });
var COURSES = [
    {
        cid: 1,
        name: 'Intro to Project Manager Class 1',
        week: 1,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 2,
        name: 'Intro to Project Manager Class 2',
        week: 1,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 3,
        name: 'Intro to Project Manager Class 3',
        week: 2,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 4,
        name: 'Intro to Project Manager Class 4',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 5,
        name: 'Intro to Project Manager Class 5',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 6,
        name: 'Intro to Project Manager Class 6',
        week: 3,
        desc: 'This course introduces the basic concepts of PM',
        teacher: 'Payson Wu'
    },
    {
        cid: 7,
        name: 'Intro to Project Manager Class 7',
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

/***/ "../../../../../src/app/mock-data/questionList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUESTIONS; });
var QUESTIONS = [
    {
        qid: 1,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 2,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 3,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 4,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 5,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 6,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    },
    {
        qid: 7,
        subject: 'I have a question about the class',
        body: 'I have an unordered list and for each list item I wish to have text on the left and then a right aligned button. I have tried to use pull-right but this completely messes up the alignment. What am I doing wrong?',
        folder: 1,
    }
];
//# sourceMappingURL=questionList.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data_folderList__ = __webpack_require__("../../../../../src/app/mock-data/folderList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data_courseList__ = __webpack_require__("../../../../../src/app/mock-data/courseList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_data_questionList__ = __webpack_require__("../../../../../src/app/mock-data/questionList.ts");
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
        this.questions = __WEBPACK_IMPORTED_MODULE_3__mock_data_questionList__["a" /* QUESTIONS */];
    }
    DataService.prototype.getFolders = function () {
        return this.folders;
    };
    DataService.prototype.getCourses = function () {
        return this.courses;
    };
    DataService.prototype.getQuestions = function () {
        return this.questions;
    };
    DataService.prototype.getCourse = function (id) {
        return this.courses.filter(function (course) { return course.cid === id; })[0];
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