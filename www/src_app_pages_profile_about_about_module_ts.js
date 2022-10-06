(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_profile_about_about_module_ts"],{

/***/ 2218:
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/about/about-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 1762);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 5234:
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/about/about.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/components/components.module */ 5626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ 2218);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page */ 1762);









let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_2__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 1762:
/*!***************************************************!*\
  !*** ./src/app/pages/profile/about/about.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 7174);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 6534);
/* harmony import */ var _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);







let AboutPage = class AboutPage {
    constructor(router, globalData) {
        this.router = router;
        this.globalData = globalData;
        this.RouterConstants = src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants;
    }
    ngOnInit() {
    }
    openLegal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.LEGAL_ADVICE);
        });
    }
    openMarket() {
        this.globalData.openMarket();
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__.GlobalDataService }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



/***/ }),

/***/ 6534:
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/about/about.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%;\n  text-align: center;\n}\n\n.container .logo {\n  margin: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.container .text-container .title {\n  font-size: 26px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: var(--ion-color-secondary);\n  margin-top: 5px;\n}\n\n.container .text-container .subtitle {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: var(--ion-color-secondary);\n}\n\n.container .advice {\n  font-size: 16px;\n  padding: 5px 10px 5px 10px;\n  margin: 50px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHNGQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURSOztBQUtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFIWjs7QUFNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFKWjs7QUFRSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBTlIiLCJmaWxlIjoiYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDE4MCUgNjAlIGF0IHJpZ2h0LHdoaXRlIDcwJSx2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgNzAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1jb250YWluZXJ7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkdmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAwIDVweCAwO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 7174:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/about/about.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\" [backPage]=\"RouterConstants.PROFILE\"></app-header>\n\n<ion-content>\n    <div class=\"container\">\n        <ion-avatar class=\"logo\" (click)=\"openMarket()\">\n            <ion-img src=\"/assets/icon/icon.png\"></ion-img>\n         </ion-avatar>`\n        <div class=\"text-container\" (click)=\"openMarket()\">\n            <p class=\"title\">GCLoud Granada</p>\n            <p class=\"subtitle\">T-Systems Office Gaming</p>\n        </div>\n        <p (click)=\"openLegal()\" class=\"advice\">\n            {{'PAGES.LEGAL_ADVISE.TITLE' | translate}}\n        </p>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_about_about_module_ts.js.map