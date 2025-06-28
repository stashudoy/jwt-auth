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
exports.runDB = exports.usersCollection = void 0;
const mongodb_1 = require("mongodb");
const uri = process.env.uri || "mongodb://localhost:27017";
const client = new mongodb_1.MongoClient(uri);
const db = client.db("jwt-auth");
exports.usersCollection = db.collection('users');
const runDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        yield client.db("jwt-auth").command({ ping: 1 });
        console.log("You successfully connect to MongoDB!");
    }
    catch (err) {
        console.log(err);
        console.log("Connect error to MongoDB!");
        yield client.close();
    }
});
exports.runDB = runDB;
