(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_prize-list_prize-detail_prize-detail_module_ts"],{

/***/ 5908:
/*!******************************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-detail/prize-detail-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeDetailPageRoutingModule": () => (/* binding */ PrizeDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _prize_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prize-detail.page */ 7651);




const routes = [
    {
        path: '',
        component: _prize_detail_page__WEBPACK_IMPORTED_MODULE_0__.PrizeDetailPage
    }
];
let PrizeDetailPageRoutingModule = class PrizeDetailPageRoutingModule {
};
PrizeDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrizeDetailPageRoutingModule);



/***/ }),

/***/ 8190:
/*!**********************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-detail/prize-detail.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeDetailPageModule": () => (/* binding */ PrizeDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _prize_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prize-detail-routing.module */ 5908);
/* harmony import */ var _prize_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prize-detail.page */ 7651);









let PrizeDetailPageModule = class PrizeDetailPageModule {
};
PrizeDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _prize_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrizeDetailPageRoutingModule
        ],
        declarations: [_prize_detail_page__WEBPACK_IMPORTED_MODULE_2__.PrizeDetailPage]
    })
], PrizeDetailPageModule);



/***/ }),

/***/ 7651:
/*!********************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-detail/prize-detail.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrizeDetailPage": () => (/* binding */ PrizeDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_prize_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prize-detail.page.html */ 4211);
/* harmony import */ var _prize_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prize-detail.page.scss */ 6004);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/models/profile.model */ 5882);
/* harmony import */ var _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/alert/alert.service */ 9379);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/reward.service */ 5615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_services_modal_handler_modal_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal-handler/modal-handler.service */ 552);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _prize_type_modal_prize_type_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../prize-type-modal/prize-type-modal.component */ 4426);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 2340);















let PrizeDetailPage = class PrizeDetailPage {
    constructor(router, route, rewardService, globalDataService, modalHandler, routerOutlet, alertService, translate) {
        this.router = router;
        this.route = route;
        this.rewardService = rewardService;
        this.globalDataService = globalDataService;
        this.modalHandler = modalHandler;
        this.routerOutlet = routerOutlet;
        this.alertService = alertService;
        this.translate = translate;
        this.OrderState = _shared_models_profile_model__WEBPACK_IMPORTED_MODULE_2__.OrderState;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = parseInt(params.get('id'));
            this.getReward();
        });
    }
    navigateToOrderList(element) {
        this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_8__.RouterConstants.PROFILE_ORDERS_DETAIL + element.id);
    }
    getReward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loadingContent = true;
                this.item = yield this.rewardService.getUserReward(this.id).toPromise();
                console.log('Reward ', this.item);
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
    checkoutPrize() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                const buttons = [
                    { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                    { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
                ];
                let result = yield this.alertService.showGameAlert(this.translate.instant('PAGES.PRIZES.DETAIL.RECEIVE'), this.translate.instant('PAGES.PRIZES.DETAIL.RECEIVE_ASK') + ((_a = this.item) === null || _a === void 0 ? void 0 : _a.points) + " m " + this.translate.instant('PAGES.PRIZES.DETAIL.BALANCE') + (this.globalDataService.player.magentoPoints - ((_b = this.item) === null || _b === void 0 ? void 0 : _b.points)) + " m.", buttons);
                if (result && result.data && result.role === 'accept') {
                    let data = yield this.rewardService.redeemReward(this.id).toPromise();
                    this.officeData = undefined;
                    this.globalDataService.player.magentoPoints = data.magentoPoints;
                    this.globalDataService.player.pointsFreeze = data.magentoPoints;
                    this.item = data.reward;
                    console.log('Redeem ', data);
                }
                this.loading = false;
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        });
    }
    openRewardType() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (((_a = this.item) === null || _a === void 0 ? void 0 : _a.points) < this.globalDataService.player.magentoPoints) {
                const eventFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
                yield this.modalHandler.createModal({
                    component: _prize_type_modal_prize_type_modal_component__WEBPACK_IMPORTED_MODULE_7__.PrizeTypeModalComponent,
                    swipeToClose: true,
                    mode: 'ios',
                    cssClass: 'swipeableModal',
                    // breakpoints: [0, 0.5, 0.75],
                    // initialBreakpoint: 0.5,
                    presentingElement: this.routerOutlet.nativeEl,
                    componentProps: {
                        type: this.typeDataReward,
                        product: this.item,
                        eventFunction: eventFunction,
                    }
                });
                eventFunction.subscribe(data => {
                    this.officeData = data;
                    console.log('RewardType', this.officeData);
                    this.modalHandler.dismissModal();
                });
                return this.modalHandler.presentModal();
            }
        });
    }
    dateToStringShort(date) {
        date = new Date(date);
        return (("0" + (date.getDate())).slice(-2)) + "/" + (("0" + (date.getMonth() + 1)).slice(-2)) + "/" + date.getFullYear().toString().substr(-2, 4);
    }
};
PrizeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_reward_service__WEBPACK_IMPORTED_MODULE_5__.RewardService },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService },
    { type: src_app_shared_services_modal_handler_modal_handler_service__WEBPACK_IMPORTED_MODULE_6__.ModalHandlerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRouterOutlet },
    { type: _shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService }
];
PrizeDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-prize-detail',
        template: _raw_loader_prize_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prize_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrizeDetailPage);



/***/ }),

/***/ 552:
/*!************************************************************************!*\
  !*** ./src/app/shared/services/modal-handler/modal-handler.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalHandlerService": () => (/* binding */ ModalHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);



let ModalHandlerService = class ModalHandlerService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    createModal(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () { this.modal = yield this.modalController.create(options); });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () { return yield this.modal.present(); });
    }
    dismissModal() { this.modal.dismiss(); }
    onDismissModal() { return this.modal.onDidDismiss(); }
};
ModalHandlerService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController }
];
ModalHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ModalHandlerService);



/***/ }),

/***/ 6004:
/*!**********************************************************************!*\
  !*** ./src/app/pages/prize-list/prize-detail/prize-detail.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-wrapper {\n  position: relative;\n}\n.header-wrapper .header-image {\n  height: 30%;\n  object-fit: cover;\n}\n.header-wrapper .no-magentos {\n  position: absolute;\n  bottom: 35px;\n  --border-color: #e20074a6;\n  --border-style: solid;\n  --border-width: 1px 8px 1px 10px;\n  border-radius: 0 10px 10px 0;\n  --background: #e20074a6;\n  color: white;\n}\n.header-wrapper .no-magentos ion-icon {\n  margin: 5px 10px 5px 0;\n  font-size: 30px;\n  color: white;\n}\n.center {\n  text-align: center;\n  margin: 15px 30px 20px 30px;\n}\n.content {\n  text-align: start;\n}\n.content .title {\n  font-weight: bolder;\n  margin: 15px 0 10px 0;\n}\n.content .magentos {\n  margin: 10px 0 10px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n.content .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n.qr {\n  border: 1px solid grey;\n  border-style: dashed;\n  border-radius: 5px;\n  color: grey;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n}\n.qr .icon {\n  position: relative;\n}\n.qr .icon .primary {\n  font-size: 55px;\n}\n.qr .icon .secondary {\n  position: absolute;\n  bottom: 2px;\n  font-size: 25px;\n  right: -18px;\n}\n.qr p {\n  width: 60%;\n  padding-left: 15px;\n  border-left: 1px solid grey;\n}\n.label-fab {\n  position: relative;\n}\n.label-fab::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 45px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n.REQUESTED {\n  --border-color: #297fb9;\n  --border-width: 2px;\n  --border-style: solid;\n}\n.OBTAINED {\n  --border-color: #50c02b;\n  --border-width: 2px;\n  --border-style: solid;\n}\n.REJECTED {\n  --border-color: #c0392b;\n  --border-width: 2px;\n  --border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXplLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFaO0FBS0E7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FBRko7QUFLQTtFQUVJLGlCQUFBO0FBSEo7QUFLSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFIUjtBQU1JO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBSlI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQXVCLGFBQUE7RUFFdkIscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFKUjtBQVNBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0ksa0JBQUE7QUFOUjtBQU9RO0VBQ0ksZUFBQTtBQUxaO0FBUVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU5aO0FBVUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVJSO0FBWUE7RUFDSSxrQkFBQTtBQVRKO0FBWUE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUhBQUE7QUFUSjtBQVlBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVEo7QUFZQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVRKO0FBWUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFUSiIsImZpbGUiOiJwcml6ZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5oZWFkZXItaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5uby1tYWdlbnRvc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAzNXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZTIwMDc0YTY7XHJcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHggOHB4IDFweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZTIwMDc0YTY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDMwcHggMjBweCAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIC8vIG1hcmdpbjogMzBweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDEwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hZ2VudG9zIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDsgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogMzJweDsgICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnFye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucHJpbWFyeXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY29uZGFyeXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICByaWdodDogLTE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFiZWwtZmFie1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGFiZWwtZmFiOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtZGVzYyk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcmlnaHQ6IDQ1cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxuICB9XHJcblxyXG4uUkVRVUVTVEVEIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjk3ZmI5O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLk9CVEFJTkVEIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjNTBjMDJiO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLlJFSkVDVEVEIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYzAzOTJiO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 4211:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize-list/prize-detail/prize-detail.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\"></app-header>\n\n<ion-content>\n\n  <div class=\"header-wrapper\" *ngIf=\"!loadingContent; else loadingImage\">\n    <ion-img class=\"header-image\" [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item?.imageURL\"></ion-img>\n    <ion-item lines=\"none\" class=\"no-magentos\" *ngIf=\"item?.availableItems<=0;\">\n      <ion-icon name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{ 'PAGES.PRIZES.DETAIL.NO_STOCK' | translate }}</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"no-magentos\" *ngIf=\"item?.points>globalDataService.player.magentoPoints && item?.availableItems>0;\">\n      <ion-icon name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{ 'PAGES.PRIZES.DETAIL.NO_MAGENTOS' | translate }}</ion-label>\n    </ion-item>\n  </div>\n  <ng-template #loadingImage>\n    <ion-skeleton-text *ngIf=\"loadingContent\" animated style=\"width: 100%; height: 30%;\"></ion-skeleton-text>\n  </ng-template>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"item?.rewardRedeems?.length>0 && !loadingContent\">\n    <ion-fab-button [disabled]=\"loading || loadingContent\"><ion-icon name=\"bag-outline\"></ion-icon></ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button [attr.data-desc]=\"dateToStringShort(redeem.updatedAt)\" class=\"label-fab\" [ngClass]=\"redeem.state\" *ngFor=\"let redeem of item?.rewardRedeems\" (click)=\"navigateToOrderList(redeem)\" [ngSwitch]=\"redeem.state\">\n        <ion-icon *ngSwitchCase=\"OrderState.REQUESTED\" name=\"timer-outline\"></ion-icon>\n        <ion-icon *ngSwitchCase=\"OrderState.OBTAINED\" name=\"bag-check-outline\"></ion-icon>\n        <ion-icon *ngSwitchCase=\"OrderState.REJECTED\" name=\"alert-circle-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <div class=\"center\">\n    <ion-button class=\"thin-button\" [disabled]=\"loadingContent || loading || item?.availableItems<=0 || item?.points>globalDataService.player.magentoPoints || (!officeData?.officeTitle && !officeData?.officeDirection)\" (click)=\"checkoutPrize()\" expand=\"block\">\n      <p *ngIf=\"!loadingContent\">{{ 'PAGES.PRIZES.DETAIL.SELECT' | translate }}</p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 50%; height: 20px;\"></ion-skeleton-text></p>\n      <ion-spinner name=\"crescent\" *ngIf=\"loadingContent || loading\"></ion-spinner>\n    </ion-button>\n\n    <div class=\"content\">\n      <p *ngIf=\"!loadingContent\"  class=\"magentos text-26\">{{item?.points}} m</p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 30%; height: 30px;\"></ion-skeleton-text></p>\n\n      <div class=\"qr\" (click)=\"openRewardType()\" *ngIf=\"item?.points<=globalDataService.player.magentoPoints && !loadingContent\">\n        <div class=\"icon\">\n          <ion-icon class=\"primary\" name=\"cart-outline\"></ion-icon>\n          <ion-icon *ngIf=\"officeData?.officeTitle || officeData?.officeDirection\" class=\"secondary\" name=\"checkmark-outline\"></ion-icon>\n        </div>\n        <p *ngIf=\"officeData?.officeTitle || officeData?.officeDirection; else selectOffice\">{{officeData?.officeTitle}} - {{officeData?.officeDirection}}</p>\n        <ng-template #selectOffice>\n          <p>{{ 'PAGES.PRIZES.DETAIL.SET_OFFICE' | translate }}</p>\n        </ng-template>\n      </div>\n\n      <p *ngIf=\"!loadingContent\" class=\"title ion-text-wrap text-24\">{{item?.title}}</p>\n      <p *ngIf=\"!loadingContent\" class=\"ion-text-wrap text-16\">{{item?.description}}</p>\n\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 50%; height: 30px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prize-list_prize-detail_prize-detail_module_ts.js.map