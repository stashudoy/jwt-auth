"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const users_service_1 = require("../domain/users-service");
const express_1 = require("express");
exports.authRouter = (0, express_1.Router)({});
exports.authRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const checkResult = yield users_service_1.usersService.checkCredentials(req.body.login, req.body.password);
    if (checkResult) {
        res.status(201).send("Good");
    }
    else {
        res.status(201).send("Oшибка авторизации");
    }
}));
