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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const universities_orchestrator_1 = __importDefault(require("./universities.orchestrator"));
let UniversitiesRouter = class UniversitiesRouter {
    constructor() {
        this.universitiesOrchestrator = typedi_1.Container.get(universities_orchestrator_1.default);
    }
    getAll() {
        return this.universitiesOrchestrator.getAllUniversities();
    }
    addUniversity(university) {
        return this.universitiesOrchestrator.addUniversity(university);
    }
    deleteUniversity(id) {
        const deletion = this.universitiesOrchestrator.deleteUniversity(id);
        if (deletion)
            return { "Status": "Ok" };
        return { "Status": "Fail" };
    }
};
__decorate([
    routing_controllers_1.Get('/universities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniversitiesRouter.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Post('/universities'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UniversitiesRouter.prototype, "addUniversity", null);
__decorate([
    routing_controllers_1.Delete('/universities/:id'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UniversitiesRouter.prototype, "deleteUniversity", null);
UniversitiesRouter = __decorate([
    routing_controllers_1.Controller(),
    __metadata("design:paramtypes", [])
], UniversitiesRouter);
exports.default = UniversitiesRouter;
//# sourceMappingURL=universities.router.js.map