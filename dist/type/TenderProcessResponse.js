"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderProcessResponse = void 0;
/**
 Object class for TenderProcessResponse
 */
class TenderProcessResponse {
    /**
     Creates a new instance of TenderProcessResponse
     */
    constructor(data = {}) {
        this._orderId = data.orderId;
    }
    /**
     orderId field
     */
    get orderId() {
        return this._orderId;
    }
    /**
     orderId field
     */
    set orderId(value) {
        this._orderId = value;
    }
}
exports.TenderProcessResponse = TenderProcessResponse;
//# sourceMappingURL=TenderProcessResponse.js.map