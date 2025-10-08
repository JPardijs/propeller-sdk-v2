"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryDeleteResponse = void 0;
/**
 Object class for InventoryDeleteResponse
 */
class InventoryDeleteResponse {
    /**
     Creates a new instance of InventoryDeleteResponse
     */
    constructor(data = {}) {
        this._messages = data.messages;
    }
    /**
     Error messages
     */
    get messages() {
        return this._messages;
    }
    /**
     Error messages
     */
    set messages(value) {
        this._messages = value;
    }
}
exports.InventoryDeleteResponse = InventoryDeleteResponse;
//# sourceMappingURL=InventoryDeleteResponse.js.map