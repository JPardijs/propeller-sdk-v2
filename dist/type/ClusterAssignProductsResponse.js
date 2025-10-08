"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterAssignProductsResponse = void 0;
/**
 Object class for ClusterAssignProductsResponse
 */
class ClusterAssignProductsResponse {
    /**
     Creates a new instance of ClusterAssignProductsResponse
     */
    constructor(data = {}) {
        this._cluster = data.cluster;
        this._actions = data.actions;
    }
    /**
     The cluster object
     */
    get cluster() {
        return this._cluster;
    }
    /**
     The cluster object
     */
    set cluster(value) {
        this._cluster = value;
    }
    /**
     Output messages about the actions performed.
     */
    get actions() {
        return this._actions;
    }
    /**
     Output messages about the actions performed.
     */
    set actions(value) {
        this._actions = value;
    }
}
exports.ClusterAssignProductsResponse = ClusterAssignProductsResponse;
//# sourceMappingURL=ClusterAssignProductsResponse.js.map