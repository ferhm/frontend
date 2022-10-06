(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'orders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_order-list_order-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order-list/order-list.module */ 2581)).then(m => m.OrderListPageModule)
    },
    {
        path: 'activity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_activity-list_activity-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./activity-list/activity-list.module */ 8626)).then(m => m.ActivityListPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 5234)).then(m => m.AboutPageModule)
    },
    {
        path: 'configuration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 386)).then(m => m.ConfigurationPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page */ 4629);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfilePageRoutingModule,
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/profile.service */ 7354);
/* harmony import */ var _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/config/constants/router.constants */ 7487);
/* harmony import */ var _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert/alert.service */ 9379);
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/user.model */ 3709);
/* harmony import */ var src_app_shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/game_play.model */ 8251);












let ProfilePage = class ProfilePage {
    constructor(globalData, router, alertService, profileService, translate) {
        this.globalData = globalData;
        this.router = router;
        this.alertService = alertService;
        this.profileService = profileService;
        this.translate = translate;
        this.profileOptions = [
            { name: 'ORDERS', icon: 'bag-handle-outline', url: _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.PROFILE_ORDERS },
            { name: 'ACTIVITY', icon: 'game-controller-outline', url: _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.PROFILE_ACTIVITY },
            { name: 'CONFIGURATION', icon: 'cog-outline', url: _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.PROFILE_CONFIGURATION },
            { name: 'ABOUT', icon: 'information-outline', url: _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.PROFILE_ABOUT },
        ];
    }
    ngOnInit() {
    }
    navigate(url) {
        this.router.navigateByUrl(url);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                const buttons = [
                    { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                    { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
                ];
                let result = yield this.alertService.showGameAlert(this.translate.instant('PAGES.PROFILE.LOGOUT_TITLE'), this.translate.instant('PAGES.PROFILE.LOGOUT_DESCRIPTION'), buttons);
                if (result && result.data && result.role === 'accept') {
                    yield this.profileService.logout().toPromise();
                    this.globalData.userSession = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__.UserSession();
                    this.globalData.gamePlay = new src_app_shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_7__.GamePlay();
                    this.globalData.player = new src_app_shared_models_game_play_model__WEBPACK_IMPORTED_MODULE_7__.Player();
                    this.router.navigateByUrl(_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.LOGIN, { replaceUrl: true });
                    yield this.globalData.removeSession();
                }
                this.loading = false;
            }
            catch (error) {
                this.loading = false;
                console.log("Error", error);
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 7354:
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/services/profile.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/constants/api.constants */ 2123);
/* harmony import */ var src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/api.service */ 2487);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);








let ProfileService = class ProfileService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getOrderListUser(currentElement, elementsPerPage) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('currentElement', currentElement);
        httpParams = httpParams.append('elementsPerPage', elementsPerPage);
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.GET_PROFILE_ORDERS, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            data.rows.forEach(element => {
                element.updatedAt = new Date(element.updatedAt);
                element.orderDate = new Date(element.orderDate);
            });
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    getOrderUser(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('id', id);
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.GET_PROFILE_ORDER, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            data.updatedAt = new Date(data.updatedAt);
            data.orderDate = new Date(data.orderDate);
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    getActivityListUser(currentElement, elementsPerPage) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('currentElement', currentElement);
        httpParams = httpParams.append('elementsPerPage', elementsPerPage);
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.GET_PROFILE_ACTIVITY, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            data.rows.forEach(element => {
                element.endPlay = new Date(element.endPlay);
            });
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    createComment(text) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('text', text);
        return this.apiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.COMMENTS, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    getRemindersConf() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.GET_PROFILE_REMINDERS, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    saveRemindersConf(days, hours) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        httpParams = httpParams.append('days', JSON.stringify(days));
        httpParams = httpParams.append('hours', JSON.stringify(hours));
        return this.apiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.GET_PROFILE_REMINDERS, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
    logout() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        return this.apiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_0__.RequestEndpoints.LOGOUT, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error)));
    }
};
ProfileService.ctorParameters = () => [
    { type: src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.logout {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.logout .logout-item {\n  --background: var(--ion-color-secondary);\n  color: white;\n  --border-radius: 25px;\n  font-size: 16px;\n}\n\n.logout ion-icon {\n  color: white;\n}\n\n.wrapper {\n  margin-bottom: 25px;\n}\n\n.header-wrapper {\n  margin-top: 15px;\n}\n\n.header-wrapper ion-img {\n  width: 55px;\n  position: absolute;\n}\n\n.list-options {\n  margin-top: 15px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n.list-options div {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.list-options ion-card {\n  width: 150px;\n  margin: auto;\n  height: 130px;\n  background-color: var(--ion-color-secondary);\n}\n\n.list-options ion-card ion-card-title {\n  font-size: 18px;\n  text-align: center;\n  color: white;\n}\n\n.list-options ion-card ion-icon {\n  font-size: 50px;\n  color: white;\n  text-align: center;\n  width: 100%;\n}\n\n.funny-container {\n  margin: 20px 25px 0 25px;\n  display: flex;\n  align-items: center;\n  /* justify-content: space-around; */\n}\n\n.funny-container .funny-comic .title {\n  font-size: 25px;\n}\n\n.funny-container .funny-comic .text {\n  font-size: 20px;\n}\n\n.funny-container .funny-icon ion-img {\n  width: 150px;\n}\n\nblockquote.bubble {\n  margin: 0 auto;\n  text-align: center;\n  box-sizing: content-box;\n  line-height: 1;\n}\n\nblockquote.electric {\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/electric.svg);\n  width: 280px;\n  height: 100px;\n  font-size: 2.4vw;\n  font-style: italic;\n  padding: 4% 6% 12% 0%;\n}\n\nblockquote.electric span {\n  display: block;\n  font-size: 3vw;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0ZBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFSTtFQUNJLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUdJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ0ksbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBR0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFEUjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDRDQUFBO0FBSlI7O0FBTVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSlo7O0FBT1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxaOztBQVVBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQVBKOztBQVVRO0VBQ0ksZUFBQTtBQVJaOztBQVdRO0VBQ0ksZUFBQTtBQVRaOztBQWNRO0VBQ0ksWUFBQTtBQVpaOztBQW9CQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWpCSjs7QUFvQkE7RUFDSSwrRUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBakJKOztBQW1CQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFoQkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDE4MCUgNjAlIGF0IHJpZ2h0LHdoaXRlIDcwJSx2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgNzAlKTtcclxufVxyXG5cclxuLmxvZ291dHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5sb2dvdXQtaXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdC1vcHRpb25ze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIFxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZ1bm55LWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMjBweCAyNXB4IDAgMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXHJcblxyXG4gICAgLmZ1bm55LWNvbWlje1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1bm55LWljb257XHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmJsb2NrcXVvdGUuYnViYmxlIHsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUuZWxlY3RyaWMge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQyNzMvZWxlY3RyaWMuc3ZnKTsgXHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjR2dztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHBhZGRpbmc6IDQlIDYlIDEyJSAwJTtcclxufVxyXG5ibG9ja3F1b3RlLmVsZWN0cmljIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n\n    <div class=\"header-wrapper\">\n      <app-footer-game [pointsFreeze]=\"globalData.player.pointsFreeze\" [validateDisabled]=\"true\"></app-footer-game>\n    </div>\n\n    <div class=\"funny-container\">\n      <div class=\"funny-comic\">\n        <p class=\"title\"><b>{{'PAGES.PROFILE.HELLO' | translate}} {{globalData.userSession?.name}}!</b></p>\n        <p class=\"text\">{{'PAGES.PROFILE.HOW_R_U' | translate}}</p>\n      </div>\n      <div class=\"funny-icon\">\n        <ion-img src=\"assets/icon/funny.png\"></ion-img>\n      </div>\n    </div>\n\n    <div class=\"list-options\">\n      <ion-row>\n        <ion-col col-6 *ngFor=\"let cat of profileOptions\">\n          <ion-card (click)=\"navigate(cat.url)\" [disabled]=\"loading\">\n            <ion-card-header>\n              <ion-icon [name]=\"cat.icon\"></ion-icon>\n              <ion-card-title>{{ 'PAGES.PROFILE.'+cat.name+'.TITLE1' | translate }}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n  <div class=\"logout\">\n    <ion-item (click)=\"logout()\" [disabled]=\"loading\" class=\"logout-item\">\n      <ion-label>{{'PAGES.PROFILE.LOGOUT' | translate}}</ion-label>\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map