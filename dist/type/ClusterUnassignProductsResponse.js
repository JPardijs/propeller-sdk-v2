"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterUnassignProductsResponse = void 0;
/**
 Object class for ClusterUnassignProductsResponse
 */
class ClusterUnassignProductsResponse {
    /**
     Creates a new instance of ClusterUnassignProductsResponse
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
exports.ClusterUnassignProductsResponse = ClusterUnassignProductsResponse;
//# sourceMappingURL=ClusterUnassignProductsResponse.js.map