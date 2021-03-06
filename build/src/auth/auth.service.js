"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const typedi_1 = require("typedi");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
let AuthService = class AuthService {
    authenticate(usr) {
        const usersString = fs.readFileSync(process.env.DB_USERS, {
            encoding: 'utf8'
        });
        const users = JSON.parse(usersString).users;
        const user = users.find((user) => user.email === usr.email);
        if (!user) {
            return null;
        }
        const passwordIsValid = usr.password === user.password;
        if (!passwordIsValid) {
            return { auth: false, token: null };
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.default.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        return { auth: true, token: token };
    }
};
AuthService = __decorate([
    typedi_1.Service()
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map