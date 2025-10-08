"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrolledFactor = void 0;
/**
 Multi-factor authentication details for the user
 */
class EnrolledFactor {
    /**
     Creates a new instance of EnrolledFactor
     */
    constructor(data = {}) {
        this._factorId = data.factorId;
        this._phoneNumber = data.phoneNumber;
    }
    /**
     The unique identifier for the factor
     */
    get factorId() {
        return this._factorId;
    }
    /**
     The unique identifier for the factor
     */
    set factorId(value) {
        this._factorId = value;
    }
    /**
     The phoneNumber used for the factor
     */
    get phoneNumber() {
        return this._phoneNumber;
    }
    /**
     The phoneNumber used for the factor
     */
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}
exports.EnrolledFactor = EnrolledFactor;
//# sourceMappingURL=EnrolledFactor.js.map