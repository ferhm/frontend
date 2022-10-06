(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_profile_order-list_order-list-detail_order-list-detail_module_ts"],{

/***/ 2978:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list-detail/order-list-detail-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListDetailPageRoutingModule": () => (/* binding */ OrderListDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _order_list_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list-detail.page */ 3361);




const routes = [
    {
        path: '',
        component: _order_list_detail_page__WEBPACK_IMPORTED_MODULE_0__.OrderListDetailPage
    }
];
let OrderListDetailPageRoutingModule = class OrderListDetailPageRoutingModule {
};
OrderListDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderListDetailPageRoutingModule);



/***/ }),

/***/ 458:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list-detail/order-list-detail.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListDetailPageModule": () => (/* binding */ OrderListDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/components/components.module */ 5626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _order_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list-detail-routing.module */ 2978);
/* harmony import */ var _order_list_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list-detail.page */ 3361);









let OrderListDetailPageModule = class OrderListDetailPageModule {
};
OrderListDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _order_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrderListDetailPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        ],
        declarations: [_order_list_detail_page__WEBPACK_IMPORTED_MODULE_2__.OrderListDetailPage]
    })
], OrderListDetailPageModule);



/***/ }),

/***/ 3361:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list-detail/order-list-detail.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListDetailPage": () => (/* binding */ OrderListDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_list_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-list-detail.page.html */ 5512);
/* harmony import */ var _order_list_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list-detail.page.scss */ 609);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/profile.service */ 7354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/profile.model */ 5882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);








let OrderListDetailPage = class OrderListDetailPage {
    constructor(route, profileService) {
        this.route = route;
        this.profileService = profileService;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = parseInt(params.get('id'));
            this.getReward();
        });
    }
    getReward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loadingContent = true;
                this.item = yield this.profileService.getOrderUser(this.id).toPromise();
                console.log('Order ', this.item);
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
    dateToString(date) {
        if (date) {
            return (("0" + (date.getDate())).slice(-2)) + "/" + (("0" + (date.getMonth() + 1)).slice(-2)) + "/" + date.getFullYear() + " " + (("0" + (date.getHours())).slice(-2)) + ":" + (("0" + (date.getMinutes())).slice(-2));
        }
        else
            return '';
    }
    setDotColorState(state) {
        let color = '#bbb';
        switch (state) {
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_3__.OrderState.REQUESTED:
                color = '#297fb9';
                break;
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_3__.OrderState.OBTAINED:
                color = '#50c02b';
                break;
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_3__.OrderState.REJECTED:
                color = '#c0392b';
                break;
        }
        return color;
    }
};
OrderListDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService }
];
OrderListDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-order-list-detail',
        template: _raw_loader_order_list_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_list_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderListDetailPage);



/***/ }),

/***/ 609:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list-detail/order-list-detail.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-image {\n  height: 30%;\n  object-fit: cover;\n}\n\n.center {\n  text-align: center;\n  margin: 15px 30px 20px 30px;\n}\n\n.content {\n  text-align: start;\n}\n\n.content .title {\n  font-weight: bolder;\n  margin: 15px 0 10px 0;\n}\n\n.content .text {\n  margin: 15px 0 10px 0;\n}\n\n.content .magentos {\n  margin: 10px 0 10px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n\n.content .state {\n  display: flex;\n  align-items: center;\n}\n\n.content .state .dot {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.content .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBRUksaUJBQUE7QUFBSjs7QUFFSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFBUjs7QUFHSTtFQUNJLHFCQUFBO0FBRFI7O0FBSUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFGUjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhSOztBQUtRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUhaOztBQU9JO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFBdUIsYUFBQTtFQUV2QixxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQUpSIiwiZmlsZSI6Im9yZGVyLWxpc3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDMwcHggMjBweCAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIC8vIG1hcmdpbjogMzBweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDEwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAxMHB4IDA7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hZ2VudG9zIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDsgICAgIC8qIGZhbGxiYWNrICovXHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogMzJweDsgICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 5512:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/order-list/order-list-detail/order-list-detail.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\"></app-header>\n\n<ion-content>\n\n  <ion-img *ngIf=\"!loadingContent\" class=\"header-image\" [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item?.product?.imageURL\"></ion-img>\n  <ion-skeleton-text *ngIf=\"loadingContent\" animated style=\"width: 100%; height: 30%;\"></ion-skeleton-text>\n\n  <div class=\"center\">\n    <div class=\"content\" *ngIf=\"!loadingContent\">\n      <p class=\"magentos text-26\">{{item?.product?.points}} m</p>\n      <p class=\"title ion-text-wrap text-24\">{{item?.product?.title}}</p>\n      <p class=\"text ion-text-wrap text-18\"><b>{{'PAGES.PROFILE.ORDERS.DETAIL.DATE' | translate}}</b> {{dateToString(item?.orderDate)}}</p>\n      <p class=\"text ion-text-wrap text-18\"><b>{{'PAGES.PROFILE.ORDERS.DETAIL.DATE_UPDATE' | translate}}</b> {{dateToString(item?.updatedAt)}}</p>\n      <div class=\"state\">\n        <span class=\"dot\" [ngStyle]=\"{'background-color': setDotColorState(item?.state) }\"></span>\n        <p class=\"text ion-text-wrap text-18\">{{'PAGES.PROFILE.ORDERS.DETAIL.'+item?.state | translate}}</p>\n      </div>\n      <p class=\"ion-text-wrap text-16\">{{item?.product?.description}}</p>\n    </div>\n    <div class=\"content\" *ngIf=\"loadingContent\">\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 30%; height: 30px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 50%; height: 30px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n      <p *ngIf=\"loadingContent\"><ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text></p>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_order-list_order-list-detail_order-list-detail_module_ts.js.map