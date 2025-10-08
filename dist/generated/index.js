"use strict";
/**
 * Generated GraphQL bundles index
 * This file is auto-generated. Do not edit manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
__exportStar(require("./queries"), exports);
__exportStar(require("./mutations"), exports);
__exportStar(require("./fragments"), exports);
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const fragments_1 = require("./fragments");
exports.graphql = {
    queries: queries_1.queries,
    mutations: mutations_1.mutations,
    fragments: fragments_1.fragments
};
exports.default = exports.graphql;
//# sourceMappingURL=index.js.map