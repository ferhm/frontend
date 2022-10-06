(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_prize-list_prize-list_module_ts"],{

/***/ 6513:
/*!***************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-list-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeListPageRoutingModule": () => (/* binding */ PrizeListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _prize_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prize-list.page */ 7474);




const routes = [
    {
        path: '',
        component: _prize_list_page__WEBPACK_IMPORTED_MODULE_0__.PrizeListPage
    },
];
let PrizeListPageRoutingModule = class PrizeListPageRoutingModule {
};
PrizeListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrizeListPageRoutingModule);



/***/ }),

/***/ 2364:
/*!*******************************************************!*\
  !*** ./src/app/pages/prize-list/prize-list.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeListPageModule": () => (/* binding */ PrizeListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _prize_type_modal_prize_type_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prize-type-modal/prize-type-modal.component */ 4426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _prize_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prize-list-routing.module */ 6513);
/* harmony import */ var _prize_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prize-list.page */ 7474);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/components.module */ 5626);










let PrizeListPageModule = class PrizeListPageModule {
};
PrizeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _prize_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrizeListPageRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        ],
        declarations: [
            _prize_list_page__WEBPACK_IMPORTED_MODULE_2__.PrizeListPage,
            _prize_type_modal_prize_type_modal_component__WEBPACK_IMPORTED_MODULE_0__.PrizeTypeModalComponent
        ],
    })
], PrizeListPageModule);



/***/ }),

/***/ 7474:
/*!*****************************************************!*\
  !*** ./src/app/pages/prize-list/prize-list.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeListPage": () => (/* binding */ PrizeListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_prize_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prize-list.page.html */ 344);
/* harmony import */ var _prize_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prize-list.page.scss */ 3413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/reward.service */ 5615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);









let PrizeListPage = class PrizeListPage {
    constructor(globalData, rewardService, router) {
        this.globalData = globalData;
        this.rewardService = rewardService;
        this.router = router;
        this.elements = new Array();
        this.elementsPerPage = 10;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
    }
    ngOnInit() {
        this.getUserRewards();
    }
    array(n) {
        return Array(n);
    }
    getUserRewards(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!event)
                    this.loadingContent = true;
                this.currentElement = this.elements.length;
                const data = yield this.rewardService.getUserRewards(this.currentElement, this.elementsPerPage).toPromise();
                this.totalElements = data.count;
                this.elements = this.elements.concat(data.rows);
                console.log('Prizes ', this.elements, this.totalElements);
                if (event) {
                    yield event.target.complete();
                }
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
    refreshData(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.elements = new Array();
            yield this.getUserRewards();
            event.target.complete();
        });
    }
    openDetail(element) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Detail', element);
            this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__.RouterConstants.PRIZE_DETAIL + element.id, { state: element.selectedElement });
        });
    }
};
PrizeListPage.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__.GlobalDataService },
    { type: _services_reward_service__WEBPACK_IMPORTED_MODULE_2__.RewardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PrizeListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-prize-list',
        template: _raw_loader_prize_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prize_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrizeListPage);



/***/ }),

/***/ 3413:
/*!*******************************************************!*\
  !*** ./src/app/pages/prize-list/prize-list.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.no-items {\n  font-style: italic;\n  font-style: italic;\n  color: white;\n  width: 250px;\n  margin: auto;\n  background: var(--ion-color-primary);\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.no-items .no-items-img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  height: 65px;\n}\n\n.no-items p {\n  margin-top: 0;\n}\n\n.points-container {\n  margin: 15px;\n}\n\n.list {\n  background: transparent;\n}\n\n.list .reward {\n  --background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  border-radius: 5px;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n  --padding-start: 0;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-font-size: 25px;\n}\n\n.list .reward img {\n  max-width: 100%;\n  border: 0;\n  width: 100px;\n  height: 100%;\n  object-fit: cover;\n}\n\n.list .reward ion-label {\n  margin: 10px 0 10px 20px;\n}\n\n.list .reward ion-label .title {\n  font-weight: bolder;\n  margin-bottom: 8px;\n}\n\n.list .reward ion-label .magentos {\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n\n.list .reward ion-label .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXplLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0ZBQUE7QUFBSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFNSTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSlI7O0FBT0k7RUFDSSxhQUFBO0FBTFI7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBVUE7RUFDSSx1QkFBQTtBQVBKOztBQVNJO0VBQ0ksbUJBQUE7RUFDQSw0RUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtBQVJSOztBQVVRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUlo7O0FBV1E7RUFDSSx3QkFBQTtBQVRaOztBQVdZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQVRoQjs7QUFZWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQVZoQjs7QUFhWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQXVCLGFBQUE7RUFFdkIscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFWaEIiLCJmaWxlIjoicHJpemUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTgwJSA2MCUgYXQgcmlnaHQsd2hpdGUgNzAlLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA3MCUpO1xyXG59XHJcblxyXG4vLyAuaXRlbS1kaXNhYmxlZHtcclxuLy8gICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLm5vLWl0ZW1ze1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgLm5vLWl0ZW1zLWltZ3tcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ucG9pbnRzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLnJld2FyZHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDBweCAxMHB4LCByZ2IoMCAwIDAgLyA1JSkgMHB4IDNweCAwcHg7XHJcbiAgICAgICAgLy8gLS1ib3JkZXItY29sb3I6IHllbGxvdztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tZGV0YWlsLWljb24tZm9udC1zaXplOiAyNXB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hZ2VudG9zIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDE1cHggMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgICAgLyogZmFsbGJhY2sgKi9cclxuICAgICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDMycHg7ICAgICAgLyogZmFsbGJhY2sgKi9cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAubWFnZW50b3N7XHJcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgIC8vICAgICAubWFnZW50by1pY29ue1xyXG4gICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIC8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBwe1xyXG4gICAgICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 344:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize-list/prize-list.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"points-container\">\n    <app-footer-game [pointsFreeze]=\"globalData.player.magentoPoints\" [validateDisabled]=\"true\"></app-footer-game>\n  </div>\n\n  <div class=\"list-container\">\n\n    <!-- <p class=\"title-cmp\">Retos actuales</p> -->\n  \n    <ng-container *ngIf=\"loadingContent; else data\">\n      <ion-list class=\"list\">\n        <ion-item *ngFor=\"let i of array(5)\" class=\"reward\">\n          <img>\n          <ion-label>\n            <p><ion-skeleton-text animated style=\"width: 70%; height: 30px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 20px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 50px;\"></ion-skeleton-text></p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ng-container>\n  \n    <ng-template #data>\n\n      <ion-list class=\"list\">\n        <!-- <ion-item detail [disabled]=\"globalData.player.magentoPoints<item.points\" class=\"reward\" button (click)=\"openDetail(item)\" *ngFor=\"let item of elements\"> -->\n        <ion-item detail class=\"reward\" button (click)=\"openDetail(item)\" *ngFor=\"let item of elements\">\n          <img [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item.imageURL\">\n          <ion-label>\n            <p class=\"magentos text-22\">{{item.points}} m</p>\n            <p class=\"title ion-text-wrap text-18\">{{item.title}}</p>\n            <p class=\"description ion-text-wrap text-16\">{{item.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  \n      <ion-infinite-scroll (ionInfinite)=\"getUserRewards($event)\" *ngIf=\"elements.length > 0\" [disabled]=\"totalElements === elements.length\">\n        <ion-infinite-scroll-content class=\"loading-spinner\" loadingSpinner=\"crescent\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ng-template>\n  \n    <div *ngIf=\"elements.length === 0 && !loadingContent\" class=\"no-items\">\n      <ion-img class=\"no-items-img\" src=\"/assets/icon/icon.png\"></ion-img>\n      <p>{{ 'PAGES.PRIZES.NO_DATA' | translate }}</p>\n    </div>\n  \n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prize-list_prize-list_module_ts.js.map