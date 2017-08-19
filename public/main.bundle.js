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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_middle_board_middle_board_component__ = __webpack_require__("../../../../../src/app/components/middle-board/middle-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_side_menu_side_menu_pipe__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_question_list_selected_questions_pipe__ = __webpack_require__("../../../../../src/app/components/question-list/selected-questions.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_question_list_html_to_plain_pipe__ = __webpack_require__("../../../../../src/app/components/question-list/html-to-plain.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_question_new_question_new_component__ = __webpack_require__("../../../../../src/app/components/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_question_list_question_list_component__ = __webpack_require__("../../../../../src/app/components/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_question_detail_question_detail_component__ = __webpack_require__("../../../../../src/app/components/question-detail/question-detail.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_side_menu_side_menu_component__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_middle_board_middle_board_component__["a" /* MiddleBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_side_menu_side_menu_pipe__["a" /* SelectedCoursePipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_question_list_selected_questions_pipe__["a" /* SelectedQuestionPipe */],
            __WEBPACK_IMPORTED_MODULE_14__components_question_list_html_to_plain_pipe__["a" /* HtmlToPlainTextPipe */],
            __WEBPACK_IMPORTED_MODULE_15__components_question_new_question_new_component__["a" /* QuestionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_question_list_question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_question_detail_question_detail_component__["a" /* QuestionDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__["SidebarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_middle_board_middle_board_component__ = __webpack_require__("../../../../../src/app/components/middle-board/middle-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_question_list_question_list_component__ = __webpack_require__("../../../../../src/app/components/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_question_new_question_new_component__ = __webpack_require__("../../../../../src/app/components/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_question_detail_question_detail_component__ = __webpack_require__("../../../../../src/app/components/question-detail/question-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_board_board_component__["a" /* BoardComponent */],
        children: [
            { path: 'courses/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_middle_board_middle_board_component__["a" /* MiddleBoardComponent */], outlet: 'courseBoard' },
            { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_3__components_question_list_question_list_component__["a" /* QuestionListComponent */], outlet: 'questionBoard' },
            { path: 'new-question', component: __WEBPACK_IMPORTED_MODULE_4__components_question_new_question_new_component__["a" /* QuestionNewComponent */], outlet: 'questionBoard' },
            { path: 'new-question/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_question_new_question_new_component__["a" /* QuestionNewComponent */], outlet: 'questionBoard' },
            { path: 'questions/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_question_detail_question_detail_component__["a" /* QuestionDetailComponent */], outlet: 'questionBoard' }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
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

module.exports = "<!-- Container for sidebar(s) + page content -->\n<ng-sidebar-container>\n  \n  <ng-sidebar [(opened)]=\"_leftopened\" [mode]=\"_mode\">\n    <div class=\"side\">\n      <app-side-menu></app-side-menu>\n    </div>\n  </ng-sidebar>\n\n  <!-- left toggle button -->\n  <div ng-sidebar-content>\n    \n    <button type=\"button\" class=\"btn\" aria-label=\"Left Align\" (click)=\"_toggleLeftSidebar()\">\n      <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n    </button>\n\n    <button type=\"button\" class=\"btn pull-right\" aria-label=\"Right Align\" (click)=\"_toggleRightSidebar()\">\n      <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n    </button>\n\n    <section>\n      <router-outlet name=\"courseBoard\"></router-outlet>\n    </section>\n\n  </div>\n\n  <ng-sidebar [(opened)]=\"_rightopened\" [mode]=\"_mode\" [position]=\"_position\">\n    <div class=\"side\">\n      <router-outlet name=\"questionBoard\"></router-outlet>\n    </div>\n  </ng-sidebar>\n\n</ng-sidebar-container>"

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

module.exports = "<div class=\"middle\" *ngIf=\"course\">\n  <h1>{{course.name}}</h1>\n  <p>{{course.teacher}}</p>\n  <p>{{course.desc}}</p>\n</div>\n"

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
    function MiddleBoardComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    MiddleBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // get course id from the activated router params
            _this.dataService.getCourse(+params['id'])
                .then(function (course) { return _this.course = course; });
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

/***/ "../../../../../src/app/components/question-detail/question-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 10px 15px;\n    max-width: 400px;\n    min-height: 100vh;\n    border-left: solid 1px #e2e2e2;\n}\n\n.board-head h1 {\n    margin-top: 0;\n    color: #c3c3c3;\n}\n\n.question-title {\n    padding-bottom: 10px;\n    font-size: 24px;\n    border-bottom: solid 1px #e4e4e4;\n}\n\n.question-body {\n    padding: 10px 0;\n}\n\n.media {\n    background-color: whitesmoke;\n    padding: 5px;\n}\n.media-object {\n    width: 50px;\n    height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-detail/question-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container side\">\n  \n  <div class=\"row\">\n    <div class=\"col-xs-2\">\n      <button [routerLink]=\"['/home', { outlets: {'questionBoard': ['questions']}}]\" class=\"btn btn-primary\" type=\"button\">Back</button>\n    </div>\n    <div class=\"col-xs-2\">\n      <button [routerLink]=\"['/home', { outlets: {'questionBoard': ['new-question', question.qid]}}]\" class=\"btn btn-primary\" type=\"button\">Edit</button>\n    </div>\n    <div class=\"col-xs-8\">\n      <label class=\"board-head pull-right\"><h1>Question</h1></label>\n    </div>\n  </div>\n  \n  <div *ngIf=\"question\">\n    <div>\n      <h1 class=\"question-title\">{{question.subject}}</h1>\n      <span style=\"color: #337ab7\">Iris Li, {{question.date | date: 'medium' }} </span><span class=\"label label-primary\">Week {{question.folder}}</span>\n      <div class=\"question-body\" [innerHTML]=\"question.body\"></div>\n    </div>\n\n    <div class=\"media\" *ngFor=\"let comment of question.comments\">\n      <div class=\"media-left\">\n        <img class=\"media-object\" [src]=\"comment.profile\" alt=\"profile image\">\n      </div>\n      <div class=\"media-body\">\n        <span style=\"color: #337ab7\">Iris Li, {{comment.date | date: 'medium' }} </span><br/>\n        {{comment.desc}} \n      </div>\n    </div>\n\n    <div class=\"media\">\n      <div class=\"media-body\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Input comment...\"\n                [(ngModel)]=\"comment.desc\">\n\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"addComment()\">Submit</button>\n          </span>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/question-detail/question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailComponent; });
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


var DEFAULT_COMMENT = {
    commid: 0,
    desc: '',
    question: 0,
    profile: '../../assets/profile.png',
    date: new Date()
};
var QuestionDetailComponent = (function () {
    function QuestionDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.comment = Object.assign({}, DEFAULT_COMMENT);
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    QuestionDetailComponent.prototype.getQuestion = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getQuestion(+params['id'])
                .then(function (question) {
                delete question._id;
                _this.question = question;
                _this.initComment();
            });
        });
    };
    QuestionDetailComponent.prototype.initComment = function () {
        this.comment.commid = this.question.comments.length + 1;
        this.comment.question = this.question.qid;
    };
    QuestionDetailComponent.prototype.addComment = function () {
        this.comment.date = new Date();
        this.question.comments.push(this.comment);
        console.log("add comment to question -- question detail");
        console.dir(this.question);
        this.updateQuestion(this.question.qid);
        this.getQuestion();
    };
    QuestionDetailComponent.prototype.updateQuestion = function (id) {
        var _this = this;
        this.dataService.updateQuestion(this.question, id)
            .then(function (question) {
            _this.postedQuestion = question;
        })
            .catch(function (err) { return console.log(err.body); });
    };
    return QuestionDetailComponent;
}());
QuestionDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-detail',
        template: __webpack_require__("../../../../../src/app/components/question-detail/question-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/question-detail/question-detail.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], QuestionDetailComponent);

var _a;
//# sourceMappingURL=question-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/question-list/html-to-plain.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlToPlainTextPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlToPlainTextPipe = (function () {
    function HtmlToPlainTextPipe() {
    }
    HtmlToPlainTextPipe.prototype.transform = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    return HtmlToPlainTextPipe;
}());
HtmlToPlainTextPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'htmlToPlainText' })
], HtmlToPlainTextPipe);

//# sourceMappingURL=html-to-plain.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 10px 15px;\n    max-width: 400px;\n    min-height: 100vh;\n    border-left: solid 1px #e2e2e2;\n}\n\n.question-list {\n    padding-top: 10px;\n}\n\n.folder-name {\n    background-color: #e4e4e4;\n    margin: 0;\n    margin-top: 20px;\n    padding: 3px 5px;\n    font-weight: bold; \n}\n\n.media {\n    border-top: solid 1px #d2d2d2;\n    padding: 5px;\n    margin: 0;\n}\n\n.media-heading {\n    background-color: white;\n}\n\n.max-lines {\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    overflow: hidden;\n    max-height: 3em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container side\">\n  <div class=\"row\">\n    <div class=\"col-xs-4\">\n      <button [routerLink]=\"['/home', { outlets: {'questionBoard': ['new-question']}}]\" \n              class=\"btn btn-primary\" type=\"button\">Ask Question</button>\n    </div>\n\n    <div class=\"col-xs-8\">\n        <div class=\"input-group pull-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\">Go!</button>\n          </span>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"quesiton-list\">\n    <div class=\"question-folder\" *ngFor=\"let folder of folders\">\n        \n        <div class=\"folder-name\"><span>{{folder.name}}</span></div>\n\n        <div class=\"media\" *ngFor=\"let question of (questions | selectedQuestion: folder.fid)\">\n          <div class=\"media-body\">\n              <h4 class=\"media-heading\">{{question.subject}}</h4>\n              <div class=\"max-lines\" \n                   [routerLink]=\"['/home', { outlets: {'questionBoard': ['questions', question.qid]}}]\">\n                   {{question.body | htmlToPlainText}}</div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
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

var QuestionListComponent = (function () {
    function QuestionListComponent(dataService) {
        this.dataService = dataService;
        this._opened = true;
        this._mode = 'push';
        this._position = 'right';
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        this.getFolders();
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this.dataService.getQuestions()
            .subscribe(function (questions) { return _this.questions = questions; });
    };
    QuestionListComponent.prototype.getFolders = function () {
        var _this = this;
        this.dataService.getFolders()
            .subscribe(function (folders) { return _this.folders = folders; });
    };
    QuestionListComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-list',
        template: __webpack_require__("../../../../../src/app/components/question-list/question-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/question-list/question-list.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], QuestionListComponent);

//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/question-list/selected-questions.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedQuestionPipe; });
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
var SelectedQuestionPipe = (function () {
    function SelectedQuestionPipe() {
    }
    SelectedQuestionPipe.prototype.transform = function (allQuestions, fid) {
        var selectedQuestions = [];
        for (var _i = 0, allQuestions_1 = allQuestions; _i < allQuestions_1.length; _i++) {
            var question = allQuestions_1[_i];
            if (question.folder === fid) {
                selectedQuestions.push(question);
            }
        }
        return selectedQuestions;
    };
    return SelectedQuestionPipe;
}());
SelectedQuestionPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'selectedQuestion' })
], SelectedQuestionPipe);

//# sourceMappingURL=selected-questions.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/question-new/question-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 10px 15px;\n    max-width: 400px;\n    min-height: 100vh;\n    border-left: solid 1px #e2e2e2;\n}\n\n.board-head h1 {\n    margin-top: 0;\n    color: #c3c3c3;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-new/question-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container side\">\n  \n  <div class=\"row\">\n    <div class=\"col-xs-3\">\n      <button [routerLink]=\"['/home', { outlets: {'questionBoard': ['questions']}}]\" class=\"btn btn-primary\" type=\"button\">Cancel</button>\n    </div>\n    <div class=\"col-xs-9\">\n      <label class=\"board-head pull-right\"><h1>Question</h1></label>\n    </div>\n  </div>\n  \n  <div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"questionTitle\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"questionTitle\" \n               placeholder=\"Input your question title\"\n               [(ngModel)]=\"newQuestion.subject\"\n               [ngModelOptions]=\"{standalone: true}\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"questionBody\">Body</label>\n          <quill-editor id=\"questionBody\"\n                        [(ngModel)]=\"newQuestion.body\" \n                        [ngModelOptions]=\"{standalone: true}\"\n                        [options]=\"editorConfig\"\n                        (blur)=\"onEditorBlured($event)\"\n                        (focus)=\"onEditorFocused($event)\"\n                        (ready)=\"onEditorCreated($event)\"\n                        (change)=\"onContentChanged($event)\" required>\n          </quill-editor>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"questionAttachment\">Attchment</label>\n        <input type=\"file\" id=\"questionAttachment\">\n        <p class=\"help-block\">Upload the attachment to support your question.</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"folderGroup\">Folder</label>\n        <div *ngFor=\"let folder of folders; let idx = index\">\n          <div class=\"radio\">\n            <label>\n              <input type=\"radio\" name=\"folderSelect\" \n                     [value]=\"folder.id\"\n                     [checked]=\"idx === 0\"\n                     (change)=\"onSelectionChange(folder)\"> {{folder.name}}\n            </label>\n          </div>         \n        </div>\n\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"postQuestion()\">Post Question</button>\n    </form>\n  </div> \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/question-new/question-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionNewComponent; });
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


var DEFAULT_QUESTION = Object.freeze({
    qid: 0,
    subject: '',
    body: "",
    folder: 1,
    date: new Date(),
    comments: []
});
var QuestionNewComponent = (function () {
    function QuestionNewComponent(dataService, router, activatedRoute) {
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.editorOptions = {
            placeholder: 'insert content...',
            modules: {
                toolbar: '#toolbar'
            }
        };
        this.newQuestion = Object.assign({}, DEFAULT_QUESTION);
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFolders();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.dataService.getQuestion(+params['id'])
                    .then(function (question) {
                    delete question._id; // TODO: why $oid cannot be updated
                    _this.newQuestion = Object.assign({}, question);
                    // console.dir(this.newQuestion);
                });
            }
        });
    };
    QuestionNewComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    QuestionNewComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    QuestionNewComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        console.log('quill is ready! this is current quill instance object', quill);
    };
    QuestionNewComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log('quill content is changed!', quill, html, text);
    };
    QuestionNewComponent.prototype.onSelectionChange = function (folder) {
        this.newQuestion.folder = folder.fid;
    };
    QuestionNewComponent.prototype.getFolders = function () {
        var _this = this;
        this.dataService.getFolders()
            .subscribe(function (folders) { return _this.folders = folders; });
    };
    QuestionNewComponent.prototype.postQuestion = function () {
        if (this.newQuestion.qid === 0) {
            this.addQuestion();
        }
        else {
            this.updateQuestion(this.newQuestion.qid);
        }
    };
    QuestionNewComponent.prototype.addQuestion = function () {
        var _this = this;
        this.newQuestion.date = new Date();
        this.dataService.addQuestion(this.newQuestion)
            .then(function (question) {
            _this.postedQuestion = question;
            _this.router.navigateByUrl("/home/(questionBoard:questions/" + _this.postedQuestion.qid + "//courseBoard:courses/2)");
        })
            .catch(function (err) { return console.log(err.body); });
        this.newQuestion = Object.assign({}, DEFAULT_QUESTION);
    };
    QuestionNewComponent.prototype.updateQuestion = function (id) {
        var _this = this;
        this.newQuestion.date = new Date();
        this.dataService.updateQuestion(this.newQuestion, id)
            .then(function (question) {
            _this.postedQuestion = question;
            //console.log(question);
            _this.router.navigateByUrl("/home/(questionBoard:questions/" + _this.postedQuestion.qid + "//courseBoard:courses/2)");
        })
            .catch(function (err) { return console.log(err.body); });
    };
    return QuestionNewComponent;
}());
QuestionNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-new',
        template: __webpack_require__("../../../../../src/app/components/question-new/question-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/question-new/question-new.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], QuestionNewComponent);

var _a, _b;
//# sourceMappingURL=question-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n    padding: 5px 15px;\n    max-width: 300px;\n    min-height: 100vh;\n    border-right: solid 1px #e2e2e2;\n}\n\n.side-menu {\n    margin: 0;\n    padding: 0;\n}\n\n.side-menu .side-menu-item {\n    list-style-type: none;\n}\n\n.side-menu .side-menu-item a {\n    font-size:14px;\n}\n\n.title {\n    margin-bottom: 10px;\n    padding: 10px 0 5px 0;\n    border-bottom: solid 1px whitesmoke;\n}\n\n.title .title-image {\n    margin-bottom: 5px;\n    width: 40px;\n    height: 40px;\n}\n\n.title .title-heading {\n    display: inline-block;\n    font-size: 24px;\n    padding-left: 10px;\n    margin-top: 0px;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"side\">\n  <div class=\"title\">\n    <img class=\"title-image\" src=\"../../assets/bittiger.png\"> <h1 class=\"title-heading\"> Bittiger</h1>\n  </div>\n\n  <ul class=\"side-menu\">\n    <li class=\"side-menu-item\" *ngFor=\"let folder of folders\">\n      <span>{{folder.name}}</span>\n      <ul>\n        <li *ngFor=\"let course of (courses | selectedCourse: folder.fid)\">\n          <a [routerLink]=\"['/home', {outlets: {'courseBoard':['courses', course.cid], 'questionBoard': ['questions']}}]\">\n            {{course.name}}</a>\n        </li>\n      </ul>\n    </li>\n  </ul>  \n</aside>"

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
        var _this = this;
        this.dataService.getFolders()
            .subscribe(function (folders) { return _this.folders = folders; });
    };
    SideMenuComponent.prototype.getCourses = function () {
        var _this = this;
        this.dataService.getCourses()
            .subscribe(function (courses) { return _this.courses = courses; });
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
    SelectedCoursePipe.prototype.transform = function (allCourses, fid) {
        var selectedCourses = [];
        for (var _i = 0, allCourses_1 = allCourses; _i < allCourses_1.length; _i++) {
            var course = allCourses_1[_i];
            if (course.folder == fid) {
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

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
    // folders: Folder[] = FOLDERS;
    // courses: Course[] = COURSES;
    // questions: Question[] = QUESTIONS;
    function DataService(http) {
        this.http = http;
        this._folderSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._courseSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._questionSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    DataService.prototype.getFolders = function () {
        var _this = this;
        // return this.folders;
        this.http.get('api/v1/folders')
            .toPromise()
            .then(function (res) {
            _this._folderSource.next(res.json());
        })
            .catch(this.handleError);
        return this._folderSource.asObservable();
    };
    DataService.prototype.getCourses = function () {
        var _this = this;
        this.http.get('api/v1/courses')
            .toPromise()
            .then(function (res) {
            _this._courseSource.next(res.json());
        })
            .catch(this.handleError);
        return this._courseSource.asObservable();
    };
    DataService.prototype.getQuestions = function () {
        var _this = this;
        this.http.get('api/v1/questions')
            .toPromise()
            .then(function (res) {
            _this._questionSource.next(res.json());
        })
            .catch(this.handleError);
        return this._questionSource.asObservable();
    };
    DataService.prototype.getCourse = function (id) {
        return this.http.get("api/v1/courses/" + id)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
        //return this.courses.filter(course => course.cid === id)[0];
    };
    DataService.prototype.getQuestion = function (id) {
        return this.http.get("api/v1/questions/" + id)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
        //return this.courses.filter(course => course.cid === id)[0];
    };
    DataService.prototype.addQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('api/v1/questions', question, options)
            .toPromise()
            .then(function (res) {
            console.log("add a question -- dataService");
            console.dir(res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateQuestion = function (question, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/v1/questions/" + id, question, options)
            .toPromise()
            .then(function (res) {
            console.log("update a question -- dataService");
            console.dir(res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
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