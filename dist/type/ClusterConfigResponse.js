"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigResponse = void 0;
/**
 Object class for ClusterConfigResponse
 */
class ClusterConfigResponse {
    /**
     Creates a new instance of ClusterConfigResponse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._settings = data.settings;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
    }
    /**
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     settings field
     */
    get settings() {
        return this._settings;
    }
    /**
     settings field
     */
    set settings(value) {
        this._settings = value;
    }
}
exports.ClusterConfigResponse = ClusterConfigResponse;
//# sourceMappingURL=ClusterConfigResponse.js.map