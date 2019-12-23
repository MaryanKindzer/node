"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi"); // tslint:disable-line:ayx-aep-no-container-get
// This class mainly exists to give extended router classes access to the configuration file as well as
// an express router
let BaseRouter = class BaseRouter {
    constructor() {
        // All routers should call an init function from their constructor that sets up all of the routes.
        // This isn't enforced in any way but for routers that have many endpoints it helps to keep the constructor neat.
        this.router = express_1.Router();
    }
    getRouter() {
        return this.router;
    }
};
BaseRouter = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], BaseRouter);
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.router.js.map