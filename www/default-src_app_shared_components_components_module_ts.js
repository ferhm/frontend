(self["webpackChunkGCLoud_Granada"] = self["webpackChunkGCLoud_Granada"] || []).push([["default-src_app_shared_components_components_module_ts"],{

/***/ 8036:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection)
/* harmony export */ });
var SupportedFormat;
(function (SupportedFormat) {
    // BEGIN 1D Product
    /**
     * Android only, UPC_A is part of EAN_13 according to Apple docs
     */
    SupportedFormat["UPC_A"] = "UPC_A";
    SupportedFormat["UPC_E"] = "UPC_E";
    /**
     * Android only
     */
    SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
    SupportedFormat["EAN_8"] = "EAN_8";
    SupportedFormat["EAN_13"] = "EAN_13";
    // END 1D Product
    // BEGIN 1D Industrial
    SupportedFormat["CODE_39"] = "CODE_39";
    /**
     * iOS only
     */
    SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
    SupportedFormat["CODE_93"] = "CODE_93";
    SupportedFormat["CODE_128"] = "CODE_128";
    /**
     * Android only
     */
    SupportedFormat["CODABAR"] = "CODABAR";
    SupportedFormat["ITF"] = "ITF";
    /**
     * iOS only
     */
    SupportedFormat["ITF_14"] = "ITF_14";
    // END 1D Industrial
    // BEGIN 2D
    SupportedFormat["AZTEC"] = "AZTEC";
    SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
    /**
     * Android only
     */
    SupportedFormat["MAXICODE"] = "MAXICODE";
    SupportedFormat["PDF_417"] = "PDF_417";
    SupportedFormat["QR_CODE"] = "QR_CODE";
    /**
     * Android only
     */
    SupportedFormat["RSS_14"] = "RSS_14";
    /**
     * Android only
     */
    SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
    // END 2D
})(SupportedFormat || (SupportedFormat = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["FRONT"] = "front";
    CameraDirection["BACK"] = "back";
})(CameraDirection || (CameraDirection = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 7157:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat),
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8036);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4257)).then(m => new m.BarcodeScannerWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-scanner/qr-scanner.component */ 2304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 6290);
/* harmony import */ var _qr_scanner_square_qr_scanner_square_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-scanner-square/qr-scanner-square.component */ 6552);







// Components


let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        ],
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.QrScannerComponent,
            _qr_scanner_square_qr_scanner_square_component__WEBPACK_IMPORTED_MODULE_2__.QrScannerSquareComponent,
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.QrScannerComponent,
            _qr_scanner_square_qr_scanner_square_component__WEBPACK_IMPORTED_MODULE_2__.QrScannerSquareComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 2517);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 4658);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alert/alert.service */ 9379);
/* harmony import */ var src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/globalData/global-data.service */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants/router.constants */ 7487);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user.model */ 3709);
/* harmony import */ var _models_game_play_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/game_play.model */ 8251);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);












let HeaderComponent = class HeaderComponent {
    constructor(router, gb, location, alertService, translate) {
        this.router = router;
        this.gb = gb;
        this.location = location;
        this.alertService = alertService;
        this.translate = translate;
    }
    ngOnInit() { }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
            ];
            let result = yield this.alertService.showGameAlert(this.translate.instant('PAGES.PROFILE.LOGOUT_TITLE'), this.translate.instant('PAGES.PROFILE.LOGOUT_DESCRIPTION'), buttons);
            if (result && result.data && result.role === 'accept') {
                //TODO: Call api logout
                this.gb.userSession = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__.UserSession();
                this.gb.gamePlay = new _models_game_play_model__WEBPACK_IMPORTED_MODULE_6__.GamePlay();
                this.gb.player = new _models_game_play_model__WEBPACK_IMPORTED_MODULE_6__.Player();
                this.router.navigateByUrl(_config_constants_router_constants__WEBPACK_IMPORTED_MODULE_4__.RouterConstants.LOGIN, { replaceUrl: true });
                yield this.gb.removeSession();
            }
        });
    }
    navigateBack() {
        console.log('Navigation back', this.backPage);
        if (this.backPage)
            this.backNavigation();
        else
            this.back();
    }
    back() {
        this.location.back();
    }
    backNavigation() {
        this.router.navigateByUrl(this.backPage);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_shared_services_globalData_global_data_service__WEBPACK_IMPORTED_MODULE_3__.GlobalDataService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: src_app_shared_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
HeaderComponent.propDecorators = {
    backArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    backPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    logoutHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 6552:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/qr-scanner-square/qr-scanner-square.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerSquareComponent": () => (/* binding */ QrScannerSquareComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_qr_scanner_square_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-scanner-square.component.html */ 5971);
/* harmony import */ var _qr_scanner_square_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner-square.component.scss */ 884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let QrScannerSquareComponent = class QrScannerSquareComponent {
    constructor() {
        this.scanningStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    startScan() {
        this.scanningStarted.emit(true);
    }
};
QrScannerSquareComponent.ctorParameters = () => [];
QrScannerSquareComponent.propDecorators = {
    scanActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    scanned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    scanningStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
QrScannerSquareComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-qr-scanner-square',
        template: _raw_loader_qr_scanner_square_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scanner_square_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrScannerSquareComponent);



/***/ }),

/***/ 2304:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/qr-scanner/qr-scanner.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerComponent": () => (/* binding */ QrScannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_qr_scanner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-scanner.component.html */ 469);
/* harmony import */ var _qr_scanner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scanner.component.scss */ 5563);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert/alert.service */ 9379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 7157);







// import { Plugins } from '@capacitor/core';
// const { BarcodeScanner } = Plugins;
let QrScannerComponent = class QrScannerComponent {
    constructor(alertService, translate) {
        this.alertService = alertService;
        this.translate = translate;
        this.scanningEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.openQRScanner();
    }
    checkPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.checkPermission({ force: true });
                console.log('Status permission', status);
                if (status.granted)
                    resolve(true);
                else if (status.denied) {
                    const buttons = [
                        { text: this.translate.instant('ALERTS.CANCEL'), role: 'cancel', },
                        { text: this.translate.instant('ALERTS.ACCEPT'), role: 'accept' }
                    ];
                    let result = yield this.alertService.showGameAlert(this.translate.instant('PAGES.CHALLENGE.DETAIL.CAMERA_PERMISSION'), this.translate.instant('PAGES.CHALLENGE.DETAIL.CAMERA_PERMISSION_TEXT'), buttons);
                    if (result && result.data && result.role === 'accept') {
                        resolve(false);
                        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.openAppSettings();
                    }
                }
            }));
        });
    }
    openQRScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.prepare();
            const allowed = yield this.checkPermission();
            if (allowed) {
                _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.hideBackground();
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.startScan();
                if (result && result.hasContent && result.format === 'QR_CODE') {
                    this.stopScan(result.content);
                }
                else
                    this.stopScan();
            }
        });
    }
    stopScan(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Stop scan', data);
            if (data)
                this.scanningEnded.emit(data);
            else
                this.scanningEnded.emit(undefined);
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.showBackground();
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.stopScan();
        });
    }
};
QrScannerComponent.ctorParameters = () => [
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
QrScannerComponent.propDecorators = {
    scanActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    scanningEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
QrScannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-qr-scanner',
        template: _raw_loader_qr_scanner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scanner_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrScannerComponent);



/***/ }),

/***/ 4658:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  --box-shadow:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 884:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/qr-scanner-square/qr-scanner-square.component.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".qr {\n  border: 1px solid grey;\n  border-style: dashed;\n  border-radius: 5px;\n  color: grey;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n}\n.qr .icon {\n  position: relative;\n}\n.qr .icon .primary {\n  font-size: 55px;\n}\n.qr .icon .secondary {\n  position: absolute;\n  bottom: 2px;\n  font-size: 25px;\n  right: -8px;\n}\n.qr p {\n  width: 60%;\n  padding-left: 15px;\n  border-left: 1px solid grey;\n}\n.scan-box {\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW5uZXItc3F1YXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtBQUVaO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNaO0FBR0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQURSO0FBTUE7RUFDSSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6InFyLXNjYW5uZXItc3F1YXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucHJpbWFyeXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY29uZGFyeXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc2Nhbi1ib3h7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5563:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/qr-scanner/qr-scanner.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".qr {\n  border: 1px solid grey;\n  border-style: dashed;\n  border-radius: 5px;\n  color: grey;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n}\n.qr .icon {\n  position: relative;\n}\n.qr .icon .primary {\n  font-size: 55px;\n}\n.qr .icon .secondary {\n  position: absolute;\n  bottom: 2px;\n  font-size: 25px;\n  right: -8px;\n}\n.qr p {\n  width: 60%;\n  padding-left: 15px;\n  border-left: 1px solid grey;\n}\n.scan-box {\n  border: 2px solid var(--ion-color-primary);\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ1o7QUFHSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBRFI7QUFNQTtFQUNJLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBSEoiLCJmaWxlIjoicXItc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLnByaW1hcnl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNjYW4tYm94e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2517:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button (click)=\"navigateBack()\" slot=\"start\" *ngIf=\"backArrow\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-title mode=\"ios\">GCLoud Granada</ion-title>\r\n    <!-- <ion-button [hidden]=\"logoutHidden\" (click)=\"logout()\" slot=\"end\">\r\n      <ion-icon name=\"log-out\"></ion-icon>\r\n    </ion-button> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n");

/***/ }),

/***/ 5971:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/qr-scanner-square/qr-scanner-square.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"qr\" (click)=\"startScan()\">\n  <div class=\"icon\">\n    <ion-icon class=\"primary\" name=\"camera-outline\"></ion-icon>\n    <ion-icon class=\"secondary\" name=\"qr-code-outline\" *ngIf=\"!scanned\"></ion-icon>\n    <ion-icon class=\"secondary\" name=\"checkmark-outline\" *ngIf=\"scanned\"></ion-icon>\n  </div>\n  <p>{{text}}</p>\n</div>");

/***/ }),

/***/ 469:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/qr-scanner/qr-scanner.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"scanActive\">\n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" color=\"primary\" (click)=\"stopScan()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <div class=\"scan-box\"></div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_components_module_ts.js.map