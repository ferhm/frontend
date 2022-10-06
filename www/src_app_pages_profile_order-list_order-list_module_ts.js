(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_profile_order-list_order-list_module_ts"],{

/***/ 3555:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageRoutingModule": () => (/* binding */ OrderListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list.page */ 8965);




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderListPage
    },
    {
        path: 'order-list-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_order-list_order-list-detail_order-list-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-list-detail/order-list-detail.module */ 458)).then(m => m.OrderListDetailPageModule)
    }
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ 2581:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageModule": () => (/* binding */ OrderListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list-routing.module */ 3555);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page */ 8965);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 5626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderListPage]
    })
], OrderListPageModule);



/***/ }),

/***/ 8965:
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPage": () => (/* binding */ OrderListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-list.page.html */ 1491);
/* harmony import */ var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page.scss */ 5290);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/profile.service */ 7354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/config/constants/router.constants */ 7487);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/profile.model */ 5882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);










let OrderListPage = class OrderListPage {
    constructor(globalData, profileService, router) {
        this.globalData = globalData;
        this.profileService = profileService;
        this.router = router;
        this.RouterConstants = src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants;
        this.elements = new Array();
        this.elementsPerPage = 10;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
    }
    ngOnInit() {
        this.getOrderList();
    }
    array(n) {
        return Array(n);
    }
    getOrderList(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!event)
                    this.loadingContent = true;
                this.currentElement = this.elements.length;
                const data = yield this.profileService.getOrderListUser(this.currentElement, this.elementsPerPage).toPromise();
                this.totalElements = data.count;
                this.elements = this.elements.concat(data.rows);
                console.log('Prizes ', this.elements, this.totalElements);
                if (event) {
                    yield event.target.complete();
                }
                this.loadingContent = false;
            }
            catch (error) {
                console.log(error);
                this.loadingContent = false;
            }
        });
    }
    refreshData(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.elements = new Array();
            yield this.getOrderList();
            event.target.complete();
        });
    }
    openDetail(element) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Detail', element);
            this.router.navigateByUrl(src_app_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.PROFILE_ORDERS_DETAIL + element.id, { state: element.selectedElement });
            //await this.alertService.showBasicAlert('No se ha podido recibir la recompensa!','Lo sentimos, la recompensa no está disponible en este momento.');
        });
    }
    dateToString(date) {
        return (("0" + (date.getDate())).slice(-2)) + "/" + (("0" + (date.getMonth() + 1)).slice(-2)) + "/" + date.getFullYear();
    }
    setDotColorState(state) {
        let color = '#bbb';
        switch (state) {
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_5__.OrderState.REQUESTED:
                color = '#297fb9';
                break;
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_5__.OrderState.OBTAINED:
                color = '#50c02b';
                break;
            case src_app_shared_models_profile_model__WEBPACK_IMPORTED_MODULE_5__.OrderState.REJECTED:
                color = '#c0392b';
                break;
        }
        return color;
    }
};
OrderListPage.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
OrderListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-order-list',
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderListPage);



/***/ }),

/***/ 5290:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/order-list/order-list.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.no-items {\n  font-style: italic;\n  font-style: italic;\n  color: white;\n  width: 250px;\n  margin: auto;\n  background: var(--ion-color-primary);\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.no-items .no-items-img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  height: 65px;\n}\n\n.no-items p {\n  margin-top: 0;\n}\n\n.points-container {\n  margin: 15px;\n}\n\n.list-container .title-container {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n}\n\n.list {\n  background: transparent;\n}\n\n.list .reward {\n  --background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  border-radius: 5px;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n  --padding-start: 0;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-font-size: 25px;\n}\n\n.list .reward img {\n  max-width: 100%;\n  border: 0;\n  width: 100px;\n  height: 100%;\n  object-fit: cover;\n}\n\n.list .reward .state {\n  display: flex;\n  align-items: center;\n  margin: 5px 0 5px 0;\n}\n\n.list .reward .state .dot {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.list .reward ion-label {\n  margin: 10px 0 10px 20px;\n}\n\n.list .reward ion-label .title {\n  font-weight: bolder;\n  margin-bottom: 8px;\n}\n\n.list .reward ion-label .magentos {\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n\n.list .reward ion-label .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n  margin: 5px 0;\n  color: var(--ion-color-step-600, #666666);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0ZBQUE7QUFBSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFNSTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSlI7O0FBT0k7RUFDSSxhQUFBO0FBTFI7O0FBU0E7RUFDSSxZQUFBO0FBTko7O0FBVUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUFI7O0FBV0E7RUFDSSx1QkFBQTtBQVJKOztBQVVJO0VBQ0ksbUJBQUE7RUFDQSw0RUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtBQVRSOztBQVdRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVFo7O0FBWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVZaOztBQVlZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQVZoQjs7QUFjUTtFQUNJLHdCQUFBO0FBWlo7O0FBY1k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBWmhCOztBQWVZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBYmhCOztBQWdCWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQXVCLGFBQUE7RUFFdkIscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFiaEIiLCJmaWxlIjoib3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTgwJSA2MCUgYXQgcmlnaHQsd2hpdGUgNzAlLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA3MCUpO1xyXG59XHJcblxyXG4vLyAuaXRlbS1kaXNhYmxlZHtcclxuLy8gICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLm5vLWl0ZW1ze1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgLm5vLWl0ZW1zLWltZ3tcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmxpc3QtY29udGFpbmVye1xyXG4gICAgLnRpdGxlLWNvbnRhaW5lcntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAucmV3YXJke1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMHB4IDEwcHgsIHJnYigwIDAgMCAvIDUlKSAwcHggM3B4IDBweDtcclxuICAgICAgICAvLyAtLWJvcmRlci1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWRldGFpbC1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgLS1kZXRhaWwtaWNvbi1mb250LXNpemU6IDI1cHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAuZG90IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWFnZW50b3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogMzJweDsgICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC5tYWdlbnRvc3tcclxuICAgICAgICAvLyAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgICAgLy8gICAgIC5tYWdlbnRvLWljb257XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHB7XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1491:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/order-list/order-list.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [backArrow]=\"true\" [backPage]=\"RouterConstants.PROFILE\"></app-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <div class=\"points-container\">\n    <app-footer-game [pointsFreeze]=\"globalData.player.magentoPoints\" [validateDisabled]=\"true\"></app-footer-game>\n    </div> -->\n\n    <div class=\"list-container\">\n\n    <p class=\"title-container\">{{'PAGES.PROFILE.ORDERS.TITLE' | translate}}</p>\n    \n    <ng-container *ngIf=\"loadingContent; else data\">\n        <ion-list class=\"list\">\n        <ion-item *ngFor=\"let i of array(5)\" class=\"reward\">\n            <img>\n            <ion-label>\n            <p><ion-skeleton-text animated style=\"width: 70%; height: 30px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 20px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 50px;\"></ion-skeleton-text></p>\n            </ion-label>\n        </ion-item>\n        </ion-list>\n    </ng-container>\n    \n    <ng-template #data>\n\n        <ion-list class=\"list\">\n        <!-- <ion-item detail [disabled]=\"globalData.player.magentoPoints<item.points\" class=\"reward\" button (click)=\"openDetail(item)\" *ngFor=\"let item of elements\"> -->\n        <ion-item detail class=\"reward\" button (click)=\"openDetail(item)\" *ngFor=\"let item of elements\">\n            <img [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item?.product?.imageURL\">\n            <ion-label>\n                <p class=\"magentos text-22\">{{item?.product?.points}} m - {{(item?.updatedAt) ? dateToString(item?.updatedAt) : dateToString(item?.orderDate)}}</p>\n                <div class=\"state\">\n                    <span class=\"dot\" [ngStyle]=\"{'background-color': setDotColorState(item?.state) }\"></span>\n                    <p class=\"description ion-text-wrap text-18\">{{'PAGES.PROFILE.ORDERS.DETAIL.'+item?.state | translate}}</p>\n                </div>\n                <p class=\"title ion-text-wrap text-18\">{{item?.product?.title}}</p>\n                <p class=\"description ion-text-wrap text-16\">{{item?.product?.description}}</p>\n            </ion-label>\n        </ion-item>\n        </ion-list>\n    \n        <ion-infinite-scroll (ionInfinite)=\"getOrderList($event)\" *ngIf=\"elements.length > 0\" [disabled]=\"totalElements === elements.length\">\n        <ion-infinite-scroll-content class=\"loading-spinner\" loadingSpinner=\"crescent\">\n        </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ng-template>\n    \n    <div *ngIf=\"elements.length === 0 && !loadingContent\" class=\"no-items\">\n        <ion-img class=\"no-items-img\" src=\"/assets/icon/icon.png\"></ion-img>\n        <p>{{'PAGES.PROFILE.ORDERS.NO_DATA' | translate}}</p>\n    </div>\n    \n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_order-list_order-list_module_ts.js.map