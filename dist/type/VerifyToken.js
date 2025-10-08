"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
/**
 Object class for VerifyToken
 */
class VerifyToken {
    /**
     Creates a new instance of VerifyToken
     */
    constructor(data = {}) {
        this._uid = data.uid;
        this._name = data.name;
        this._claims = data.claims;
        this._iss = data.iss;
        this._aud = data.aud;
        this._auth_time = data.auth_time;
        this._user_id = data.user_id;
        this._sub = data.sub;
        this._iat = data.iat;
        this._exp = data.exp;
        this._email = data.email;
        this._email_verified = data.email_verified;
        this._firebase = data.firebase;
    }
    /**
     uid field
     */
    get uid() {
        return this._uid;
    }
    /**
     uid field
     */
    set uid(value) {
        this._uid = value;
    }
    /**
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     claims field
     */
    get claims() {
        return this._claims;
    }
    /**
     claims field
     */
    set claims(value) {
        this._claims = value;
    }
    /**
     iss field
     */
    get iss() {
        return this._iss;
    }
    /**
     iss field
     */
    set iss(value) {
        this._iss = value;
    }
    /**
     aud field
     */
    get aud() {
        return this._aud;
    }
    /**
     aud field
     */
    set aud(value) {
        this._aud = value;
    }
    /**
     auth_time field
     */
    get auth_time() {
        return this._auth_time;
    }
    /**
     auth_time field
     */
    set auth_time(value) {
        this._auth_time = value;
    }
    /**
     user_id field
     */
    get user_id() {
        return this._user_id;
    }
    /**
     user_id field
     */
    set user_id(value) {
        this._user_id = value;
    }
    /**
     sub field
     */
    get sub() {
        return this._sub;
    }
    /**
     sub field
     */
    set sub(value) {
        this._sub = value;
    }
    /**
     iat field
     */
    get iat() {
        return this._iat;
    }
    /**
     iat field
     */
    set iat(value) {
        this._iat = value;
    }
    /**
     exp field
     */
    get exp() {
        return this._exp;
    }
    /**
     exp field
     */
    set exp(value) {
        this._exp = value;
    }
    /**
     email field
     */
    get email() {
        return this._email;
    }
    /**
     email field
     */
    set email(value) {
        this._email = value;
    }
    /**
     email_verified field
     */
    get email_verified() {
        return this._email_verified;
    }
    /**
     email_verified field
     */
    set email_verified(value) {
        this._email_verified = value;
    }
    /**
     firebase field
     */
    get firebase() {
        return this._firebase;
    }
    /**
     firebase field
     */
    set firebase(value) {
        this._firebase = value;
    }
}
exports.VerifyToken = VerifyToken;
//# sourceMappingURL=VerifyToken.js.map