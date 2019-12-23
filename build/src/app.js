"use strict";
/*
auth service authntificate refactoring
registration in auth router (opened)
закрытый эндпоинт создания пользователя @POST(/users) @delete(users/%id)
add universities (new , router,orchm rervice, rep) (id, name, city) (get create delete) (closed) (привязка пользователя и универа)
 */
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
const path = __importStar(require("path"));
const typedi_1 = require("typedi");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const users_1 = require("./rest/users");
const universities_1 = require("./rest/universities");
const auth_1 = require("./rest/auth");
const middlewares_1 = require("./rest/middlewares");
const authRouter = typedi_1.Container.get(auth_1.AuthRouter);
const port = 8080;
const jwtVerificationMiddleware = new middlewares_1.JwtVerificationMiddleware();
// creates express app, registers all controller routes and returns you express app instance
const app = express_1.default();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(jwtVerificationMiddleware.use);
const router = express_1.default.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use('/', authRouter.getRouter());
app.use('/', router);
routing_controllers_1.useExpressServer(app, {
    controllers: [users_1.UsersRouter, universities_1.UniversitiesRouter],
    middlewares: [middlewares_1.JwtVerificationMiddleware]
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map