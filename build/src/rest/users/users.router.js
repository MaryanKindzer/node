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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const users_orchestrator_1 = __importDefault(require("./users.orchestrator"));
let UsersRouter = class UsersRouter {
    constructor() {
        this.usersOrchestrator = typedi_1.Container.get(users_orchestrator_1.default);
    }
    getAll() {
        return this.usersOrchestrator.getAllUsers();
    }
};
__decorate([
    routing_controllers_1.Get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersRouter.prototype, "getAll", null);
UsersRouter = __decorate([
    routing_controllers_1.Controller(),
    __metadata("design:paramtypes", [])
], UsersRouter);
exports.default = UsersRouter;
//# sourceMappingURL=users.router.js.map