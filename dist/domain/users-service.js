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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const mongodb_1 = require("mongodb");
const users_repositories_1 = require("../repositories/users-repositories");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.usersService = {
    createUser(login, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordSalt = yield bcrypt_1.default.genSalt(10);
            const passwordHash = yield this._generateHash(password, passwordSalt);
            let user = ({ _id: new mongodb_1.ObjectId(), login, email, passwordHash, passwordSalt });
            return users_repositories_1.usersReposytory.createUser(user);
        });
    },
    checkCredentials(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_repositories_1.usersReposytory.findByLogin(login);
            if (!user)
                return false;
            const passwordHash = yield this._generateHash(password, user.passwordSalt);
            if (user.passwordHash !== passwordHash) {
                return false;
            }
            return true;
        });
    },
    _generateHash(password, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt_1.default.hash(password, salt);
            return hash;
        });
    },
    findUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repositories_1.usersReposytory.getAllUsers();
        });
    },
    findUserByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repositories_1.usersReposytory.findByLogin(login);
        });
    },
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repositories_1.usersReposytory.findUserById(id);
        });
    }
};
