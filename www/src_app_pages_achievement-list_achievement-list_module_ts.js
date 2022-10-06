(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["src_app_pages_achievement-list_achievement-list_module_ts"],{

/***/ 6897:
/*!***************************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-list-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementListPageRoutingModule": () => (/* binding */ AchievementListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _achievement_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievement-list.page */ 100);




const routes = [
    {
        path: '',
        component: _achievement_list_page__WEBPACK_IMPORTED_MODULE_0__.AchievementListPage
    },
];
let AchievementListPageRoutingModule = class AchievementListPageRoutingModule {
};
AchievementListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AchievementListPageRoutingModule);



/***/ }),

/***/ 9992:
/*!*******************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-list.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementListPageModule": () => (/* binding */ AchievementListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _achievement_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievement-list-routing.module */ 6897);
/* harmony import */ var _achievement_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./achievement-list.page */ 100);









let AchievementListPageModule = class AchievementListPageModule {
};
AchievementListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _achievement_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.AchievementListPageRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        ],
        declarations: [_achievement_list_page__WEBPACK_IMPORTED_MODULE_2__.AchievementListPage]
    })
], AchievementListPageModule);



/***/ }),

/***/ 100:
/*!*****************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-list.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementListPage": () => (/* binding */ AchievementListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_achievement_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./achievement-list.page.html */ 7080);
/* harmony import */ var _achievement_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievement-list.page.scss */ 5682);
/* harmony import */ var _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/models/achievement.model */ 1637);
/* harmony import */ var _shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/config/constants/router.constants */ 7487);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/achievement.service */ 1067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);










let AchievementListPage = class AchievementListPage {
    constructor(globalData, achievementService, router) {
        this.globalData = globalData;
        this.achievementService = achievementService;
        this.router = router;
        this.achievements = new Array();
        this.elementsPerPage = 10;
        this.AchievementState = _shared_models_achievement_model__WEBPACK_IMPORTED_MODULE_2__.AchievementState;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
    }
    ngOnInit() {
        this.getAchievements();
    }
    array(n) {
        return Array(n);
    }
    getAchievements(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!event)
                    this.loadingContent = true;
                this.currentElement = this.achievements.length;
                const data = yield this.achievementService.getChallenges(this.currentElement, this.elementsPerPage).toPromise();
                this.totalElements = data.count;
                this.achievements = this.achievements.concat(data.rows);
                console.log('Achievements ', this.achievements, this.totalElements);
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
            this.achievements = Array();
            yield this.getAchievements();
            event.target.complete();
        });
    }
    openDetail(element) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl(_shared_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_3__.RouterConstants.ACHIEVEMENT_DETAIL + element.id, { state: element.selectedElement });
        });
    }
};
AchievementListPage.ctorParameters = () => [
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_5__.GlobalDataService },
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_4__.AchievementService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
AchievementListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-achievement-list',
        template: _raw_loader_achievement_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_achievement_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AchievementListPage);



/***/ }),

/***/ 5682:
/*!*******************************************************************!*\
  !*** ./src/app/pages/achievement-list/achievement-list.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:radial-gradient(180% 60% at right,white 70%,var(--ion-color-primary) 70%);\n}\n\n.item-disabled {\n  opacity: 0.8 !important;\n}\n\n.no-items {\n  font-style: italic;\n  font-style: italic;\n  color: white;\n  width: 250px;\n  margin: auto;\n  background: var(--ion-color-primary);\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.no-items .no-items-img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  height: 65px;\n}\n\n.no-items p {\n  margin-top: 0;\n}\n\n.points-container {\n  margin: 15px;\n}\n\n.list {\n  background: transparent;\n}\n\n.list .flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.list .reward {\n  --background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  border-radius: 5px;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 20px;\n  --padding-start: 0;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-font-size: 25px;\n}\n\n.list .reward img {\n  max-width: 100%;\n  border: 0;\n  width: 100px;\n  height: 100%;\n  object-fit: cover;\n}\n\n.list .reward ion-label {\n  margin: 10px 0 10px 20px;\n}\n\n.list .reward ion-label .title {\n  font-weight: bolder;\n  margin-bottom: 8px;\n}\n\n.list .reward ion-label .magentos {\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  color: var(--ion-color-secondary);\n}\n\n.list .reward ion-label .state {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.list .reward ion-label .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  /* fallback */\n  -webkit-line-clamp: 3;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.finished {\n  border: 2px solid #fbff00b8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0ZBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBRUk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUdJO0VBQ0ksYUFBQTtBQURSOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksdUJBQUE7QUFGSjs7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRlI7O0FBS0k7RUFDSSxtQkFBQTtFQUNBLDRFQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDZCQUFBO0FBSlI7O0FBTVE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFPUTtFQUNJLHdCQUFBO0FBTFo7O0FBT1k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBTGhCOztBQVFZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBTmhCOztBQVNZO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQVBoQjs7QUFVWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQXVCLGFBQUE7RUFFdkIscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFQaEI7O0FBNEJBO0VBQ0ksMkJBQUE7QUF6QkoiLCJmaWxlIjoiYWNoaWV2ZW1lbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTgwJSA2MCUgYXQgcmlnaHQsd2hpdGUgNzAlLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA3MCUpO1xyXG59XHJcblxyXG4uaXRlbS1kaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8taXRlbXN7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAubm8taXRlbXMtaW1ne1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50cy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXdhcmR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAwcHggMTBweCwgcmdiKDAgMCAwIC8gNSUpIDBweCAzcHggMHB4O1xyXG4gICAgICAgIC8vIC0tYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWRldGFpbC1pY29uLWZvbnQtc2l6ZTogMjVweDtcclxuICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAubWFnZW50b3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN0YXRle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogMzJweDsgICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gLm1hZ2VudG9ze1xyXG4gICAgICAgIC8vICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIC5tYWdlbnRvLWljb257XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHB7XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmZpbmlzaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYmZmMDBiODtcclxufSJdfQ== */");

/***/ }),

/***/ 7080:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/achievement-list/achievement-list.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"list-container\">\n  \n    <ng-container *ngIf=\"loadingContent; else data\">\n      <ion-list class=\"list\">\n        <ion-item *ngFor=\"let i of array(5)\" class=\"reward\">\n          <img>\n          <ion-label>\n            <p><ion-skeleton-text animated style=\"width: 70%; height: 30px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 20px;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 90%; height: 50px;\"></ion-skeleton-text></p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ng-container>\n  \n    <ng-template #data>\n\n      <ion-list class=\"list\">\n        <ion-item detail button class=\"reward\" [ngClass]=\"item?.user_challenge?.user_challenge_state?.code === AchievementState.FINISHED ? 'finished': ''\" button (click)=\"openDetail(item)\" *ngFor=\"let item of achievements\">\n          <img [src]=\"environment.API_URL_BACKOFFICE+'/image/'+item?.imageURL\">\n          <ion-label>\n            <div class=\"flex\">\n              <p class=\"magentos text-22\">{{item?.points}} m</p>\n              <p class=\"state\">{{ 'PAGES.CHALLENGES.'+item?.user_challenge?.user_challenge_state?.code | translate }}</p>\n            </div>\n            <p class=\"title ion-text-wrap text-18\">{{item?.title}}</p>\n            <p class=\"description ion-text-wrap text-16\">{{item?.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  \n      <ion-infinite-scroll (ionInfinite)=\"getAchievements($event)\" *ngIf=\"achievements.length > 0\" [disabled]=\"totalElements === achievements.length\">\n        <ion-infinite-scroll-content class=\"loading-spinner\" loadingSpinner=\"crescent\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ng-template>\n  \n    <div *ngIf=\"achievements.length === 0 && !loadingContent\" class=\"no-items\">\n      <ion-img class=\"no-items-img\" src=\"/assets/icon/icon.png\"></ion-img>\n      <p>{{ 'PAGES.CHALLENGES.NO_DATA' | translate }}</p>\n    </div>\n  \n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_achievement-list_achievement-list_module_ts.js.map