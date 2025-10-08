"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterContactResponse = void 0;
/**
 Object class for RegisterContactResponse
 */
class RegisterContactResponse {
    /**
     Creates a new instance of RegisterContactResponse
     */
    constructor(data = {}) {
        this._contact = data.contact;
        this._session = data.session;
    }
    /**
     contact field
     */
    get contact() {
        return this._contact;
    }
    /**
     contact field
     */
    set contact(value) {
        this._contact = value;
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
exports.RegisterContactResponse = RegisterContactResponse;
//# sourceMappingURL=RegisterContactResponse.js.map