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
const auth_orchestrator_1 = __importDefault(require("./auth.orchestrator"));
const base_router_1 = require("../base.router");
const typedi_1 = require("typedi");
let AuthRouter = class AuthRouter extends base_router_1.BaseRouter {
    constructor(authOrchestrator) {
        super();
        this.authOrchestrator = authOrchestrator;
        this.authenticate = (req, res) => {
            const authentication = this.authOrchestrator.authenticate(req.body);
            if (!authentication) {
                res.status(404).send('User not found.');
                return;
            }
            const { auth } = authentication;
            if (!auth) {
                res.status(401).send(authentication);
                return;
            }
            res.status(200).send(authentication);
        };
        this.initializeRouteHandlers();
    }
    initializeRouteHandlers() {
        this.router.post('/login', this.authenticate);
    }
};
AuthRouter = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [auth_orchestrator_1.default])
], AuthRouter);
exports.default = AuthRouter;
//# sourceMappingURL=auth.router.js.map