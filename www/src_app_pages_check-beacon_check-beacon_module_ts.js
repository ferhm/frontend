(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_check-beacon_check-beacon_module_ts"],{

/***/ 2046:
/*!*******************************************************************!*\
  !*** ./src/app/pages/check-beacon/check-beacon-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBeaconPageRoutingModule": () => (/* binding */ CheckBeaconPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _check_beacon_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-beacon.page */ 5935);




const routes = [
    {
        path: '',
        component: _check_beacon_page__WEBPACK_IMPORTED_MODULE_0__.CheckBeaconPage
    }
];
let CheckBeaconPageRoutingModule = class CheckBeaconPageRoutingModule {
};
CheckBeaconPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckBeaconPageRoutingModule);



/***/ }),

/***/ 5330:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-beacon/check-beacon.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBeaconPageModule": () => (/* binding */ CheckBeaconPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _check_beacon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-beacon-routing.module */ 2046);
/* harmony import */ var _check_beacon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-beacon.page */ 5935);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/components.module */ 5626);








let CheckBeaconPageModule = class CheckBeaconPageModule {
};
CheckBeaconPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _check_beacon_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckBeaconPageRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [
            _check_beacon_page__WEBPACK_IMPORTED_MODULE_1__.CheckBeaconPage,
        ]
    })
], CheckBeaconPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************************!*\
  !*** ./src/app/pages/check-beacon/check-beacon.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBeaconPage": () => (/* binding */ CheckBeaconPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_check_beacon_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-beacon.page.html */ 577);
/* harmony import */ var _check_beacon_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-beacon.page.scss */ 6398);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);







let CheckBeaconPage = class CheckBeaconPage {
    constructor(globalData, cd, router, translate) {
        this.globalData = globalData;
        this.cd = cd;
        this.router = router;
        this.translate = translate;
        this.achievements = new Array();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    refreshData(event) {
        console.log('Refresh data');
    }
};
CheckBeaconPage.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__.GlobalDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
CheckBeaconPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-check-beacon',
        template: _raw_loader_check_beacon_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_beacon_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckBeaconPage);



/***/ }),

/***/ 6398:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-beacon/check-beacon.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: var(--ion-color-primary);\n}\n\n.wrapper {\n  height: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWJlYWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtBQUFGIiwiZmlsZSI6ImNoZWNrLWJlYWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC8vIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTgwJSA2MCUgYXQgcmlnaHQsd2hpdGUgNzAlLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA3MCUpO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 577:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-beacon/check-beacon.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"wrapper\">\r\n\r\n    \r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-beacon_check-beacon_module_ts.js.map