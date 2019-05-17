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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/app.component */ "./src/app/root/app.component.ts");
/* harmony import */ var _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/playground/playground.component */ "./src/app/components/playground/playground.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/start-game/start-game.component */ "./src/app/components/start-game/start-game.component.ts");
/* harmony import */ var _redux_store_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/store.module */ "./src/app/redux/store.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_8__["StartGameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _redux_store_module__WEBPACK_IMPORTED_MODULE_9__["StoreModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img, button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLCBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"p-0 m-0 border border-white\" type=\"button\" (click)=\"chooseCard()\" [disabled]=\"checking | async\">\r\n  <img [src]=\"isCardChoosen() ? cardValues.image : skirt\" alt=\"card skirt\">\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Card */ "./src/app/models/Card.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./src/app/redux/actions/index.ts");






var CardComponent = /** @class */ (function () {
    function CardComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.choosenCard = [];
    }
    CardComponent.prototype.chooseCard = function () {
        this.choosenCard.length === 1
            ? this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["chooseCard"])(this.cardValues))
            : this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__["checkCard"])(this.cardValues));
    };
    CardComponent.prototype.isCardChoosen = function () {
        var _this = this;
        return !!this.choosenCard.find(function (card) { return card.id === _this.cardValues.id; });
    };
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.ngRedux.select(["playCards", "choosenCardValue"])
            .subscribe(function (choosenCard) { _this.choosenCard = choosenCard; });
    };
    CardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "skirt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Card__WEBPACK_IMPORTED_MODULE_4__["Card"])
    ], CardComponent.prototype, "cardValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["playCards", "checking"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CardComponent.prototype, "checking", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu.show {\r\n  background-color: #28a745;\r\n}\r\n\r\n.dropdown-item > .btn {\r\n  width: 100%;\r\n  border-radius: 0;\r\n}\r\n\r\n.steps {\r\n  color: #28a745;\r\n  font-size: 23px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtID4gLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnN0ZXBzIHtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-3 mx-auto\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"btn-group\" dropdown [isDisabled]=\"playing\">\r\n        <button class=\"btn btn-success mr-3\" type=\"button\"  dropdownToggle>\r\n          Skirt Cards\r\n          <img [src]=\"skirt | async\" alt=\"skirt\" width=\"20px\" height=\"20px\">\r\n        </button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\">\r\n          <li class=\"dropdown-item text-center p-0\" *ngFor=\"let skirt of (skirts | async)\">\r\n            <button class=\"btn btn-success\" type=\"button\" (click)=\"changeSkirt(skirt)\">\r\n              <img [src]=\"skirt\" width=\"40px\" height=\"40px\" alt=\"skirts\">\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"btn-group\" dropdown [isDisabled]=\"playing\">\r\n        <button class=\"btn btn-success\" type=\"button\" dropdownToggle>Game Difficulty - {{difficulty | async}}</button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\">\r\n          <li class=\"dropdown-item text-center p-0\" *ngFor=\"let option of getPlayOptions()\">\r\n            <button\r\n              class=\"btn btn-success\"\r\n              type=\"button\"\r\n              (click)=\"changeDifficulty(option)\"\r\n            >\r\n              {{option}} | ({{playOptions[option].cols}}х{{playOptions[option].rows}})\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4 text-right\">\r\n      <span class=\"mr-3 steps\" *ngIf=\"steps | async\">Steps: {{steps | async}}</span>\r\n      <button\r\n        class=\"btn btn-success\"\r\n        type=\"button\"\r\n        (click)=\"changePlayingOption()\"\r\n      >\r\n        {{(playing) ? \"Start Screen\" : \"New Game\"}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/app/redux/actions/index.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    HeaderComponent.prototype.changePlayingOption = function () {
        if (this.playing) {
            confirm("Do you really want to quit the game?")
                ? this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["changePlayOption"])())
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"])();
        }
        else {
            this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["changePlayOption"])());
        }
    };
    HeaderComponent.prototype.changeDifficulty = function (difficulty) {
        this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeGameDifficulty"])(difficulty));
    };
    HeaderComponent.prototype.changeSkirt = function (skirt) {
        this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["changeSkirt"])(skirt));
    };
    HeaderComponent.prototype.getPlayOptions = function () {
        return Object.keys(this.playOptions);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playOptionsSubscription = this.ngRedux.select(["game", "playDifficults"]).subscribe(function (options) {
            _this.playOptions = options;
        });
        this.playingSubscription = this.ngRedux.select(["game", "playing"]).subscribe(function (playing) {
            _this.playing = playing;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.playOptionsSubscription.unsubscribe();
        this.playingSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["game", "difficulty"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "difficulty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["game", "skirts"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "skirts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["game", "skirt"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "skirt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["playCards", "steps"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "steps", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/playground/playground.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/playground/playground.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playground {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playground-cols {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWdyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wbGF5Z3JvdW5kLWNvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/playground/playground.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/playground/playground.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"playground\">\r\n  <div class=\"playground-cols\" *ngFor=\"let row of playgroungRows; let i = index\">\r\n    <div [appSize]=\"cardSize\" *ngFor=\"let col of playgroungCols; let j = index\">\r\n      <app-card *ngIf=\"cards[playgroungCols.length * i + j].id\"\r\n        [skirt]=\"skirt\"\r\n        [cardValues]=\"cards[playgroungCols.length * i + j]\"\r\n      ></app-card>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/playground/playground.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/playground/playground.component.ts ***!
  \***************************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./src/app/redux/actions/index.ts");




var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    PlaygroundComponent_1 = PlaygroundComponent;
    PlaygroundComponent.getCardSize = function (properties, difficulty) {
        var playGroundWidth = properties.width, playGroundHeight = properties.height;
        var cardsInTheCol = difficulty.rows, cardsInTheRow = difficulty.cols;
        var whiteSpaceSize = 25;
        var width = (playGroundWidth - whiteSpaceSize * cardsInTheRow) / cardsInTheRow;
        var height = (playGroundHeight - whiteSpaceSize * cardsInTheCol) / cardsInTheCol;
        return { width: width, height: height };
    };
    PlaygroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propertiesSubscription = this.ngRedux
            .select("game").subscribe(function (_a) {
            var difficulty = _a.difficulty, playDifficults = _a.playDifficults, skirt = _a.skirt, playgroundProperties = _a.playgroundProperties;
            var _b = playDifficults[difficulty], rows = _b.rows, cols = _b.cols;
            _this.playDifficults = playDifficults[difficulty];
            _this.playgroungRows = new Array(rows).fill(0);
            _this.playgroungCols = new Array(cols).fill(0);
            _this.skirt = skirt;
            _this.cardSize = PlaygroundComponent_1.getCardSize(playgroundProperties, playDifficults[difficulty]);
        });
        this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["fillCardsValues"])({ cols: this.playDifficults.cols, rows: this.playDifficults.rows, skirt: this.skirt }));
        this.cardsSubscription = this.ngRedux.select(["playCards", "cards"]).subscribe(function (cards) { _this.cards = cards; });
    };
    PlaygroundComponent.prototype.ngOnDestroy = function () {
        this.propertiesSubscription.unsubscribe();
        this.cardsSubscription.unsubscribe();
    };
    var PlaygroundComponent_1;
    PlaygroundComponent = PlaygroundComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-playground",
            template: __webpack_require__(/*! ./playground.component.html */ "./src/app/components/playground/playground.component.html"),
            styles: [__webpack_require__(/*! ./playground.component.css */ "./src/app/components/playground/playground.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/components/start-game/start-game.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/start-game/start-game.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQtZ2FtZS9zdGFydC1nYW1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/start-game/start-game.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/start-game/start-game.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-game\">\r\n  <h2 class=\"text-center\">How to play</h2>\r\n  <p class=\"text-center\">Memory is a counter game where the object is to find pairs.</p>\r\n  <p class=\"text-center\">When the game begins, all pictures are hidden</p>\r\n  <h3 class=\"text-center\">To play:</h3>\r\n  <ol>\r\n    <li>Select two cards to try to match the pictures</li>\r\n    <li>If you match the pictures you can go again</li>\r\n    <li>If they don't match it is this computer turns them</li>\r\n    <li>The player thar finds all pairs wind</li>\r\n    <li>Have Fun!</li>\r\n  </ol>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/start-game/start-game.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/start-game/start-game.component.ts ***!
  \***************************************************************/
/*! exports provided: StartGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameComponent", function() { return StartGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartGameComponent = /** @class */ (function () {
    function StartGameComponent() {
    }
    StartGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-start-game",
            template: __webpack_require__(/*! ./start-game.component.html */ "./src/app/components/start-game/start-game.component.html"),
            styles: [__webpack_require__(/*! ./start-game.component.css */ "./src/app/components/start-game/start-game.component.css")]
        })
    ], StartGameComponent);
    return StartGameComponent;
}());



/***/ }),

/***/ "./src/app/models/Card.ts":
/*!********************************!*\
  !*** ./src/app/models/Card.ts ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(id, value, image) {
        this.id = id;
        this.value = value;
        this.image = image;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/redux/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/redux/actions/index.ts ***!
  \****************************************/
/*! exports provided: GAME_ACTIONS, changePlayOption, changeGameDifficulty, changeSkirt, changePlaygroundSize, PLAY_CARDS_ACTIONS, fillCardsValues, chooseCard, checkCard, resetCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playOptions_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playOptions.action */ "./src/app/redux/actions/playOptions.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTIONS", function() { return _playOptions_action__WEBPACK_IMPORTED_MODULE_0__["GAME_ACTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePlayOption", function() { return _playOptions_action__WEBPACK_IMPORTED_MODULE_0__["changePlayOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeGameDifficulty", function() { return _playOptions_action__WEBPACK_IMPORTED_MODULE_0__["changeGameDifficulty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeSkirt", function() { return _playOptions_action__WEBPACK_IMPORTED_MODULE_0__["changeSkirt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePlaygroundSize", function() { return _playOptions_action__WEBPACK_IMPORTED_MODULE_0__["changePlaygroundSize"]; });

/* harmony import */ var _playCards_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playCards.action */ "./src/app/redux/actions/playCards.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLAY_CARDS_ACTIONS", function() { return _playCards_action__WEBPACK_IMPORTED_MODULE_1__["PLAY_CARDS_ACTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fillCardsValues", function() { return _playCards_action__WEBPACK_IMPORTED_MODULE_1__["fillCardsValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseCard", function() { return _playCards_action__WEBPACK_IMPORTED_MODULE_1__["chooseCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkCard", function() { return _playCards_action__WEBPACK_IMPORTED_MODULE_1__["checkCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return _playCards_action__WEBPACK_IMPORTED_MODULE_1__["resetCards"]; });





/***/ }),

/***/ "./src/app/redux/actions/playCards.action.ts":
/*!***************************************************!*\
  !*** ./src/app/redux/actions/playCards.action.ts ***!
  \***************************************************/
/*! exports provided: PLAY_CARDS_ACTIONS, fillCardsValues, chooseCard, checkCard, resetCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_CARDS_ACTIONS", function() { return PLAY_CARDS_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillCardsValues", function() { return fillCardsValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseCard", function() { return chooseCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCard", function() { return checkCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
var PLAY_CARDS_ACTIONS;
(function (PLAY_CARDS_ACTIONS) {
    PLAY_CARDS_ACTIONS["FILL_CARDS_VALUES"] = "FILL_CARDS_VALUES";
    PLAY_CARDS_ACTIONS["CHOOSE_CARD"] = "CHOOSE_CARD";
    PLAY_CARDS_ACTIONS["CHECK_CARD"] = "CHECK_CARD";
    PLAY_CARDS_ACTIONS["RESET_CARDS"] = "RESET_CARDS";
})(PLAY_CARDS_ACTIONS || (PLAY_CARDS_ACTIONS = {}));
function fillCardsValues(payload) {
    return { type: PLAY_CARDS_ACTIONS.FILL_CARDS_VALUES, payload: payload };
}
function chooseCard(payload) {
    return { type: PLAY_CARDS_ACTIONS.CHOOSE_CARD, payload: payload };
}
function checkCard(payload) {
    return { type: PLAY_CARDS_ACTIONS.CHECK_CARD, payload: payload };
}
function resetCards() {
    return { type: PLAY_CARDS_ACTIONS.RESET_CARDS };
}


/***/ }),

/***/ "./src/app/redux/actions/playOptions.action.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/actions/playOptions.action.ts ***!
  \*****************************************************/
/*! exports provided: GAME_ACTIONS, changePlayOption, changeGameDifficulty, changeSkirt, changePlaygroundSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ACTIONS", function() { return GAME_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayOption", function() { return changePlayOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeGameDifficulty", function() { return changeGameDifficulty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSkirt", function() { return changeSkirt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlaygroundSize", function() { return changePlaygroundSize; });
var GAME_ACTIONS;
(function (GAME_ACTIONS) {
    GAME_ACTIONS["CHANGE_DIFFICULTY"] = "CHANGE_DIFFICULTY";
    GAME_ACTIONS["CHANGE_PLAY_OPTION"] = "CHANGE_PLAY_OPTION";
    GAME_ACTIONS["CHANGE_SKIRT"] = "CHANGE_CHANGE_SKIRT";
    GAME_ACTIONS["CHANGE_PLAYGROUND_SIZE"] = "CHANGE_PLAYGROUND_SIZE";
})(GAME_ACTIONS || (GAME_ACTIONS = {}));
function changePlayOption() {
    return { type: GAME_ACTIONS.CHANGE_PLAY_OPTION };
}
function changeGameDifficulty(payload) {
    return { type: GAME_ACTIONS.CHANGE_DIFFICULTY, payload: payload };
}
function changeSkirt(payload) {
    return { type: GAME_ACTIONS.CHANGE_SKIRT, payload: payload };
}
function changePlaygroundSize(payload) {
    return { type: GAME_ACTIONS.CHANGE_PLAYGROUND_SIZE, payload: payload };
}


/***/ }),

/***/ "./src/app/redux/epics/checkCards.epic.ts":
/*!************************************************!*\
  !*** ./src/app/redux/epics/checkCards.epic.ts ***!
  \************************************************/
/*! exports provided: chooseCardEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseCardEpic", function() { return chooseCardEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");



var chooseCardEpic = function (action$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PLAY_CARDS_ACTIONS"].CHOOSE_CARD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
    var payload = _a.payload;
    return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["checkCard"])(payload);
})); };


/***/ }),

/***/ "./src/app/redux/epics/index.ts":
/*!**************************************!*\
  !*** ./src/app/redux/epics/index.ts ***!
  \**************************************/
/*! exports provided: rootEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootEpic", function() { return rootEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _checkCards_epic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkCards.epic */ "./src/app/redux/epics/checkCards.epic.ts");
/* harmony import */ var _resetCards_epic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetCards.epic */ "./src/app/redux/epics/resetCards.epic.ts");



var rootEpic = Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(_checkCards_epic__WEBPACK_IMPORTED_MODULE_1__["chooseCardEpic"], _resetCards_epic__WEBPACK_IMPORTED_MODULE_2__["resetCardsEpic"]);


/***/ }),

/***/ "./src/app/redux/epics/resetCards.epic.ts":
/*!************************************************!*\
  !*** ./src/app/redux/epics/resetCards.epic.ts ***!
  \************************************************/
/*! exports provided: resetCardsEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCardsEpic", function() { return resetCardsEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");



var resetCardsEpic = function (action$, state$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GAME_ACTIONS"].CHANGE_PLAY_OPTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () { return !state$.value.game.playing; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["resetCards"])(); })); };


/***/ }),

/***/ "./src/app/redux/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/redux/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _playOptions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playOptions.reducer */ "./src/app/redux/reducers/playOptions.reducer.ts");
/* harmony import */ var _playCards_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playCards.reducer */ "./src/app/redux/reducers/playCards.reducer.ts");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    game: _playOptions_reducer__WEBPACK_IMPORTED_MODULE_1__["playOptionsReducer"],
    playCards: _playCards_reducer__WEBPACK_IMPORTED_MODULE_2__["playCardsReducer"]
});


/***/ }),

/***/ "./src/app/redux/reducers/playCards.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/redux/reducers/playCards.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialPlayCardsState, playCardsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPlayCardsState", function() { return initialPlayCardsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playCardsReducer", function() { return playCardsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");
/* harmony import */ var _models_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Card */ "./src/app/models/Card.ts");



var initialPlayCardsState = {
    cards: [],
    choosenCardValue: [],
    checking: false,
    cardsLeft: 1000,
    steps: 0,
    images: {
        cars: [
            "assets/images/values/cars/car1.jpg",
            "assets/images/values/cars/car2.jpg",
            "assets/images/values/cars/car3.jpg",
            "assets/images/values/cars/car4.jpg",
            "assets/images/values/cars/car5.jpg",
            "assets/images/values/cars/car6.jpg",
            "assets/images/values/cars/car7.jpg",
            "assets/images/values/cars/car8.jpg",
            "assets/images/values/cars/car9.jpg",
            "assets/images/values/cars/car10.jpg",
            "assets/images/values/cars/car11.jpg",
            "assets/images/values/cars/car12.jpg"
        ],
        minion: [
            "assets/images/values/minions/minion1.jpg",
            "assets/images/values/minions/minion2.jpg",
            "assets/images/values/minions/minion3.jpg",
            "assets/images/values/minions/minion4.jpg",
            "assets/images/values/minions/minion5.jpg",
            "assets/images/values/minions/minion6.jpg",
            "assets/images/values/minions/minion7.jpg",
            "assets/images/values/minions/minion8.jpg",
            "assets/images/values/minions/minion9.jpg",
            "assets/images/values/minions/minion10.jpg",
            "assets/images/values/minions/minion11.jpg",
            "assets/images/values/minions/minion12.jpg"
        ]
    }
};
function playCardsReducer(state, action) {
    if (state === void 0) { state = initialPlayCardsState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["PLAY_CARDS_ACTIONS"].FILL_CARDS_VALUES:
            var _a = action.payload, rows = _a.rows, cols = _a.cols, skirt = _a.skirt;
            var image = skirt.match("skirts/(.*).jpg")[1];
            var cards = [];
            for (var i = 0; i < rows * cols / 2; i++) {
                for (var j = 0; j < 2; j++) {
                    var id = i * 2 + j + 1;
                    cards.push(new _models_Card__WEBPACK_IMPORTED_MODULE_2__["Card"](id, i, state.images[image][i]));
                }
            }
            cards.sort(function () { return Math.random() - 0.5; });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { cards: cards, cardsLeft: cols * rows });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["PLAY_CARDS_ACTIONS"].RESET_CARDS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initialPlayCardsState);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["PLAY_CARDS_ACTIONS"].CHOOSE_CARD:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { choosenCardValue: state.choosenCardValue.concat([
                    action.payload
                ]), checking: true });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["PLAY_CARDS_ACTIONS"].CHECK_CARD:
            if (state.choosenCardValue.length === 0) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { choosenCardValue: state.choosenCardValue.concat([
                        action.payload
                    ]), checking: false });
            }
            if (action.payload.value === state.choosenCardValue[0].value && action.payload.id !== state.choosenCardValue[0].id) {
                var firstCardIndex = state.cards.findIndex(function (card) { return card.id === state.choosenCardValue[0].id; });
                var secondCardIndex = state.cards.findIndex(function (card) { return card.id === state.choosenCardValue[1].id; });
                var updatedCards = state.cards.slice();
                updatedCards[firstCardIndex] = {};
                updatedCards[secondCardIndex] = {};
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { cards: updatedCards, cardsLeft: state.cardsLeft - 2, choosenCardValue: [], checking: false, steps: state.steps + 1 });
            }
            else {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { choosenCardValue: [], checking: false, steps: state.steps + 1 });
            }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/playOptions.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/redux/reducers/playOptions.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialGameState, playOptionsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialGameState", function() { return initialGameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playOptionsReducer", function() { return playOptionsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/redux/actions/index.ts");


var initialGameState = {
    playing: false,
    difficulty: "low",
    skirt: "/assets/images/skirts/cars.jpg",
    playDifficults: {
        "low": {
            "rows": 2,
            "cols": 5
        },
        "medium": {
            "rows": 3,
            "cols": 6
        },
        "hard": {
            "rows": 3,
            "cols": 8
        },
    },
    skirts: [
        "/assets/images/skirts/cars.jpg",
        "/assets/images/skirts/minion.jpg"
    ],
    playgroundProperties: {
        width: 0,
        height: 0
    }
};
function playOptionsReducer(state, action) {
    if (state === void 0) { state = initialGameState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GAME_ACTIONS"].CHANGE_PLAY_OPTION:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { playing: !state.playing });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GAME_ACTIONS"].CHANGE_DIFFICULTY:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { difficulty: action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GAME_ACTIONS"].CHANGE_SKIRT:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { skirt: action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["GAME_ACTIONS"].CHANGE_PLAYGROUND_SIZE:
            var _a = action.payload, width = _a.width, height = _a.height;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { playgroundProperties: { width: width, height: height } });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/redux/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/app/redux/reducers/index.ts");
/* harmony import */ var _reducers_playOptions_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/playOptions.reducer */ "./src/app/redux/reducers/playOptions.reducer.ts");
/* harmony import */ var _reducers_playCards_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/playCards.reducer */ "./src/app/redux/reducers/playCards.reducer.ts");
/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./epics */ "./src/app/redux/epics/index.ts");








var StoreModule = /** @class */ (function () {
    function StoreModule(ngRedux) {
        this.ngRedux = ngRedux;
        var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_3__["createEpicMiddleware"])();
        ngRedux.configureStore(_reducers__WEBPACK_IMPORTED_MODULE_4__["rootReducer"], { game: _reducers_playOptions_reducer__WEBPACK_IMPORTED_MODULE_5__["initialGameState"], playCards: _reducers_playCards_reducer__WEBPACK_IMPORTED_MODULE_6__["initialPlayCardsState"] }, epicMiddleware);
        epicMiddleware.run(_epics__WEBPACK_IMPORTED_MODULE_7__["rootEpic"]);
    }
    StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgReduxModule"]
            ],
            exports: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/root/app.component.css":
/*!****************************************!*\
  !*** ./src/app/root/app.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".play-container {\r\n  width: 70vw;\r\n  height: 100vh;\r\n  background-color: #a9a9a9;\r\n}\r\n\r\n.playground {\r\n  background-color: #00ffff;\r\n  width: 90%;\r\n  height: 80%;\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vdC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxufVxyXG5cclxuLnBsYXlncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmY7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/root/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/root/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"play-container mx-auto p-1\">\r\n  <app-header></app-header>\r\n  <section class=\"playground mx-auto\" appElementWidth [ngSwitch]=\"playing | async\">\r\n    <app-start-game *ngSwitchCase=\"false\"></app-start-game>\r\n    <app-playground *ngSwitchDefault></app-playground>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/root/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/root/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["game", "playing"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppComponent.prototype, "playing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(["game", "difficulty"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppComponent.prototype, "difficulty", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/root/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/root/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/element-width.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/element-width.directive.ts ***!
  \**************************************************************/
/*! exports provided: ElementWidthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementWidthDirective", function() { return ElementWidthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm5/angular-redux-store.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./src/app/redux/actions/index.ts");




var ElementWidthDirective = /** @class */ (function () {
    function ElementWidthDirective(el, ngRedux) {
        this.el = el;
        this.ngRedux = ngRedux;
    }
    ElementWidthDirective.prototype.onResize = function () {
        this.resize();
    };
    ElementWidthDirective.prototype.resize = function () {
        var _a = this.el.nativeElement.getBoundingClientRect(), width = _a.width, height = _a.height;
        this.ngRedux.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["changePlaygroundSize"])({ width: Math.trunc(width), height: Math.trunc(height) }));
    };
    ElementWidthDirective.prototype.ngOnInit = function () {
        this.resize();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ElementWidthDirective.prototype, "onResize", null);
    ElementWidthDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appElementWidth]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], ElementWidthDirective);
    return ElementWidthDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/size.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/directives/size.directive.ts ***!
  \*****************************************************/
/*! exports provided: SizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeDirective", function() { return SizeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SizeDirective = /** @class */ (function () {
    function SizeDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    SizeDirective.prototype.ngOnChanges = function (changes) {
        var _a = changes.size.currentValue, width = _a.width, height = _a.height;
        this.elementWidth = width;
        this.elementHeight = height;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appSize"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SizeDirective.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.width.px"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SizeDirective.prototype, "elementWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.height.px"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SizeDirective.prototype, "elementHeight", void 0);
    SizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSize]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SizeDirective);
    return SizeDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_element_width_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/element-width.directive */ "./src/app/shared/directives/element-width.directive.ts");
/* harmony import */ var _directives_size_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/size.directive */ "./src/app/shared/directives/size.directive.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _directives_element_width_directive__WEBPACK_IMPORTED_MODULE_2__["ElementWidthDirective"],
                _directives_size_directive__WEBPACK_IMPORTED_MODULE_3__["SizeDirective"]
            ],
            imports: [],
            exports: [
                _directives_element_width_directive__WEBPACK_IMPORTED_MODULE_2__["ElementWidthDirective"],
                _directives_size_directive__WEBPACK_IMPORTED_MODULE_3__["SizeDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular_training\match-match-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map