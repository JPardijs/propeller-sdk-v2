"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
/**
 Object class for Login
 */
class Login {
    /**
     Creates a new instance of Login
     */
    constructor(data = {}) {
        this._providerId = data.providerId;
        this._operationType = data.operationType;
        this._session = data.session;
    }
    /**
     providerId field
     */
    get providerId() {
        return this._providerId;
    }
    /**
     providerId field
     */
    set providerId(value) {
        this._providerId = value;
    }
    /**
     operationType field
     */
    get operationType() {
        return this._operationType;
    }
    /**
     operationType field
     */
    set operationType(value) {
        this._operationType = value;
    }
    /**
     session field
     */
    get session() {
        return this._session;
    }
    /**
     session field
     */
    set session(value) {
        this._session = value;
    }
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map