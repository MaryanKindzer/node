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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const typedi_1 = require("typedi");
let UniversitiesRepository = class UniversitiesRepository {
    getAllUniversities() {
        const universitiesString = fs.readFileSync(process.env.DB_USERS, {
            encoding: 'utf8'
        });
        return JSON.parse(universitiesString).universities;
    }
    removeUniversity(univers, id_req) {
        const res = univers.reduce(({ universities, status }, item) => {
            const { id } = item;
            if (id_req === id) {
                status = true;
            }
            else {
                universities.push(item);
            }
            return { universities, status };
        }, { universities: [], status: false });
        return res;
    }
    deleteUniversity(id_from_req) {
        const universitiesString = fs.readFileSync(process.env.DB_USERS, {
            encoding: 'utf8'
        });
        const { users, universities: unis } = JSON.parse(universitiesString);
        const { universities, status } = this.removeUniversity(unis, id_from_req);
        if (status) {
            const json = JSON.stringify({ users, universities });
            fs.writeFileSync(process.env.DB_USERS, json, 'utf8');
            return true;
        }
        return false;
    }
    addUniversity(university) {
        return { "Type": "Success" };
    }
};
UniversitiesRepository = __decorate([
    typedi_1.Service()
], UniversitiesRepository);
exports.default = UniversitiesRepository;
//# sourceMappingURL=universities.repository.js.map