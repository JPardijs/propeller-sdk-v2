"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationResponse = void 0;
/**
 Object class for ConfirmationResponse
 */
class ConfirmationResponse {
    /**
     Creates a new instance of ConfirmationResponse
     */
    constructor(data = {}) {
        this._status = data.status;
        this._message = data.message;
    }
    /**
     Confirmation status value
     */
    get status() {
        return this._status;
    }
    /**
     Confirmation status value
     */
    set status(value) {
        this._status = value;
    }
    /**
     Confirmation message
     */
    get message() {
        return this._message;
    }
    /**
     Confirmation message
     */
    set message(value) {
        this._message = value;
    }
}
exports.ConfirmationResponse = ConfirmationResponse;
//# sourceMappingURL=ConfirmationResponse.js.map