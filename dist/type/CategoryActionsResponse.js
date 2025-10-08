"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryActionsResponse = void 0;
/**
 Object class for CategoryActionsResponse
 */
class CategoryActionsResponse {
    /**
     Creates a new instance of CategoryActionsResponse
     */
    constructor(data = {}) {
        this._data = data.data;
        this._messages = data.messages;
    }
    /**
     List of output messages for actions performed
     */
    get data() {
        return this._data;
    }
    /**
     List of output messages for actions performed
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
exports.CategoryActionsResponse = CategoryActionsResponse;
//# sourceMappingURL=CategoryActionsResponse.js.map