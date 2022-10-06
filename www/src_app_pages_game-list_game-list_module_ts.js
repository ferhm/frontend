(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_game-list_game-list_module_ts"],{

/***/ 7898:
/*!*************************************************************!*\
  !*** ./src/app/pages/game-list/game-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListPageRoutingModule": () => (/* binding */ GameListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _game_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-list.page */ 1667);




const routes = [
    {
        path: '',
        component: _game_list_page__WEBPACK_IMPORTED_MODULE_0__.GameListPage
    }
];
let GameListPageRoutingModule = class GameListPageRoutingModule {
};
GameListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GameListPageRoutingModule);



/***/ }),

/***/ 7305:
/*!*****************************************************!*\
  !*** ./src/app/pages/game-list/game-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListPageModule": () => (/* binding */ GameListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _game_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-list-routing.module */ 7898);
/* harmony import */ var _game_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-list.page */ 1667);









let GameListPageModule = class GameListPageModule {
};
GameListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _game_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.GameListPageRoutingModule
        ],
        declarations: [_game_list_page__WEBPACK_IMPORTED_MODULE_2__.GameListPage]
    })
], GameListPageModule);



/***/ }),

/***/ 1667:
/*!***************************************************!*\
  !*** ./src/app/pages/game-list/game-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameListPage": () => (/* binding */ GameListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_game_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./game-list.page.html */ 1476);
/* harmony import */ var _game_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-list.page.scss */ 5958);
/* harmony import */ var _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/models/game_play.model */ 8251);
/* harmony import */ var _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let GameListPage = class GameListPage {
    constructor(router, globalData) {
        this.router = router;
        this.globalData = globalData;
        this.elements = new Array();
        this.slideOpts = {
            initialSlide: 0,
            // speed: 400,
            effect: "coverflow",
            spaceBetween: 30,
            slidesPerView: 1,
            // centeredSlides: false,
            // loop: false,
            // autoplay: false,
            // width: 168
        };
        this.GamesEnum = _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum;
    }
    ngOnInit() {
        this.elements = [
            { name: 'Ruleta', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.Roulette, disabled: false },
            { name: 'Dados (lo eliminaré)', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.DICES, disabled: false },
            { name: '3 en raya', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.TICTACTOE, disabled: false },
            { name: 'Memory', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.MEMORY, disabled: false },
            { name: 'Rasca Rasca (passant de ronda)', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.SCRATCH, disabled: true },
            { name: 'Cookie clicker', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.COOKIE, disabled: false },
            { name: 'Preguntados (si trobo api)', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.QUEST, disabled: true },
            { name: 'Snake', code: _shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_2__.GamesEnum.SNAKE, disabled: true },
        ];
        // this.getUserRewards();
    }
    ionViewWillEnter() {
        this.changeSlide();
    }
    slideLoaded() {
        console.log('Loaded slides');
    }
    changeSlide(event) {
        this.slides.getActiveIndex().then(index => {
            console.log(index);
            this.currentElement = this.elements[index];
        });
    }
    openGame() {
        console.log('Detail', this.currentElement);
        this.globalData.initGlobalData(this.currentElement.code);
        // this.router.navigateByUrl(RouterConstants.CHECK_BEACON+ element.id, {state: element.selectedElement});
        this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__.RouterConstants.CHECK_BEACON);
    }
};
GameListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__.GlobalDataService }
];
GameListPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
GameListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-game-list',
        template: _raw_loader_game_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_game_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GameListPage);



/***/ }),

/***/ 5958:
/*!*****************************************************!*\
  !*** ./src/app/pages/game-list/game-list.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: var(--ion-color-primary);\n}\n\n.points-container {\n  margin: 15px;\n}\n\n.slider {\n  height: 75%;\n  margin-bottom: 15px;\n}\n\n.slider .slides {\n  height: 90%;\n}\n\n.slider .background1 {\n  width: 100%;\n  height: 65%;\n  background-color: white;\n  border-radius: 140% 90% 120% 130%/135% 50% 105% 30%;\n  z-index: 10;\n}\n\n.slider .background2 {\n  opacity: 0.5;\n  width: 92%;\n  height: 73%;\n  background-color: white;\n  border-radius: 41% 97% 128% 50%/75% 105% 48% 109%;\n  position: absolute;\n}\n\n.slider .game {\n  position: absolute;\n  z-index: 10000;\n}\n\n.button-game {\n  width: 75%;\n  margin: auto;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n  background-color: white;\n  width: 12px;\n  height: 12px;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background-color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnREFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUk7RUFDSSxXQUFBO0FBQVI7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0FBRFI7O0FBSUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUhSOztBQVFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFMSjs7QUFTSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOUjs7QUFTSTtFQUNJLDRDQUFBO0FBUFIiLCJmaWxlIjoiZ2FtZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxODAlIDYwJSBhdCByaWdodCx3aGl0ZSA3MCUsdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDcwJSk7XHJcbn1cclxuXHJcbi5wb2ludHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgLnNsaWRlc3tcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2dyb3VuZDF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTQwJSA5MCUgMTIwJSAxMzAlLzEzNSUgNTAlIDEwNSUgMzAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFja2dyb3VuZDJ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MyU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDElIDk3JSAxMjglIDUwJS83NSUgMTA1JSA0OCUgMTA5JTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbWV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1nYW1le1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 1476:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-list/game-list.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"points-container\">\n    <app-footer-game [pointsFreeze]=\"globalData.player.magentoPoints\" [validateDisabled]=\"true\"></app-footer-game>\n  </div>\n\n  <div class=\"slider\">\n  \n    <ng-container *ngIf=\"loadingContent || (elements.length === 0 && !loadingContent); else data\">\n\n    </ng-container>\n  \n    <ng-template #data>\n      <ion-slides class=\"slides\" [options]=\"slideOpts\" pager=\"true\" (ionSlideDidChange)=\"changeSlide($event)\" (ionSlidesDidLoad)=\"slideLoaded()\">\n        <ion-slide class=\"slide\" *ngFor=\"let game of elements\">\n          <div class=\"background1\"></div>\n          <div class=\"background2\"></div>\n          <div  class=\"game\" [ngSwitch]=\"game.code\">\n            <!-- TODO: Put images instead of these components -->\n            <div *ngSwitchCase=\"GamesEnum.Roulette\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.DICES\"> {{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.TICTACTOE\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.MEMORY\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.SCRATCH\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.QUEST\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.SNAKE\">{{game.name}}</div>\n            <div *ngSwitchCase=\"GamesEnum.COOKIE\">{{game.name}}</div>\n            <app-loading-game *ngSwitchDefault></app-loading-game>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ng-template>\n    \n    <div class=\"button-game\">\n      <ion-button class=\"thin-button\" [disabled]=\"currentElement?.disabled\" (click)=\"openGame()\" expand=\"block\">\n        <p>{{'PAGES.GAME.PLAY' | translate}}</p>\n        <ion-spinner name=\"crescent\" *ngIf=\"loadingContent\"></ion-spinner>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_game-list_game-list_module_ts.js.map