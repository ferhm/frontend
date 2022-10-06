(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 4135:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 8592:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreen": () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4135);

const SplashScreen = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SplashScreen', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_splash-screen_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8962)).then(m => new m.SplashScreenWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/alert/alert.service */ 9379);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/language/language.service */ 4701);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var _shared_interceptors_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/interceptors/error-handler.service */ 9303);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/toast */ 74);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/splash-screen */ 8592);














let LoginPage = class LoginPage {
    constructor(router, gd, errorHandler, translate, languageService, alertService) {
        this.router = router;
        this.gd = gd;
        this.errorHandler = errorHandler;
        this.translate = translate;
        this.languageService = languageService;
        this.alertService = alertService;
        this.eyeIcon = 'eye';
        this.passwordTypeInput = 'password';
        this.loading = false;
        this.rememberCredentials = false;
        this.checked = false;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.hideSplash();
    }
    hideSplash() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_9__.SplashScreen.hide();
        });
    }
    changeLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
            ];
            let name1 = this.translate.instant('PAGES.LOGIN.TRANSLATIONS.SPANISH');
            let name2 = this.translate.instant('PAGES.LOGIN.TRANSLATIONS.ENGLISH');
            let name3 = this.translate.instant('PAGES.LOGIN.TRANSLATIONS.CATALAN');
            let name4 = this.translate.instant('PAGES.LOGIN.TRANSLATIONS.RUSSIAN');
            const inputs = [
                { name: name1, type: 'radio', label: name1, value: 'es', checked: (this.languageService.currentLanguage === 'es') ? true : false },
                { name: name2, type: 'radio', label: name2, value: 'en', checked: (this.languageService.currentLanguage === 'en') ? true : false },
                { name: name2, type: 'radio', label: name4, value: 'ru', checked: (this.languageService.currentLanguage === 'ru') ? true : false },
                { name: name2, type: 'radio', label: name3, value: 'ca', checked: (this.languageService.currentLanguage === 'ca') ? true : false },
            ];
            let result = yield this.alertService.showBasicAlert(this.translate.instant('PAGES.LOGIN.TRANSLATIONS.CHANGE'), this.translate.instant('PAGES.LOGIN.TRANSLATIONS.SELECT'), buttons, inputs);
            if (result && result.data && result.role === 'accept')
                this.languageService.currentLanguage = result.data.values;
            this.languageService.changeLanguage(this.languageService.currentLanguage);
        });
    }
    isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_7__.RouterConstants.CHECK_BEACON, { replaceUrl: true });
            }
            catch (error) {
                let error_message = yield this.errorHandler.showMessage(error);
                yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_8__.Toast.show({ text: error_message, duration: 'long', position: 'bottom' });
                yield this.gd.removeSession();
                console.log("Error", error);
                this.loading = false;
            }
        });
    }
    togglePasswordMode() {
        this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
        this.eyeIcon = this.passwordTypeInput === 'text' ? 'eye-off' : 'eye';
        const nativeEl = this.passwordEye.nativeElement.querySelector('input');
        const inputSelection = nativeEl.selectionStart;
        nativeEl.focus();
        setTimeout(() => { nativeEl.setSelectionRange(inputSelection, inputSelection); }, 1);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_6__.GlobalDataService },
    { type: _shared_interceptors_error_handler_service__WEBPACK_IMPORTED_MODULE_5__.ErrorHandlerService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
LoginPage.propDecorators = {
    passwordEye: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['passwordEyeRegister', { read: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: var(--ion-color-primary);\n}\n\n.back-arrow {\n  color: white;\n  font-size: 30px;\n  margin: 30px;\n}\n\n.login-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%;\n  text-align: center;\n  color: white;\n}\n\n.login-wrapper .logo {\n  width: 70px;\n  margin: auto;\n  margin-bottom: 60px;\n}\n\n.login-wrapper .login-item {\n  margin-top: 15px;\n  color: white;\n  font-size: 20px;\n  border-bottom: 2px solid white;\n  --highlight-height: 0;\n}\n\n.login-wrapper .login-item.item-has-focus {\n  color: white !important;\n}\n\n.login-wrapper .privacy {\n  display: flex;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.login-wrapper .privacy ion-checkbox {\n  --border-color: white;\n}\n\n.login-wrapper .privacy p {\n  color: white;\n  margin: unset;\n  margin-left: 5px;\n}\n\n.login-wrapper .privacy p a {\n  color: white;\n  text-decoration: underline;\n}\n\n.login-wrapper .button-margin {\n  margin-top: 30px;\n}\n\n.login-wrapper .remember {\n  margin-top: 15px;\n  color: white;\n  font-size: 17px;\n}\n\n.login-wrapper .btn_eye_icon {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: white;\n  background: transparent;\n  z-index: 1000;\n}\n\n.login-wrapper .btn_eye_icon ion-icon {\n  font-size: 25px;\n  margin-bottom: 10px;\n}\n\n.login-wrapper .not-user {\n  text-decoration: underline;\n}\n\n.header {\n  display: flex;\n  color: white;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header .top {\n  font-size: 18px;\n  margin: 35px;\n}\n\n.header .top-icon {\n  font-size: 35px;\n  margin: 35px;\n}\n\n.bottom {\n  margin-top: 25px;\n  padding-top: 10px;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 20px;\n  text-align: center;\n  width: 100%;\n}\n\n.bottom p {\n  color: white;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px;\n  margin: 5px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaEJGOztBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFqQko7O0FBb0JFO0VBQ0UsdUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7O0FBcUJJO0VBQ0UscUJBQUE7QUFuQk47O0FBc0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXBCUjs7QUFzQlE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUFwQlo7O0FBeUJFO0VBQ0UsZ0JBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXhCSjs7QUEyQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQXpCSjs7QUEyQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUF6Qk47O0FBNkJFO0VBQ0UsMEJBQUE7QUEzQko7O0FBZ0NBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBN0JGOztBQStCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBN0JKOztBQWdDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBOUJKOztBQWtDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhDRjs7QUFrQ0U7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFoQ04iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJhY2stYXJyb3cge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4vLyAgIC5kb3dubG9hZC1zcGlubmVyIHtcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICBib3R0b206IDA7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbi8vICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4vLyAgICAgICBpb24tc3Bpbm5lciB7XHJcbi8vICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4vLyAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XHJcbi8vICAgICAgIH1cclxuLy8gICB9XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAubG9naW4taXRlbS5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wcml2YWN5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgaW9uLWNoZWNrYm94e1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5yZW1lbWJlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bl9leWVfaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3QtdXNlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAudG9we1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLnRvcC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luOiAzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmFzaWMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgcCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <div class=\"header\">\r\n    <ion-icon class=\"top-icon\" name=\"language-outline\" (click)=\"changeLanguage()\"></ion-icon>\r\n    <div class=\"top\">\r\n      <p>{{environment.LABEL}} {{gd.userSession.appVersion}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"login-wrapper\">\r\n    <!-- <ion-img class=\"logo\" src=\"/assets/icon/deutsche-telekom-white.png\"></ion-img> -->\r\n    <ion-img class=\"logo\" src=\"https://www.brand-design.telekom.com/typo3conf/ext/bd_sitepackage/Resources/Public/Images/Logo/telekom-logo-en.svg\"></ion-img>\r\n\r\n    <ng-container>\r\n      <p class=\"text-22\">Login with your credentials</p>\r\n      <ion-item class=\"login-item\" lines=\"none\" [disabled]=\"loading\">\r\n        <ion-label color=\"white\" position=\"floating\">Username</ion-label>\r\n        <ion-input color=\"white\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"login-item\" [disabled]=\"loading\">\r\n        <ion-label color=\"white\" position=\"floating\">Password</ion-label>\r\n        <ion-input color=\"white\" #passwordEyeRegister type=\"password\" [type]=\"passwordTypeInput\" clearOnEdit=\"false\" [(ngModel)]=\"password\"></ion-input>\r\n        <button item-end class=\"btn_eye_icon\" (click)=\"togglePasswordMode()\">\r\n          <ion-icon color=\"white\" [name]=\"eyeIcon\">\r\n          </ion-icon>\r\n      </button>\r\n      </ion-item>\r\n      <ion-item class=\"remember\" lines=\"none\">\r\n        <ion-label>Recordar credenciales</ion-label>\r\n        <ion-toggle slot=\"start\" [(ngModel)]=\"rememberCredentials\" [disabled]=\"loading\"></ion-toggle>\r\n      </ion-item>\r\n\r\n      <ion-button class=\"big-icon-button button-margin\" [disabled]=\"!username || !password || loading\" (click)=\"login()\" expand=\"block\">\r\n        <p>Acceder</p>\r\n        <ion-spinner name=\"crescent\" *ngIf=\"loading\"></ion-spinner>\r\n      </ion-button>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map