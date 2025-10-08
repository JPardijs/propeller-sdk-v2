"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAddProductsClustersResponse = void 0;
/**
 Object class for CategoryAddProductsClustersResponse
 */
class CategoryAddProductsClustersResponse {
    /**
     Creates a new instance of CategoryAddProductsClustersResponse
     */
    constructor(data = {}) {
        this._category = data.category;
        this._actions = data.actions;
    }
    /**
     The category object
     */
    get category() {
        return this._category;
    }
    /**
     The category object
     */
    set category(value) {
        this._category = value;
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
exports.CategoryAddProductsClustersResponse = CategoryAddProductsClustersResponse;
//# sourceMappingURL=CategoryAddProductsClustersResponse.js.map