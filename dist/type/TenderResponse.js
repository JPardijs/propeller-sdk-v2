"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderResponse = void 0;
/**
 Object class for TenderResponse
 */
class TenderResponse {
    /**
     Creates a new instance of TenderResponse
     */
    constructor(data = {}) {
        this._tender = data.tender;
        this._response = data.response;
    }
    /**
     Tender
     */
    get tender() {
        return this._tender;
    }
    /**
     Tender
     */
    set tender(value) {
        this._tender = value;
    }
    /**
     Tender response data
     */
    get response() {
        return this._response;
    }
    /**
     Tender response data
     */
    set response(value) {
        this._response = value;
    }
}
exports.TenderResponse = TenderResponse;
//# sourceMappingURL=TenderResponse.js.map