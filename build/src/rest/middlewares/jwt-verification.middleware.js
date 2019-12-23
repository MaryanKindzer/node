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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
let JwtVerificationMiddleware = class JwtVerificationMiddleware {
    constructor() {
        this.excludedUrls = ['/login'];
        this.use = (req, res, next) => {
            if (this.excludedUrls.includes(req.originalUrl)) {
                return next();
            }
            const token = req.headers['x-auth-token'];
            if (!token) {
                return res.status(403).send({ auth: false, message: 'No token provided.' });
            }
            jsonwebtoken_1.default.verify(token, config_1.default.secret, function (err, decoded) {
                if (err) {
                    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                }
                next();
            });
        };
    }
};
JwtVerificationMiddleware = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], JwtVerificationMiddleware);
exports.default = JwtVerificationMiddleware;
//# sourceMappingURL=jwt-verification.middleware.js.map