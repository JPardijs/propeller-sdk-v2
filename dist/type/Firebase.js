"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firebase = void 0;
/**
 Object class for Firebase
 */
class Firebase {
    /**
     Creates a new instance of Firebase
     */
    constructor(data = {}) {
        this._identities = data.identities;
        this._sign_in_provider = data.sign_in_provider;
        this._sign_in_second_factor = data.sign_in_second_factor;
        this._second_factor_identifier = data.second_factor_identifier;
        this._tenant = data.tenant;
    }
    /**
     identities field
     */
    get identities() {
        return this._identities;
    }
    /**
     identities field
     */
    set identities(value) {
        this._identities = value;
    }
    /**
     sign_in_provider field
     */
    get sign_in_provider() {
        return this._sign_in_provider;
    }
    /**
     sign_in_provider field
     */
    set sign_in_provider(value) {
        this._sign_in_provider = value;
    }
    /**
     sign_in_second_factor field
     */
    get sign_in_second_factor() {
        return this._sign_in_second_factor;
    }
    /**
     sign_in_second_factor field
     */
    set sign_in_second_factor(value) {
        this._sign_in_second_factor = value;
    }
    /**
     second_factor_identifier field
     */
    get second_factor_identifier() {
        return this._second_factor_identifier;
    }
    /**
     second_factor_identifier field
     */
    set second_factor_identifier(value) {
        this._second_factor_identifier = value;
    }
    /**
     tenant field
     */
    get tenant() {
        return this._tenant;
    }
    /**
     tenant field
     */
    set tenant(value) {
        this._tenant = value;
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=Firebase.js.map