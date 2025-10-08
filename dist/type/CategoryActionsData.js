"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryActionsData = void 0;
/**
 Object class for CategoryActionsData
 */
class CategoryActionsData {
    /**
     Creates a new instance of CategoryActionsData
     */
    constructor(data = {}) {
        this._message = data.message;
        this._success = data.success;
        this._productId = data.productId;
        this._clusterId = data.clusterId;
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
     Product ID the action was performed to
     */
    get productId() {
        return this._productId;
    }
    /**
     Product ID the action was performed to
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Cluster ID the action was performed to
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     Cluster ID the action was performed to
     */
    set clusterId(value) {
        this._clusterId = value;
    }
}
exports.CategoryActionsData = CategoryActionsData;
//# sourceMappingURL=CategoryActionsData.js.map