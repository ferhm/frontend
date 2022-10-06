(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 7618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/config/constants/router.constants */ 7487);





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'achievement-list/detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_achievement-list_achievement-detail_achievement-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/achievement-list/achievement-detail/achievement-detail.module */ 3693)).then(m => m.AchievementDetailPageModule)
    },
    {
        path: 'prize-list/detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_prize-list_prize-type-modal_prize-type-modal_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_prize-list_prize-detail_prize-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/prize-list/prize-detail/prize-detail.module */ 8190)).then(m => m.PrizeDetailPageModule)
    },
    { path: '**', redirectTo: _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__.RouterConstants.LOGIN },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/language/language.service */ 4701);
/* harmony import */ var _shared_services_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/connectivity/connectivity.service */ 7448);
/* harmony import */ var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ibeacon/ngx */ 573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/status-bar */ 4909);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 7370);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shared_services_push_notifications_push_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/push-notifications/push-notifications.service */ 1130);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/app */ 2138);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 2340);














let AppComponent = class AppComponent {
    constructor(screenOrientation, ibeacon, zone, platform, connectivity, language, pushNotificationService, globalDataService) {
        this.screenOrientation = screenOrientation;
        this.ibeacon = ibeacon;
        this.zone = zone;
        this.platform = platform;
        this.connectivity = connectivity;
        this.language = language;
        this.pushNotificationService = pushNotificationService;
        this.globalDataService = globalDataService;
        this.initializeApp();
        this.requestPermissions();
    }
    requestPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                let that = this;
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    yield that.ibeacon.requestAlwaysAuthorization();
                    yield this.connectivity.geolocationRequestPermission();
                }), 500);
            }));
        });
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                yield this.language.initLanguage();
                this.universalLinkListener();
                this.pushNotificationService.register();
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_6__.StatusBar.setBackgroundColor({ color: '#E20074' });
                // await SplashScreen.hide();
                // setTimeout(async () => { { await SplashScreen.hide(); } }, 500)
            }));
        });
    }
    universalLinkListener() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_9__.App.addListener('appUrlOpen', (event) => {
            this.zone.run(() => {
                // event.url = "https://gotoffice.t-systems.es/";
                const appPath = event.url.split(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.UNIVERSAL_DOMAIN).pop();
                console.log('URL received', event.url, 'APP domain', src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.UNIVERSAL_DOMAIN, appPath);
                if (appPath)
                    this.globalDataService.redirectionURL = appPath;
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation },
    { type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_5__.IBeacon },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _shared_services_connectivity_connectivity_service__WEBPACK_IMPORTED_MODULE_4__.ConnectivityService },
    { type: _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService },
    { type: _shared_services_push_notifications_push_notifications_service__WEBPACK_IMPORTED_MODULE_8__.PushNotificationsService },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__.GlobalDataService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customTranslateLoader": () => (/* binding */ customTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 7370);
/* harmony import */ var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ibeacon/ngx */ 573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 7618);
/* harmony import */ var _shared_interceptors_headers_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/interceptors/headers.interceptor */ 474);
/* harmony import */ var _shared_interceptors_error_handling_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/interceptors/error-handling.interceptor */ 3859);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);










//HTTP






const INTERCEPTOR_PROVIDERS = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_headers_interceptor__WEBPACK_IMPORTED_MODULE_5__.HeadersInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_error_handling_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorHandlingInterceptor, multi: true }
];
// Load JSON translations.
function customTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                    useFactory: customTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient]
                }
            }),
        ],
        providers: [
            _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_1__.IBeacon,
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_0__.ScreenOrientation,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard,
            INTERCEPTOR_PROVIDERS,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2123:
/*!**********************************************************!*\
  !*** ./src/app/shared/config/constants/api.constants.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TIMEOUT": () => (/* binding */ TIMEOUT),
/* harmony export */   "RequestEndpoints": () => (/* binding */ RequestEndpoints)
/* harmony export */ });
const TIMEOUT = 30000;
class RequestEndpoints {
}
RequestEndpoints.LOGIN_URL = '/user-login';
RequestEndpoints.LOGOUT = '/user-logout';
RequestEndpoints.REGISTER_URL = '/user-register';
RequestEndpoints.LOGOUT_URL = '/logout';
RequestEndpoints.PLAY = '/play-game';
RequestEndpoints.GET_MAGENTOS = '/game-data';
RequestEndpoints.GET_RESOURCE_UUID = '/resource-uuid';
RequestEndpoints.GET_REWARDS = '/user-rewards';
RequestEndpoints.GET_REWARD = '/user-reward';
RequestEndpoints.REDEEM_REWARD = '/rewards-redeem';
RequestEndpoints.GET_ACHIEVEMENTS = '/user-achievements';
RequestEndpoints.GET_ACHIEVEMENT = '/user-achievement';
RequestEndpoints.GET_CHALLENGES = '/user-challenges';
RequestEndpoints.GET_CHALLENGE = '/user-challenge';
RequestEndpoints.PROCESS_CHALLENGE = '/user-challenge/process';
RequestEndpoints.GET_COMMENTS = '/user-comments';
RequestEndpoints.GET_PROFILE_ORDERS = '/profile/user-orders';
RequestEndpoints.GET_PROFILE_ORDER = '/profile/user-order';
RequestEndpoints.GET_PROFILE_REMINDERS = '/profile/reminders';
RequestEndpoints.GET_PROFILE_ACTIVITY = '/profile/user-activity';
RequestEndpoints.GET_USER_OFFICE = '/profile/user-office';
RequestEndpoints.COMMENTS = '/comments';


/***/ }),

/***/ 7487:
/*!*************************************************************!*\
  !*** ./src/app/shared/config/constants/router.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterConstants": () => (/* binding */ RouterConstants)
/* harmony export */ });
const RouterConstants = {
    LOGIN: '/login',
    REGISTER: '/register',
    TABS: '/tabs',
    CHECK_BEACON: '/tabs/check-beacon',
    PRIZE_LIST: '/tabs/prize-list',
    PRIZE_DETAIL: '/prize-list/detail/',
    ACHIEVEMENT_LIST: '/tabs/achievement-list',
    ACHIEVEMENT_DETAIL: '/achievement-list/detail/',
    GAME_LIST: '/tabs/game-list',
    PROFILE: '/tabs/profile',
    PROFILE_ORDERS: '/tabs/profile/orders',
    PROFILE_ORDERS_DETAIL: '/profile/orders/detail/',
    PROFILE_ACTIVITY: '/tabs/profile/activity',
    PROFILE_CONFIGURATION: '/tabs/profile/configuration',
    PROFILE_ABOUT: '/tabs/profile/about',
    LEGAL_ADVICE: '/legal-advice'
};


/***/ }),

/***/ 7374:
/*!**************************************************************!*\
  !*** ./src/app/shared/config/constants/storage.constants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageConstants": () => (/* binding */ StorageConstants)
/* harmony export */ });
class StorageConstants {
}
StorageConstants.TOKEN = 'tokenJWT';
StorageConstants.USER_DATA = 'userData';


/***/ }),

/***/ 7618:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let AuthGuard = class AuthGuard {
    constructor(
    // private authService: AuthService,
    gd, router, translate) {
        this.gd = gd;
        this.router = router;
        this.translate = translate;
    }
    canActivate(next, estado) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return resolve(true);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__.GlobalDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 9303:
/*!**************************************************************!*\
  !*** ./src/app/shared/interceptors/error-handler.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": () => (/* binding */ ErrorHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants/router.constants */ 7487);






let ErrorHandlerService = class ErrorHandlerService {
    constructor(gb, router, translate) {
        this.gb = gb;
        this.router = router;
        this.translate = translate;
    }
    showMessage(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                let text = this.translate.instant('ERRORS.GENERIC');
                switch (error.status) {
                    case 0:
                        text = this.translate.instant('ERRORS.0');
                        break;
                    case 310:
                        text = this.translate.instant('ERRORS.310');
                        window.location.href = error.error.url;
                        break;
                    case 400:
                        if (error.error && error.error.code) {
                            text = this.translate.instant('ERRORS.400.' + error.error.code);
                        }
                        else {
                            text = this.translate.instant('ERRORS.GENERIC');
                        }
                        break;
                    case 401:
                        text = this.translate.instant('ERRORS.401');
                        this.gb.userSession.tokenJWT = undefined;
                        console.log('Route of 401', this.router.url, _config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__.RouterConstants.LOGIN, this.router.url !== _config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__.RouterConstants.LOGIN);
                        if (this.router.url !== _config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__.RouterConstants.LOGIN && this.router.url !== '/') {
                            this.router.navigateByUrl(_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_1__.RouterConstants.LOGIN, { replaceUrl: true });
                        }
                        else {
                            yield this.gb.removeSession();
                        }
                        break;
                    case 403:
                        text = this.translate.instant('ERRORS.403');
                        break;
                    case 426:
                        text = this.translate.instant('ERRORS.426');
                        break;
                    case 500:
                        text = this.translate.instant('ERRORS.500');
                        break;
                    case 505:
                        text = this.translate.instant('ERRORS.505');
                        yield this.gb.handleUpdateVersion();
                        break;
                    case 525:
                        text = error.error.message;
                        break;
                    case 525:
                        text = error.error.message;
                        break;
                    default:
                        text = this.translate.instant('ERRORS.GENERIC');
                }
                resolve(text);
            }));
        });
    }
};
ErrorHandlerService.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__.GlobalDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
ErrorHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ErrorHandlerService);



/***/ }),

/***/ 3859:
/*!*******************************************************************!*\
  !*** ./src/app/shared/interceptors/error-handling.interceptor.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlingInterceptor": () => (/* binding */ ErrorHandlingInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler.service */ 9303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/toast */ 74);






let ErrorHandlingInterceptor = class ErrorHandlingInterceptor {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
        this.isLoading = false;
    }
    intercept(req, next) {
        return this.handleRequest(next, req);
    }
    handleRequest(next, req) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((event) => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.requestErrorHandling(error)));
    }
    requestErrorHandling(error) {
        this.filterError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }
    filterError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Interceptor', error);
            let error_message = yield this.errorHandler.showMessage(error);
            yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_1__.Toast.show({ text: error_message, duration: 'long', position: 'bottom' });
        });
    }
};
ErrorHandlingInterceptor.ctorParameters = () => [
    { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_0__.ErrorHandlerService }
];
ErrorHandlingInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ErrorHandlingInterceptor);



/***/ }),

/***/ 474:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/headers.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadersInterceptor": () => (/* binding */ HeadersInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ 6256);






let HeadersInterceptor = class HeadersInterceptor {
    constructor(authService, gd) {
        this.authService = authService;
        this.gd = gd;
    }
    intercept(req, next) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers = headers.append('Content-Type', req.method === 'GET' ? 'application/json' : 'application/x-www-form-urlencoded');
        if (req.urlWithParams.indexOf('user-login') === -1)
            headers = headers.append('Authorization', 'Bearer ' + this.gd.userSession.tokenJWT);
        const authReq = req.clone({ withCredentials: true, headers });
        return this.handleRequest(next, authReq);
    }
    handleRequest(next, req) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event));
    }
};
HeadersInterceptor.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__.GlobalDataService }
];
HeadersInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], HeadersInterceptor);



/***/ }),

/***/ 8251:
/*!**************************************************!*\
  !*** ./src/app/shared/models/game_play.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "GamePlay": () => (/* binding */ GamePlay),
/* harmony export */   "GamesEnum": () => (/* binding */ GamesEnum)
/* harmony export */ });
class Player {
    constructor() {
        this.magentoPoints = 0;
        this.pointsFreeze = 0;
    }
}
class GamePlay {
    constructor(obj) {
        if (obj) {
            this.inOffice = obj.inOffice;
            this.canActivateGame = obj.canActivateGame;
            this.playingGame = obj.playingGame;
            this.finishedGame = obj.finishedGame;
            this.receivingReward = obj.receivingReward;
            this.countdownTime = obj.countdownTime;
            this.nextSpin = obj.nextSpin;
            this.reward = obj.reward;
            this.result = obj.result;
            this.gameOptions = obj.gameOptions;
            this.gameState = obj.gameState;
            this.currentPlayNumber = obj.currentPlayNumber;
            this.totalPlayNumber = obj.totalPlayNumber;
            this.gameCode = obj.gameCode;
            this.maxPlays = obj.maxPlays;
        }
        else {
            this.maxPlays = false;
            this.inOffice = false;
            this.canActivateGame = false;
            this.playingGame = false;
            this.finishedGame = true;
            this.receivingReward = false;
            this.countdownTime = '';
            this.nextSpin = undefined;
            this.currentPlayNumber = 0;
            this.totalPlayNumber = 0;
        }
    }
}
var GamesEnum;
(function (GamesEnum) {
    GamesEnum["Roulette"] = "RLT";
    GamesEnum["DICES"] = "DICE";
    GamesEnum["TICTACTOE"] = "TTT";
    GamesEnum["MEMORY"] = "MMY";
    GamesEnum["SCRATCH"] = "SCTCH";
    GamesEnum["QUEST"] = "QUEST";
    GamesEnum["SNAKE"] = "SNAKE";
    GamesEnum["COOKIE"] = "CCK";
})(GamesEnum || (GamesEnum = {}));


/***/ }),

/***/ 3709:
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSession": () => (/* binding */ UserSession)
/* harmony export */ });
class UserSession {
    constructor() { }
}


/***/ }),

/***/ 9379:
/*!********************************************************!*\
  !*** ./src/app/shared/services/alert/alert.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showBasicAlert(header, message, buttons, inputs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'custom-basic-alert',
                    header, message, buttons, inputs,
                });
                yield alert.present();
                const data = yield alert.onDidDismiss();
                resolve(data);
            }));
        });
    }
    showGameAlert(header, message, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'custom-game-alert',
                    animated: true, header, message, buttons
                });
                yield alert.present();
                const data = yield alert.onDidDismiss();
                resolve(data);
            }));
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 2487:
/*!****************************************************!*\
  !*** ./src/app/shared/services/api/api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants/api.constants */ 2123);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 134);





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(url, params) {
        return this.http.get(url, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT));
    }
    post(url, body) {
        return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT));
    }
    put(url, body) {
        return this.http.put(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT));
    }
    delete(url, params) {
        return this.http.delete(url, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 6256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../storage/storage.service */ 3328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/constants/storage.constants */ 7374);




let AuthService = class AuthService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    clearUserToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.clearSecure();
            // await this.storageService.removeDataSecure(StorageConstants.TOKEN);
            // await this.storageService.removeDataSecure(StorageConstants.USER_DATA);
        });
    }
    setToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.storeDataSecure(_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_1__.StorageConstants.TOKEN, token);
        });
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.storageService.getDataSecure(_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_1__.StorageConstants.TOKEN);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 7448:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/connectivity/connectivity.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectivityService": () => (/* binding */ ConnectivityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../alert/alert.service */ 9379);
/* harmony import */ var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ibeacon/ngx */ 573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);







let ConnectivityService = class ConnectivityService {
    constructor(ibeacon, alertService, translate) {
        this.ibeacon = ibeacon;
        this.alertService = alertService;
        this.translate = translate;
        this.officeState = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    getOfficeState() {
        return this.officeState;
    }
    geolocationRequestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.requestPermissions();
        });
    }
    geolocationGetPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                resolve(yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.getCurrentPosition());
            }));
        });
    }
    checkBluetoothAvailability() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.ibeacon.isBluetoothEnabled();
        });
    }
    checkLocationAvailability() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    let location = false;
                    let permission = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.checkPermissions();
                    console.log('Permission', permission);
                    if (permission && permission.location === 'granted') {
                        let gps = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.getCurrentPosition();
                        location = true;
                    }
                    resolve(location);
                }
                catch (err) {
                    console.log('ERR location', err);
                    resolve(false);
                }
            }));
        });
    }
    showAlertConnectivity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let bluetooth = yield this.checkBluetoothAvailability();
            let location = yield this.checkLocationAvailability();
            console.log('Connectivity', bluetooth, location);
            if (!bluetooth || !location) {
                yield this.alertService.showGameAlert(this.translate.instant('PAGES.GAME.BLUETOOTH'), this.translate.instant('PAGES.GAME.BLUETOOTH_DESCRIPTION'), [this.translate.instant('ALERTS.ACCEPT')]);
            }
        });
    }
    beaconSearch(beaconUUID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Beacon search ', beaconUUID);
            const delegate = this.ibeacon.Delegate();
            delegate.didEnterRegion().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log('didEnterRegion: ', data);
                this.officeState.next(true);
                // this.insideOffice();
            }), error => console.error('ERROR DID ENTER REGION', error));
            delegate.didExitRegion().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log('didExitRegion: ', data);
                this.officeState.next(false);
                // this.notInOffice();
            }), error => console.error('ERROR DID ENTER REGION', error));
            delegate.didDetermineStateForRegion().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log('didDetermineStateForRegion: ', data);
                if (data.state === "CLRegionStateInside") {
                    this.officeState.next(true);
                }
                else if (data.state === "CLRegionStateOutside") {
                    this.officeState.next(false);
                }
                // if (data.state === "CLRegionStateInside") { this.insideOffice(); }
                // else if (data.state === "CLRegionStateOutside") { this.notInOffice(); }
            }), error => console.error('ERROR DETERMINE STATE FOR REGION', error));
            delegate.didRangeBeaconsInRegion().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log('didRangeBeaconsInRegion: ', data);
            }), error => console.error('ERROR RANGE BEACONS IN REGION', error));
            const beaconRegion = this.ibeacon.BeaconRegion('deskBeacon', beaconUUID);
            this.ibeacon.startMonitoringForRegion(beaconRegion).then(() => {
                console.log('Native layer received the request to monitoring');
            }, error => console.error('Native layer failed to begin monitoring: ', error));
        });
    }
};
ConnectivityService.ctorParameters = () => [
    { type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__.IBeacon },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
ConnectivityService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ConnectivityService);



/***/ }),

/***/ 6798:
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/globalData/global-data-helper.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalDataHelperService": () => (/* binding */ GlobalDataHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api/api.service */ 2487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/config/constants/api.constants */ 2123);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);








let GlobalDataHelperService = class GlobalDataHelperService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    playGame(gameCode, gameState) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('game', gameCode);
        if (gameState)
            httpParams = httpParams.append('gameState', JSON.stringify(gameState));
        return this.apiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.RequestEndpoints.PLAY, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
};
GlobalDataHelperService.ctorParameters = () => [
    { type: src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
GlobalDataHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], GlobalDataHelperService);



/***/ }),

/***/ 287:
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/globalData/global-data.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalDataService": () => (/* binding */ GlobalDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _models_game_play_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/game_play.model */ 8251);
/* harmony import */ var _global_data_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-data-helper.service */ 6798);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../storage/storage.service */ 3328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 2810);
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user.model */ 3709);
/* harmony import */ var src_app_shared_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/config/constants/storage.constants */ 7374);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 2138);
/* harmony import */ var _capacitor_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/dialog */ 3540);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 8384);














const { NativeMarket } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Plugins;
// import { Browser } from '@capacitor/browser';
let GlobalDataService = class GlobalDataService {
    constructor(storageService, gdHelper, translate) {
        this.storageService = storageService;
        this.gdHelper = gdHelper;
        this.translate = translate;
        this.initGlobalData(_models_game_play_model__WEBPACK_IMPORTED_MODULE_0__.GamesEnum.Roulette);
        this.userSession = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__.UserSession();
    }
    initGlobalData(gameCode) {
        this.gamePlay = new _models_game_play_model__WEBPACK_IMPORTED_MODULE_0__.GamePlay();
        this.player = new _models_game_play_model__WEBPACK_IMPORTED_MODULE_0__.Player();
        this.gamePlay.gameCode = gameCode;
    }
    generatePlay(gameCode, gameState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    let data = yield this.gdHelper.playGame(gameCode, gameState).toPromise();
                    console.log('Play from server', data);
                    resolve(data);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    loadStoredSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                this.platform = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getInfo()).platform;
                this.userSession = yield this.storageService.getDataSecure(src_app_shared_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_5__.StorageConstants.USER_DATA);
                let storedSession = this.userSession;
                if (!this.userSession) {
                    this.userSession = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__.UserSession();
                }
                this.userSession.uuid = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId()).uuid;
                if (this.platform !== 'web') {
                    this.userSession.appVersion = (yield _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.getInfo()).version;
                }
                console.log('Session', this.userSession);
                resolve(storedSession);
            }));
        });
    }
    canPlayGame() {
        if (this.gamePlay.canActivateGame && !this.gamePlay.playingGame && this.gamePlay.inOffice && !this.gamePlay.receivingReward) {
            return true;
        }
        else
            return false;
        // if (!this.gamePlay.canActivateGame || this.gamePlay.playingGame || !this.gamePlay.inOffice) {
        //   return true;
        // } else return false;
    }
    showTemporizer() {
        if (!this.gamePlay.maxPlays && this.gamePlay.nextSpin && !this.gamePlay.receivingReward && !this.gamePlay.playingGame) {
            return true;
        }
        else
            return false;
    }
    showOfficeView() {
        if (!this.gamePlay.inOffice && !this.gamePlay.nextSpin && !this.gamePlay.maxPlays) {
            return true;
        }
        else
            return false;
    }
    showMaxPlays() {
        if (this.gamePlay.maxPlays && !this.gamePlay.playingGame && !this.gamePlay.receivingReward) {
            return true;
        }
        else
            return false;
    }
    saveSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                yield this.storageService.storeDataSecure(src_app_shared_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_5__.StorageConstants.USER_DATA, this.userSession);
                resolve(true);
            }));
        });
    }
    removeSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                // return this.storageService.clearSecure();
                yield this.storageService.removeDataSecure(src_app_shared_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_5__.StorageConstants.USER_DATA);
                yield this.storageService.removeDataSecure(src_app_shared_config_constants_storage_constants__WEBPACK_IMPORTED_MODULE_5__.StorageConstants.TOKEN);
                this.userSession = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__.UserSession();
                resolve(true);
            }));
        });
    }
    handleUpdateVersion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield _capacitor_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog.confirm({
                title: this.translate.instant('PAGES.PROFILE.CONFIGURATION.UPDATE_TITLE'),
                message: this.translate.instant('PAGES.PROFILE.CONFIGURATION.UPDATE_DESCRIPTION'),
            });
            if (result && result.value) {
                this.openMarket();
            }
        });
    }
    openMarket() {
        console.log('Opening market...');
        if (this.platform === 'android') {
            // await Browser.open({ url: 'market://developer?id=com.tsystems.magentatribe' });
            NativeMarket.openStoreListing({ appId: 'com.tsystems.magentatribe' });
        }
        else {
        }
    }
};
GlobalDataService.ctorParameters = () => [
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _global_data_helper_service__WEBPACK_IMPORTED_MODULE_1__.GlobalDataHelperService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
GlobalDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], GlobalDataService);



/***/ }),

/***/ 4701:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/language/language.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




let LanguageService = class LanguageService {
    constructor(translate, globalData) {
        this.translate = translate;
        this.globalData = globalData;
    }
    initLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                yield this.globalData.loadStoredSession();
                if (this.globalData.userSession.language) {
                    this.changeLanguage(this.globalData.userSession.language);
                }
                else {
                    this.changeLanguage('es');
                }
                resolve(true);
            }));
        });
    }
    changeLanguage(language) {
        console.log('Language used: ' + language);
        this.translate.use(language);
        this.translate.setDefaultLang(language);
        this.currentLanguage = language;
    }
    getCurrentLanguage() {
        return this.currentLanguage;
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__.GlobalDataService }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LanguageService);



/***/ }),

/***/ 1130:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/push-notifications/push-notifications.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotificationsService": () => (/* binding */ PushNotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 8748);




let PushNotificationsService = class PushNotificationsService {
    constructor(globalDataService) {
        this.globalDataService = globalDataService;
    }
    // async subscibeTopic(topic) {
    //   try {
    //     await PushNotifications.createChannel({id:topic, name:topic, importance: 3})
    //     console.log(await PushNotifications.listChannels());
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // async unsubscribeToAllTopic(topic) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       await PushNotifications.deleteChannel({ id: topic, name: topic, importance: 3 });
    //       await PushNotifications.removeAllListeners();
    //       resolve(true);
    //     } catch (error) { console.log(error); reject(); }
    //   });
    // }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                try {
                    console.log("Register");
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.requestPermissions().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                        if (result.receive === 'granted') {
                            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register();
                            this.addListeners();
                            resolve(true);
                        }
                        else {
                            reject();
                            console.log("No se ha podido registrar los permisos.");
                        }
                    }));
                }
                catch (error) {
                    reject(error);
                    console.log(error);
                }
            }));
        });
    }
    addListeners() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', (token) => {
                this.token = token.value;
                console.log('Registration token: ' + this.token);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', err => {
                console.error('Registration error: ', err.error);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', notification => {
                console.log('Push notification received: ', notification);
            });
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
                console.log('Push notification action performed', notification.actionId, notification.inputValue);
            });
        });
    }
    getDeliveredNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const notificationList = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.getDeliveredNotifications();
            console.log('delivered notifications', notificationList);
        });
    }
};
PushNotificationsService.ctorParameters = () => [
    { type: _globalData_global_data_service__WEBPACK_IMPORTED_MODULE_0__.GlobalDataService }
];
PushNotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PushNotificationsService);



/***/ }),

/***/ 3328:
/*!************************************************************!*\
  !*** ./src/app/shared/services/storage/storage.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../alert/alert.service */ 9379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor-secure-storage-plugin */ 7691);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 2810);






let StorageService = class StorageService {
    constructor(alertService) {
        this.alertService = alertService;
        this.getPlatform();
    }
    getPlatform() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.platform = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getInfo()).platform;
        });
    }
    storeData(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({ key, value: JSON.stringify(value) });
        });
    }
    getData(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                let data = (yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key })).value;
                if (data !== null && data !== undefined) {
                    data = JSON.parse(data);
                    resolve(data);
                }
                else
                    resolve(undefined);
            }));
        });
    }
    removeData(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({ key });
        });
    }
    storeDataSecure(key, value) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.platform !== 'web') {
                    yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.SecureStoragePlugin.set({ key, value: JSON.stringify(value) });
                    console.log('Stored in segure');
                }
                else
                    yield this.storeData(key, value);
                resolve(true);
            }
            catch (error) {
                // this.alertService.showErrorAlert('Esta aplicación utiliza el sistema de almacenamiento seguro de su dispositivo. Para más seguridad, por favor, active el bloqueo de pantalla.',['OK']);
                reject(undefined);
            }
        }));
    }
    getDataSecure(key) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log('GET Storage', key);
                let data;
                if (this.platform !== 'web') {
                    data = (yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.SecureStoragePlugin.get({ key })).value;
                }
                else
                    data = JSON.stringify(yield this.getData(key));
                console.log('Data from storage', data);
                if (data !== null && data !== undefined) {
                    data = JSON.parse(data);
                    resolve(data);
                }
                else
                    resolve(undefined);
            }
            catch (error) {
                resolve(undefined);
                // this.alertService.showErrorAlert('Esta aplicación utiliza el sistema de almacenamiento seguro de su dispositivo. Para más seguridad, por favor, active el bloqueo de pantalla.',['OK']);
            }
        }));
    }
    removeDataSecure(key) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.platform !== 'web') {
                    yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.SecureStoragePlugin.remove({ key });
                }
                else
                    yield this.removeData(key);
                resolve(true);
            }
            catch (error) {
                // this.alertService.showErrorAlert('Esta aplicación utiliza el sistema de almacenamiento seguro de su dispositivo. Para más seguridad, por favor, active el bloqueo de pantalla.',['OK']);
                resolve(undefined);
            }
        }));
    }
    clearSecure() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_2__.SecureStoragePlugin.clear();
                resolve(true);
            }
            catch (error) {
                console.log(error);
                // this.alertService.showErrorAlert('Esta aplicación utiliza el sistema de almacenamiento seguro de su dispositivo. Para más seguridad, por favor, active el bloqueo de pantalla.',['OK']);
                resolve(undefined);
            }
        }));
    }
};
StorageService.ctorParameters = () => [
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    LABEL: 'LOC',
    API_URL: "http://localhost:5050/gamification",
    API_URL_BACKOFFICE: "http://localhost:5050/backoffice",
    UNIVERSAL_DOMAIN: "gotoffice.t-systems.es",
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map