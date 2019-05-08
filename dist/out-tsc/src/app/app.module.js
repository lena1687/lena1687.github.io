"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var slider_component_1 = require("./slider/slider.component");
var app_routing_module_1 = require("./app-routing.module");
var router_1 = require("@angular/router");
var routes = [
    { path: 'slider', component: slider_component_1.SliderComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                slider_component_1.SliderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ngx_bootstrap_1.TabsModule.forRoot(),
                ngx_bootstrap_1.CarouselModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot(routes),
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map