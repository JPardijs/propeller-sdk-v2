"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterProductsActionData = void 0;
/**
 Object class for ClusterProductsActionData
 */
class ClusterProductsActionData {
    /**
     Creates a new instance of ClusterProductsActionData
     */
    constructor(data = {}) {
        this._message = data.message;
        this._success = data.success;
        this._productId = data.productId;
        this._action = data.action;
    }
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    get message() {
        return this._message;
    }
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    set message(value) {
        this._message = value;
    }
    /**
     Success status
     */
    get success() {
        return this._success;
    }
    /**
     Success status
     */
    set success(value) {
        this._success = value;
    }
    /**
     Product key used for lookup
     */
    get productId() {
        return this._productId;
    }
    /**
     Product key used for lookup
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Action performed [move]
     */
    get action() {
        return this._action;
    }
    /**
     Action performed [move]
     */
    set action(value) {
        this._action = value;
    }
}
exports.ClusterProductsActionData = ClusterProductsActionData;
//# sourceMappingURL=ClusterProductsActionData.js.map