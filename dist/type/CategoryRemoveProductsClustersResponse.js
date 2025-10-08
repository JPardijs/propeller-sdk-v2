"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRemoveProductsClustersResponse = void 0;
/**
 Object class for CategoryRemoveProductsClustersResponse
 */
class CategoryRemoveProductsClustersResponse {
    /**
     Creates a new instance of CategoryRemoveProductsClustersResponse
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
exports.CategoryRemoveProductsClustersResponse = CategoryRemoveProductsClustersResponse;
//# sourceMappingURL=CategoryRemoveProductsClustersResponse.js.map