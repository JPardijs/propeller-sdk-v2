"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderConfirmResponseType = void 0;
/**
 Object class for SendOrderConfirmResponseType
 */
class SendOrderConfirmResponseType {
    /**
     Creates a new instance of SendOrderConfirmResponseType
     */
    constructor(data = {}) {
        this._messageId = data.messageId;
        this._success = data.success;
    }
    /**
     messageId field
     */
    get messageId() {
        return this._messageId;
    }
    /**
     messageId field
     */
    set messageId(value) {
        this._messageId = value;
    }
    /**
     success field
     */
    get success() {
        return this._success;
    }
    /**
     success field
     */
    set success(value) {
        this._success = value;
    }
}
exports.SendOrderConfirmResponseType = SendOrderConfirmResponseType;
//# sourceMappingURL=SendOrderConfirmResponseType.js.map