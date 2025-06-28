"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
exports.settings = {
    JWT_SECRET: process.env.JWT_SECRET || "123",
    MONGO_URI: process.env.mongoURI || "mongodb://0.0.0.0:27017"
};
