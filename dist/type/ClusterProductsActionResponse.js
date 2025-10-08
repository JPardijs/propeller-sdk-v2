"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterProductsActionResponse = void 0;
/**
 Object class for ClusterProductsActionResponse
 */
class ClusterProductsActionResponse {
    /**
     Creates a new instance of ClusterProductsActionResponse
     */
    constructor(data = {}) {
        this._data = data.data;
        this._messages = data.messages;
    }
    /**
     List of output messaged for actions performed
     */
    get data() {
        return this._data;
    }
    /**
     List of output messaged for actions performed
     */
    set data(value) {
        this._data = value;
    }
    /**
     List of extra messages
     */
    get messages() {
        return this._messages;
    }
    /**
     List of extra messages
     */
    set messages(value) {
        this._messages = value;
    }
}
exports.ClusterProductsActionResponse = ClusterProductsActionResponse;
//# sourceMappingURL=ClusterProductsActionResponse.js.map