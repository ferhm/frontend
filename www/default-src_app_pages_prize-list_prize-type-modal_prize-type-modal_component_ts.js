(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["default-src_app_pages_prize-list_prize-type-modal_prize-type-modal_component_ts"],{

/***/ 4426:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-type-modal/prize-type-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeTypeModalComponent": () => (/* binding */ PrizeTypeModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_prize_type_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prize-type-modal.component.html */ 6846);
/* harmony import */ var _prize_type_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prize-type-modal.component.scss */ 2369);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ 2340);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/reward.service */ 5615);
/* harmony import */ var _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);








let PrizeTypeModalComponent = class PrizeTypeModalComponent {
    constructor(modalCtrl, globalDataService, rewardService) {
        this.modalCtrl = modalCtrl;
        this.globalDataService = globalDataService;
        this.rewardService = rewardService;
        this.eventFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.units = 1;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
    }
    ngOnInit() {
        this.getUserOffice();
    }
    dismissModal() {
        this.eventFunction.emit();
        this.modalCtrl.dismiss();
    }
    save() {
        this.eventFunction.emit(this.officeData);
        this.modalCtrl.dismiss();
    }
    getUserOffice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loadingContent = true;
                this.officeData = yield this.rewardService.getUserOffice().toPromise();
                console.log('Office Data ', this.officeData);
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
};
PrizeTypeModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService },
    { type: _services_reward_service__WEBPACK_IMPORTED_MODULE_3__.RewardService }
];
PrizeTypeModalComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    typeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    eventFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
PrizeTypeModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prize-type-modal',
        template: _raw_loader_prize_type_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prize_type_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrizeTypeModalComponent);



/***/ }),

/***/ 5615:
/*!*************************************************************!*\
  !*** ./src/app/pages/prize-list/services/reward.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardService": () => (/* binding */ RewardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api/api.service */ 2487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/config/constants/api.constants */ 2123);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);









let RewardService = class RewardService {
    constructor(apiService, globalData) {
        this.apiService = apiService;
        this.globalData = globalData;
    }
    getUserRewards(currentElement, elementsPerPage) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        httpParams = httpParams.append('currentElement', currentElement);
        httpParams = httpParams.append('elementsPerPage', elementsPerPage);
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.RequestEndpoints.GET_REWARDS, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error)));
    }
    getUserReward(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        httpParams = httpParams.append('id', id);
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.RequestEndpoints.GET_REWARD, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error)));
    }
    getUserOffice() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.RequestEndpoints.GET_USER_OFFICE, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error)));
    }
    redeemReward(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        httpParams = httpParams.append('id', id);
        return this.apiService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL + src_app_shared_config_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.RequestEndpoints.REDEEM_REWARD, httpParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return data;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error)));
    }
};
RewardService.ctorParameters = () => [
    { type: src_app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_2__.GlobalDataService }
];
RewardService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], RewardService);



/***/ }),

/***/ 2369:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-type-modal/prize-type-modal.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-right {\n  position: absolute;\n  top: 18px;\n  right: 20px;\n  font-size: 30px;\n  color: #999999;\n}\n\n.content {\n  margin: 30px 40px 30px 30px;\n}\n\n.content .title {\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.content .product-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 20px;\n}\n\n.content .product-wrapper ion-img {\n  width: 120px;\n  min-width: 100px;\n  margin-right: 25px;\n  border: 3px solid var(--ion-color-primary);\n}\n\n.content .product-wrapper p {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n}\n\n.content .direction-wrapper {\n  margin-top: 30px;\n  margin-left: 20px;\n  color: black;\n}\n\n.content .direction-wrapper .divider {\n  height: 1px;\n  background: var(--ion-color-tertiary);\n  margin: 10px;\n}\n\n.content .direction-wrapper .direction-title {\n  font-weight: bolder;\n}\n\n.content .thin-button {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXplLXR5cGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQVI7O0FBRVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQVo7O0FBR1E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRFo7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhSOztBQUtRO0VBQ0ksV0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUhaOztBQU1RO0VBQ0ksbUJBQUE7QUFKWjs7QUFZSTtFQUNJLGlCQUFBO0FBVlIiLCJmaWxlIjoicHJpemUtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDMwcHggNDBweCAzMHB4IDMwcHg7XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICAgICBpb24taW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGlyZWN0aW9uLXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgIC5kaXZpZGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpcmVjdGlvbi10aXRsZXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZGlyZWN0aW9uLWRlc2NyaXB0aW9ue1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aGluLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 6846:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize-list/prize-type-modal/prize-type-modal.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-icon class=\"top-right\" name=\"close-outline\" (click)=\"dismissModal()\"></ion-icon>\n\n<div class=\"content\">\n  <p class=\"title\">{{ 'PAGES.PRIZES.DETAIL.MODAL.ORDER' | translate }}</p>\n\n  <div class=\"product-wrapper\">\n    <ion-img [src]=\"environment.API_URL_BACKOFFICE+'/image/'+product?.imageURL\"></ion-img>\n    <p>{{product?.title}}</p>\n  </div>\n\n  <ion-item class=\"login-item\">\n    <ion-label position=\"stacked\">{{ 'PAGES.PRIZES.DETAIL.MODAL.UNITS' | translate }}</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"units\" disabled></ion-input>\n  </ion-item>\n\n  <div class=\"direction-wrapper\" *ngIf=\"loadingContent; else showContent\">\n    <p><ion-skeleton-text animated style=\"width: 100%; height: 30px;\"></ion-skeleton-text></p>\n    <p><ion-skeleton-text animated style=\"width: 100%; height: 30px;\"></ion-skeleton-text></p>\n    <div class=\"divider\"></div>\n    <p><ion-skeleton-text animated style=\"width: 100%; height: 30px;\"></ion-skeleton-text></p>\n    <p><ion-skeleton-text animated style=\"width: 100%; height: 30px;\"></ion-skeleton-text></p>\n  </div>\n\n  <ng-template #showContent>\n    <div class=\"direction-wrapper\">\n      <p class=\"direction-title\">{{globalDataService?.userSession?.name}} {{globalDataService?.userSession?.surname}}</p>\n      <p class=\"direction-description\">{{globalDataService?.userSession?.email}}</p>\n      <div class=\"divider\"></div>\n      <p class=\"direction-title\">{{officeData?.officeTitle}}</p>\n      <p class=\"direction-description\">{{officeData?.officeDirection}}</p>\n    </div>\n  </ng-template>\n\n  <ion-button class=\"thin-button\" [disabled]=\"loadingContent\" (click)=\"save()\" expand=\"block\">\n    <p>{{ 'PAGES.PRIZES.MODAL.GUARDAR' | translate }}</p>\n    <ion-spinner name=\"crescent\" *ngIf=\"loadingContent\"></ion-spinner>\n  </ion-button>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_prize-list_prize-type-modal_prize-type-modal_component_ts.js.map