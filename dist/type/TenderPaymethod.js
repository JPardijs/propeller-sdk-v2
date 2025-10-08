"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderPaymethod = void 0;
/**
 Object class for TenderPaymethod
 */
class TenderPaymethod {
    /**
     Creates a new instance of TenderPaymethod
     */
    constructor(data = {}) {
        this._code = data.code;
        this._externalCode = data.externalCode;
        this._type = data.type;
        this._description = data.description;
        this._amount = data.amount;
        this._allowed = data.allowed;
    }
    /**
     Payment method code
     */
    get code() {
        return this._code;
    }
    /**
     Payment method code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Payment method external code
     */
    get externalCode() {
        return this._externalCode;
    }
    /**
     Payment method external code
     */
    set externalCode(value) {
        this._externalCode = value;
    }
    /**
     Payment method type
     */
    get type() {
        return this._type;
    }
    /**
     Payment method type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Payment method description
     */
    get description() {
        return this._description;
    }
    /**
     Payment method description
     */
    set description(value) {
        this._description = value;
    }
    /**
     Payment method amount
     */
    get amount() {
        return this._amount;
    }
    /**
     Payment method amount
     */
    set amount(value) {
        this._amount = value;
    }
    /**
     Indicates whether payment method is allowed for the tender user
     */
    get allowed() {
        return this._allowed;
    }
    /**
     Indicates whether payment method is allowed for the tender user
     */
    set allowed(value) {
        this._allowed = value;
    }
}
exports.TenderPaymethod = TenderPaymethod;
//# sourceMappingURL=TenderPaymethod.js.map