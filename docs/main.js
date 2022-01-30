"use strict";
(self["webpackChunkjamesframes_frontend"] = self["webpackChunkjamesframes_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'About', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ 4774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'jamesframes-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ 4774);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6183);
/* harmony import */ var mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdb-angular-ui-kit/accordion */ 1316);
/* harmony import */ var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdb-angular-ui-kit/carousel */ 2767);
/* harmony import */ var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mdb-angular-ui-kit/checkbox */ 7128);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 4452);
/* harmony import */ var mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mdb-angular-ui-kit/dropdown */ 275);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 7616);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 8252);
/* harmony import */ var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mdb-angular-ui-kit/popover */ 8091);
/* harmony import */ var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdb-angular-ui-kit/radio */ 9888);
/* harmony import */ var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mdb-angular-ui-kit/range */ 3327);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 6118);
/* harmony import */ var mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mdb-angular-ui-kit/scrollspy */ 7697);
/* harmony import */ var mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mdb-angular-ui-kit/tabs */ 5697);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 2488);
/* harmony import */ var mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mdb-angular-ui-kit/validation */ 7361);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_8__.MdbAccordionModule,
            mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_9__.MdbCarouselModule,
            mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_10__.MdbCheckboxModule,
            mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_11__.MdbCollapseModule,
            mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_12__.MdbDropdownModule,
            mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_13__.MdbFormsModule,
            mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_14__.MdbModalModule,
            mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_15__.MdbPopoverModule,
            mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_16__.MdbRadioModule,
            mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_17__.MdbRangeModule,
            mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_18__.MdbRippleModule,
            mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_19__.MdbScrollspyModule,
            mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_20__.MdbTabsModule,
            mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_21__.MdbTooltipModule,
            mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_22__.MdbValidationModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__.NavMenuComponent,
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_8__.MdbAccordionModule,
        mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_9__.MdbCarouselModule,
        mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_10__.MdbCheckboxModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_11__.MdbCollapseModule,
        mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_12__.MdbDropdownModule,
        mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_13__.MdbFormsModule,
        mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_14__.MdbModalModule,
        mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_15__.MdbPopoverModule,
        mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_16__.MdbRadioModule,
        mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_17__.MdbRangeModule,
        mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_18__.MdbRippleModule,
        mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_19__.MdbScrollspyModule,
        mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_20__.MdbTabsModule,
        mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_21__.MdbTooltipModule,
        mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_22__.MdbValidationModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 49, vars: 0, consts: [[1, "mt-5"], [1, "container"], [1, "row"], [1, "col-md-6", "gx-5", "mb-4"], ["data-mdb-ripple-color", "light", 1, "bg-image", "hover-overlay", "ripple", "shadow-2-strong"], ["src", "https://d1mvkgd75mydej.cloudfront.net/portrait-bw.jpg", "alt", "Portrait of Rob James", 1, "img-fluid"], ["href", "#!"], [1, "mask", 2, "background-color", "rgba(251, 251, 251, 0.15)"], [1, "text-center"], ["data-bs-toggle", "collapse", "href", "#events", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-dark", "d-flex", "justify-content-center", "align-items-center"], ["id", "events", 1, "collapse"], [1, "card", "card-body"], ["data-bs-toggle", "collapse", "href", "#style", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-dark", "d-flex", "justify-content-center", "align-items-center"], ["id", "style", 1, "collapse"], ["data-bs-toggle", "collapse", "href", "#choice", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-dark", "d-flex", "justify-content-center", "align-items-center"], ["id", "choice", 1, "collapse"], ["data-bs-toggle", "collapse", "href", "#customer", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-dark", "d-flex", "justify-content-center", "align-items-center"], ["id", "customer", 1, "collapse"], ["href", "mailto:jamesframesphotos@gmail.com?subject=Photography Request", "role", "button", 1, "btn", "btn-primary", "btn-block", "mb-5"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Meet your new photographer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " My mission is black and white: Be nice, passionate, and timely. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " That's the RJ way. I know it's corny, but let me have this one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " What do you shoot? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Weddings, engagements, baby showers, graduation photos, work/holiday parties, hotdog eating contests. You know, the ususal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " How would you describe your style? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cinematic candids.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Are you the photographer for me? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Who is your typical customer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " My core customers are families, individuals, and event planners that are hosting parties, large or small, and celebrations. I especially love shooting engagements and baby showers/gender reveals because there's generally a certain element of surprise that makes for wonderful facial expressions. And most people these days do these events at nice locations, so it makes the job that much easier. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6183:
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 2, vars: 0, template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-angular-ui-kit/carousel */ 2767);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 103, vars: 2, consts: [[1, "carousel-fade", 3, "controls", "indicators"], ["src", "https://d1mvkgd75mydej.cloudfront.net/DSC03413.jpg", "alt", "Picture of Japanese Tori gate", 1, "d-block", "w-100"], [1, "mask", 2, "background-color", "rgba(0, 0, 0, 0.6)"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "text-white", "text-center"], ["href", "https://www.robertjames.photos/", "target", "Gallery", "role", "button", 1, "btn", "btn-outline-light", "btn-md", "m-2"], ["href", "mailto:jamesframesphotos@gmail.com?subject=Photography Request", "target", "Gallery", "role", "button", 1, "btn", "btn-outline-light", "btn-md", "m-2"], ["href", "About", "role", "button", 1, "btn", "btn-outline-light", "btn-lg=", "m-2"], ["src", "https://miro.medium.com/max/2000/1*Jb9xAs1zglLMElx-cpNRAg.png", "alt", "Angular logo", 1, "d-block", "w-100"], [1, "mt-5"], [1, "container"], [1, "row"], [1, "col-md-6", "gx-5", "mb-4"], ["data-mdb-ripple-color", "light", 1, "bg-image", "hover-overlay", "ripple", "shadow-2-strong"], ["src", "https://d1mvkgd75mydej.cloudfront.net/DSC00259.png", "alt", "Baby shower portrait", 1, "img-fluid"], ["href", ""], [1, "mask", 2, "background-color", "rgba(251, 251, 251, 0.15)"], [1, "text-muted"], ["href", "Gallery", 1, "text-decoration-none"], ["href", "About", 1, "text-decoration-none"], [1, "my-5"], [1, "text-center"], [1, "mb-5"], [1, "col-lg-4", "col-md-12", "mb-4"], [1, "card"], ["data-mdb-ripple-color", "light", 1, "bg-image", "hover-overlay", "ripple"], ["src", "https://d1mvkgd75mydej.cloudfront.net/DSC07682.jpg", 1, "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "col-lg-4", "col-md-6", "mb-4"], ["src", "https://d1mvkgd75mydej.cloudfront.net/DSC06356.jpg", 1, "img-fluid"], ["src", "https://d1mvkgd75mydej.cloudfront.net/RCJ06243.jpg", 1, "img-fluid"], [1, "mb-3", "text-center"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-6"], [1, "row", "mb-4"], [1, "col"], ["href", "mailto:jamesframesphotos@gmail.com?subject=Photography Request", "role", "button", 1, "btn", "btn-primary", "btn-block", "mb-4"], [1, "footer-copyright", "text-center", "py-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Meet your new photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This site is powered by Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Smiles, captured.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " It's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "easy to see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " why people trust me with their most special moments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "What's the secret?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " My process embodies passion and precision. Striking framing, sharp focus, and timely processing of your images. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Come see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "what I'm all about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Recent favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Holiday Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Low light, high fun.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Kimono Portraiture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Mother & daughter strolling through cherry blossoms in Japan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Ocean Beach, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Taken by hand as the golden sun sets in beautiful California. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Like what you see?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Let's get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u00A9 2022 Copyright: Robert James ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controls", true)("indicators", true);
    } }, directives: [mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_1__.MdbCarouselComponent, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_1__.MdbCarouselItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4774:
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuComponent": () => (/* binding */ NavMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 4452);


class NavMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 25, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-fixed-top", "navbar-light", "bg-light", "main-nav"], [1, "container"], [1, "navbar-collapse", "collapse", "nav-content", "order-2"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], ["href", "", 1, "nav-link"], [1, "nav-item"], ["href", "About", 1, "nav-link"], [1, "nav", "navbar-nav", "text-nowrap", "flex-row", "mx-md-auto", "order-1", "order-md-2"], ["href", "/", 1, "navbar-brand"], ["src", "assets/logo.png", "alt", "James Frames Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navBarCollapse", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fas", "fa-bars"], ["id", "navbarTogglerDemo02", "mdbCollapse", "", 1, "collapse", "navbar-collapse"], ["id", "navBarCollapse", 1, "navbar-collapse", "collapse", "nav-content", "order-3", "order-md-3"], ["href", "https://www.robertjames.photos/", 1, "nav-link"], ["href", "https://www.redbubble.com/people/JamesFrames/shop?asc=u&ref=account-nav-dropdown", 1, "nav-link"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_1__.MdbCollapseDirective], styles: ["html[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLGlEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6Im5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBtYXJnaW46IDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map