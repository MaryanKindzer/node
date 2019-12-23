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
const typedi_1 = require("typedi");
const universities_1 = require("../../universities");
let UniversitiesOrchestrator = class UniversitiesOrchestrator {
    constructor(universitiesService) {
        this.universitiesService = universitiesService;
    }
    getAllUniversities() {
        return this.universitiesService.getAllUniversities();
    }
    deleteUniversity(id) {
        return this.universitiesService.deleteUniversity(id);
    }
    addUniversity(university) {
        return this.universitiesService.addUniversity(university);
    }
};
UniversitiesOrchestrator = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [universities_1.UniversitiesService])
], UniversitiesOrchestrator);
exports.default = UniversitiesOrchestrator;
//# sourceMappingURL=universities.orchestrator.js.map