"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCustomerResponse = void 0;
/**
 Object class for RegisterCustomerResponse
 */
class RegisterCustomerResponse {
    /**
     Creates a new instance of RegisterCustomerResponse
     */
    constructor(data = {}) {
        this._customer = data.customer;
        this._session = data.session;
    }
    /**
     customer field
     */
    get customer() {
        return this._customer;
    }
    /**
     customer field
     */
    set customer(value) {
        this._customer = value;
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
exports.RegisterCustomerResponse = RegisterCustomerResponse;
//# sourceMappingURL=RegisterCustomerResponse.js.map