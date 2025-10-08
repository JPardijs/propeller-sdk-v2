"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicToken = void 0;
/**
 Object class for MagicToken
 */
class MagicToken {
    /**
     Creates a new instance of MagicToken
     */
    constructor(data = {}) {
        this._id = data.id;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._expiresAt = data.expiresAt;
        this._lastAccessedAt = data.lastAccessedAt;
        this._failedLogins = data.failedLogins;
        this._successfulLogins = data.successfulLogins;
        this._oneTimeUse = data.oneTimeUse;
        this._extra = data.extra;
        this._contact = data.contact;
        this._customer = data.customer;
    }
    /**
     Magic token primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Magic token primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Identifier of the associated contact, use either contactId or customerId
     */
    get contactId() {
        return this._contactId;
    }
    /**
     Identifier of the associated contact, use either contactId or customerId
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     Identifier of the associated customer, use either customerId or contactId
     */
    get customerId() {
        return this._customerId;
    }
    /**
     Identifier of the associated customer, use either customerId or contactId
     */
    set customerId(value) {
        this._customerId = value;
    }
    /**
     Expiration date and time of the magic token
     */
    get expiresAt() {
        return this._expiresAt;
    }
    /**
     Expiration date and time of the magic token
     */
    set expiresAt(value) {
        this._expiresAt = value;
    }
    /**
     Last accessed date and time of the magic token
     */
    get lastAccessedAt() {
        return this._lastAccessedAt;
    }
    /**
     Last accessed date and time of the magic token
     */
    set lastAccessedAt(value) {
        this._lastAccessedAt = value;
    }
    /**
     Number of failed login attempts using the magic token
     */
    get failedLogins() {
        return this._failedLogins;
    }
    /**
     Number of failed login attempts using the magic token
     */
    set failedLogins(value) {
        this._failedLogins = value;
    }
    /**
     Number of successful login attempts using the magic token
     */
    get successfulLogins() {
        return this._successfulLogins;
    }
    /**
     Number of successful login attempts using the magic token
     */
    set successfulLogins(value) {
        this._successfulLogins = value;
    }
    /**
     Indicates if the magic token is for one-time use only
     */
    get oneTimeUse() {
        return this._oneTimeUse;
    }
    /**
     Indicates if the magic token is for one-time use only
     */
    set oneTimeUse(value) {
        this._oneTimeUse = value;
    }
    /**
     Additional information or metadata associated with the magic token
     */
    get extra() {
        return this._extra;
    }
    /**
     Additional information or metadata associated with the magic token
     */
    set extra(value) {
        this._extra = value;
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
}
exports.MagicToken = MagicToken;
//# sourceMappingURL=MagicToken.js.map