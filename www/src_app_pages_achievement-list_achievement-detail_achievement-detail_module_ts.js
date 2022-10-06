(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_achievement-list_achievement-detail_achievement-detail_module_ts"],{

/***/ 9163:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-detail/achievement-detail-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementDetailPageRoutingModule": () => (/* binding */ AchievementDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _achievement_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievement-detail.page */ 1120);




const routes = [
    {
        path: '',
        component: _achievement_detail_page__WEBPACK_IMPORTED_MODULE_0__.AchievementDetailPage
    }
];
let AchievementDetailPageRoutingModule = class AchievementDetailPageRoutingModule {
};
AchievementDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AchievementDetailPageRoutingModule);



/***/ }),

/***/ 3693:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-detail/achievement-detail.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementDetailPageModule": () => (/* binding */ AchievementDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _achievement_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievement-detail-routing.module */ 9163);
/* harmony import */ var _achievement_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./achievement-detail.page */ 1120);









let AchievementDetailPageModule = class AchievementDetailPageModule {
};
AchievementDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _achievement_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.AchievementDetailPageRoutingModule
        ],
        declarations: [_achievement_detail_page__WEBPACK_IMPORTED_MODULE_2__.AchievementDetailPage]
    })
], AchievementDetailPageModule);



/***/ }),

/***/ 1120:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-detail/achievement-detail.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementDetailPage": () => (/* binding */ AchievementDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_achievement_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./achievement-detail.page.html */ 940);
/* harmony import */ var _achievement_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievement-detail.page.scss */ 8687);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/alert/alert.service */ 9379);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/achievement.service */ 1067);
/* harmony import */ var _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/models/achievement.model */ 1637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);











let AchievementDetailPage = class AchievementDetailPage {
    constructor(router, route, achievementService, alertService, globalData, translate) {
        this.router = router;
        this.route = route;
        this.achievementService = achievementService;
        this.alertService = alertService;
        this.globalData = globalData;
        this.translate = translate;
        this.AchievementState = _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState;
        this.ChallengeType = _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.ChallengeTypeEnum;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
    }
    ngOnInit() {
        this.startScanText = this.translate.instant('PAGES.CHALLENGES.DETAIL.QR_INITIAL');
        this.route.paramMap.subscribe((params) => {
            this.id = parseInt(params.get('id'));
            this.getChallenge();
        });
    }
    achievementAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.item.user_challenge.user_challenge_state.code) {
                    this.loading = true;
                    if (this.item.user_challenge.user_challenge_state.code === _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.STARTED) {
                        const buttons = [
                            { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                            { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
                        ];
                        let result = yield this.alertService.showGameAlert(this.translate.instant('PAGES.CHALLENGES.DETAIL.END_CHALLENGE_TITLE'), this.translate.instant('PAGES.CHALLENGES.DETAIL.END_CHALLENGE_TEXT'), buttons);
                        if (result && result.data && result.role === 'accept')
                            this.item = (yield this.achievementService.processChallenge(this.item.id, { scannedData: this.dataScanned }).toPromise()).achievement;
                    }
                    else {
                        let data = yield this.achievementService.processChallenge(this.item.id, { scannedData: this.dataScanned }).toPromise();
                        console.log('Achievement ', data);
                        this.item = data.achievement;
                        if (this.item.user_challenge.user_challenge_state.code === _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.FINISHED) {
                            this.globalData.player.magentoPoints = data.magentoPoints;
                            this.globalData.player.pointsFreeze = data.magentoPoints;
                            this.alertService.showGameAlert(this.translate.instant('PAGES.GAME.MESSAGES.YOU_WIN') + data.reward + 'm!', this.translate.instant('PAGES.GAME.MESSAGES.CONGRATS') + this.globalData.player.magentoPoints + 'm ' + this.translate.instant('PAGES.GAME.MESSAGES.STACK'), [this.translate.instant('ALERTS.ACCEPT')]);
                        }
                    }
                    this.loading = false;
                }
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        });
    }
    getChallenge() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loadingContent = true;
                this.item = yield this.achievementService.getChallenge(this.id).toPromise();
                this.showContent();
                console.log('Challenge ', this.item);
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
    showContent(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.scanning = false;
            if (data) {
                this.dataScanned = data;
                this.dataScannedText = this.translate.instant('PAGES.CHALLENGES.DETAIL.QR_OK');
                this.scanned = true;
            }
            else {
                this.dataScanned = undefined;
                this.dataScannedText = undefined;
                this.scanned = false;
            }
            console.log('Data scanned', data, this.scanning, this.dataScanned, this.dataScannedText);
        });
    }
    hideContent() {
        this.scanning = true;
    }
    checkActionUser() {
        var _a, _b, _c, _d, _e;
        let disabled = true;
        switch ((_c = (_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.user_challenge) === null || _b === void 0 ? void 0 : _b.user_challenge_state) === null || _c === void 0 ? void 0 : _c.code) {
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.STARTED:
                if (((_e = (_d = this.item) === null || _d === void 0 ? void 0 : _d.challenge_type) === null || _e === void 0 ? void 0 : _e.code) === this.ChallengeType.EVENT) {
                    if (this.dataScanned)
                        disabled = false;
                }
                else
                    disabled = false;
                break;
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.NONE:
                disabled = false;
                break;
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.PENDING:
                disabled = true;
                break;
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.ACCEPTED:
                disabled = false;
                break;
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.FINISHED:
                disabled = true;
                break;
            case _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_5__.AchievementState.REJECTED:
                disabled = true;
                break;
        }
        return disabled;
    }
};
AchievementDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_4__.AchievementService },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__.GlobalDataService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
AchievementDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-achievement-detail',
        template: _raw_loader_achievement_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_achievement_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AchievementDetailPage);



/***/ }),

/***/ 8687:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-detail/achievement-detail.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-image {\n  height: 30%;\n  object-fit: cover;\n}\n\n.center {\n  text-align: center;\n  margin: 15px 30px 20px 30px;\n}\n\n.content {\n  text-align: start;\n}\n\n.content .title {\n  font-weight: bolder;\n  margin: 15px 0 10px 0;\n}\n\n.content .magentos {\n  margin: 10px 0 10px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n\n.content .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUVJLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBQVI7O0FBR0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFEUjs7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQXVCLGFBQUE7RUFFdkIscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFEUiIsImZpbGUiOiJhY2hpZXZlbWVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZXtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMzBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgLy8gbWFyZ2luOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMTBweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFnZW50b3Mge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgICAgLyogZmFsbGJhY2sgKi9cclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzMnB4OyAgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 940:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/achievement-list/achievement-detail/achievement-detail.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\" *ngIf=\"!scanning\"></app-header>\n\n<ion-content *ngIf=\"!scanning\">\n\n  <ion-img class=\"header-image\" *ngIf=\"!loadingContent\" [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item?.imageURL\"></ion-img>\n  <ion-skeleton-text *ngIf=\"loadingContent\" animated style=\"width: 100%; height: 30%;\"></ion-skeleton-text>\n  \n  <div class=\"center\">\n    <ion-button class=\"thin-button\" [disabled]=\"loadingContent || loading || checkActionUser()\" (click)=\"achievementAction()\" expand=\"block\">\n      <p *ngIf=\"!loadingContent\">{{ 'PAGES.CHALLENGES.'+item?.user_challenge?.user_challenge_state?.code | translate }}</p> \n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 50%; height: 20px;\"></ion-skeleton-text></p>\n      <ion-spinner name=\"crescent\" *ngIf=\"loadingContent || loading\"></ion-spinner>\n    </ion-button>\n\n    <div class=\"content\">\n      <p *ngIf=\"!loadingContent\" class=\"magentos text-26\">{{item?.points}} m</p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 30%; height: 30px;\"></ion-skeleton-text></p>\n\n      <div class=\"action\" *ngIf=\"item?.challenge_type?.code === ChallengeType.EVENT && !loadingContent\">\n          <app-qr-scanner-square *ngIf=\"item?.user_challenge?.user_challenge_state?.code === AchievementState.STARTED\"\n          [scanActive]=\"scanning\" [text]=\"scanned ? dataScannedText:startScanText\" (scanningStarted)=\"hideContent()\" [scanned]=\"scanned\"></app-qr-scanner-square>\n      </div>\n\n      <p *ngIf=\"!loadingContent\" class=\"title ion-text-wrap text-24\">{{item?.title}}</p>\n      <p *ngIf=\"!loadingContent\" class=\"ion-text-wrap text-16\">{{item?.description}}</p>\n    \n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 50%; height: 30px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n    </div>\n  </div>\n  \n</ion-content>\n\n<ng-container *ngIf=\"scanning\">\n  <app-qr-scanner [scanActive]=\"scanning\" (scanningEnded)=\"showContent($event)\"></app-qr-scanner>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_achievement-list_achievement-detail_achievement-detail_module_ts.js.map