"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderResponseData = void 0;
/**
 Object class for TenderResponseData
 */
class TenderResponseData {
    /**
     Creates a new instance of TenderResponseData
     */
    constructor(data = {}) {
        this._data = data.data;
        this._error = data.error;
        this._messages = data.messages;
    }
    /**
     Response data
     */
    get data() {
        return this._data;
    }
    /**
     Response data
     */
    set data(value) {
        this._data = value;
    }
    /**
     Error
     */
    get error() {
        return this._error;
    }
    /**
     Error
     */
    set error(value) {
        this._error = value;
    }
    /**
     Response message(s)
     */
    get messages() {
        return this._messages;
    }
    /**
     Response message(s)
     */
    set messages(value) {
        this._messages = value;
    }
}
exports.TenderResponseData = TenderResponseData;
//# sourceMappingURL=TenderResponseData.js.map