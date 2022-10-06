(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_profile_configuration_configuration_module_ts"],{

/***/ 5821:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/configuration/configuration-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageRoutingModule": () => (/* binding */ ConfigurationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.page */ 2454);




const routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPage
    }
];
let ConfigurationPageRoutingModule = class ConfigurationPageRoutingModule {
};
ConfigurationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationPageRoutingModule);



/***/ }),

/***/ 386:
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/configuration/configuration.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageModule": () => (/* binding */ ConfigurationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-routing.module */ 5821);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.page */ 2454);









let ConfigurationPageModule = class ConfigurationPageModule {
};
ConfigurationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _configuration_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfigurationPageRoutingModule
        ],
        declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_2__.ConfigurationPage]
    })
], ConfigurationPageModule);



/***/ }),

/***/ 2454:
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/configuration/configuration.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration.page.html */ 9780);
/* harmony import */ var _configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page.scss */ 8622);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/language/language.service */ 4701);
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/alert/alert.service */ 9379);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/profile.service */ 7354);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/toast */ 74);










let ConfigurationPage = class ConfigurationPage {
    constructor(profileService, alertService, languageService, translate) {
        this.profileService = profileService;
        this.alertService = alertService;
        this.languageService = languageService;
        this.translate = translate;
        this.RouterConstants = src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_5__.RouterConstants;
    }
    ngOnInit() {
        this.hoursDay = ['07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
        this.comments = '';
        this.initDays();
        this.getReminders();
    }
    ionViewWillEnter() {
        this.initDays();
    }
    initDays() {
        this.daysWeek = [
            { key: 1, value: this.translate.instant('GENERIC.DAYS_WEEK.1') },
            { key: 2, value: this.translate.instant('GENERIC.DAYS_WEEK.2') },
            { key: 3, value: this.translate.instant('GENERIC.DAYS_WEEK.3') },
            { key: 4, value: this.translate.instant('GENERIC.DAYS_WEEK.4') },
            { key: 5, value: this.translate.instant('GENERIC.DAYS_WEEK.5') }
        ];
    }
    changeLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    sendText() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                yield this.profileService.createComment(this.comments).toPromise();
                this.comments = '';
                this.loading = false;
                yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_6__.Toast.show({ text: this.translate.instant('PAGES.PROFILE.CONFIGURATION.COMMENT_SEND'), duration: 'long', position: 'bottom' });
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        });
    }
    getReminders() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                let reminders = yield this.profileService.getRemindersConf().toPromise();
                console.log('Reminders', reminders);
                this.days = reminders.days;
                this.hours = reminders.hours;
                this.loading = false;
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        });
    }
    saveReminders() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                yield this.profileService.saveRemindersConf(this.days, this.hours).toPromise();
                this.loading = false;
                yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_6__.Toast.show({ text: this.translate.instant('PAGES.PROFILE.CONFIGURATION.REMINDERS_SAVE'), duration: 'long', position: 'bottom' });
                this.getReminders();
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        });
    }
    selectDays(element) {
        this.days = element.detail.value;
        console.log('selectDays ', this.days);
    }
    selectHours(element) {
        this.hours = element.detail.value;
    }
};
ConfigurationPage.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
ConfigurationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-configuration',
        template: _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationPage);



/***/ }),

/***/ 8622:
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/configuration/configuration.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.container {\n  margin: 25px 0 30px 0;\n  position: relative;\n}\n\n.container .title-container {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n}\n\n.container .item-conf {\n  --background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  border-radius: 5px;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n  --padding-start: 0;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-font-size: 25px;\n}\n\n.container .item-conf ion-label {\n  margin: 10px 0 10px 20px;\n  max-width: none;\n}\n\n.container .item-conf ion-label .title {\n  font-weight: bolder;\n  margin: 10px 0 15px 0;\n  color: var(--ion-color-secondary);\n}\n\n.container .item-conf ion-label .reminders .item {\n  margin-bottom: 15px;\n}\n\n.container .item-conf ion-label .comments ion-textarea {\n  padding: 5px 10px;\n  --background: var(--ion-color-primary);\n  font-size: 16px;\n  color: white;\n}\n\n.container .item-conf .button-container {\n  position: absolute;\n  top: 5px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0ZBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsNEVBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7QUFGUjs7QUFJUTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQUZaOztBQUlZO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBRmhCOztBQWdCZ0I7RUFDSSxtQkFBQTtBQWRwQjs7QUFtQmdCO0VBQ0ksaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBakJwQjs7QUFzQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBcEJaIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDE4MCUgNjAlIGF0IHJpZ2h0LHdoaXRlIDcwJSx2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgNzAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMjVweCAwIDMwcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAudGl0bGUtY29udGFpbmVye1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWNvbmZ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAwcHggMTBweCwgcmdiKDAgMCAwIC8gNSUpIDBweCAzcHggMHB4O1xyXG4gICAgICAgIC8vIC0tYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWRldGFpbC1pY29uLWZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAvLyBsaW5lLWhlaWdodDogMTZweDsgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBtYXgtaGVpZ2h0OiAzMnB4OyAgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICAgICAgICAgICAgICAvLyAtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgICAgICAgICAgICAgICAvLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVtaW5kZXJze1xyXG4gICAgICAgICAgICAgICAgLml0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbW1lbnRze1xyXG4gICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 9780:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/configuration/configuration.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\" [backPage]=\"RouterConstants.PROFILE\"></app-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <p class=\"title-container\">{{'PAGES.PROFILE.CONFIGURATION.TITLE1' | translate}}</p>\n\n    <ion-item class=\"item-conf\" lines=\"none\">\n      <ion-label>\n        <p class=\"title ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.REMINDERS_TITLE' | translate}}</p>\n        <p class=\"description ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.REMINDERS_DESCRIPTION' | translate}}</p>\n        <div class=\"reminders\">\n          <ion-item class=\"item\">\n            <ion-label>{{'PAGES.PROFILE.CONFIGURATION.DAYS' | translate}}</ion-label>\n            <ion-select [multiple]=\"true\" [disabled]=\"loading\" [(ngModel)]=\"days\" (ionChange)=\"selectDays($event)\">\n              <ion-select-option *ngFor=\"let day of daysWeek\" [value]=\"day.key\">{{day.value}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{'PAGES.PROFILE.CONFIGURATION.HOURS' | translate}}</ion-label>\n            <ion-select [multiple]=\"true\" [disabled]=\"loading\" [(ngModel)]=\"hours\" (ionChange)=\"selectHours($event)\">\n              <ion-select-option *ngFor=\"let hour of hoursDay\" [value]=\"hour\">{{hour}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n      </ion-label>\n      <div class=\"button-container\">\n        <ion-button shape=\"round\" color=\"primary\" (click)=\"saveReminders()\" [disabled]=\"loading\"><ion-icon name=\"save-outline\"></ion-icon></ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-conf\" lines=\"none\">\n      <ion-label>\n        <p class=\"title ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.LANGUAGE' | translate}}</p>\n        <p class=\"description ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.LANGUAGE_DESCRIPTION' | translate}}</p>\n      </ion-label>\n      <div class=\"button-container\">\n        <ion-button shape=\"round\" color=\"primary\" (click)=\"changeLanguage()\"><ion-icon name=\"language-outline\"></ion-icon></ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-conf\" lines=\"none\">\n      <ion-label>\n        <p class=\"title ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.COMMENTS_TITLE' | translate}}</p>\n        <p class=\"description ion-text-wrap text-18\">{{'PAGES.PROFILE.CONFIGURATION.COMMENTS_DESCRIPTION' | translate}}</p>\n        <div class=\"comments\">\n          <ion-textarea rows=\"4\" [disabled]=\"loading\" [(ngModel)]=\"comments\"></ion-textarea>\n        </div>\n      </ion-label>\n      <div class=\"button-container\">\n        <ion-button item-content shape=\"round\" color=\"primary\" (click)=\"sendText()\" [disabled]=\"loading || comments==''\"><ion-icon name=\"save-outline\"></ion-icon></ion-button>\n      </div>\n    </ion-item>\n\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_configuration_configuration_module_ts.js.map