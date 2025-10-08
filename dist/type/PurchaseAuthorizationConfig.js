"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseAuthorizationConfig = void 0;
/**
 Object class for PurchaseAuthorizationConfig
 */
class PurchaseAuthorizationConfig {
    /**
     Creates a new instance of PurchaseAuthorizationConfig
     */
    constructor(data = {}) {
        this._id = data.id;
        this._purchaseRole = data.purchaseRole;
        this._authorizationLimit = data.authorizationLimit;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._company = data.company;
        this._contact = data.contact;
    }
    /**
     The primary ID of the purchase authorization config, uuid v7 format
     */
    get id() {
        return this._id;
    }
    /**
     The primary ID of the purchase authorization config, uuid v7 format
     */
    set id(value) {
        this._id = value;
    }
    /**
     The purchase role of the contact within the company. Defaults to PURCHASER
     */
    get purchaseRole() {
        return this._purchaseRole;
    }
    /**
     The purchase role of the contact within the company. Defaults to PURCHASER
     */
    set purchaseRole(value) {
        this._purchaseRole = value;
    }
    /**
     The purchaser's authorization limit i.e. maximum amount that can be spent per order
     */
    get authorizationLimit() {
        return this._authorizationLimit;
    }
    /**
     The purchaser's authorization limit i.e. maximum amount that can be spent per order
     */
    set authorizationLimit(value) {
        this._authorizationLimit = value;
    }
    /**
     The creation date of this PurchaseAuthorizationConfig
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The creation date of this PurchaseAuthorizationConfig
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The last modified date of this PurchaseAuthorizationConfig
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The last modified date of this PurchaseAuthorizationConfig
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     The company the purchase authorization config is valid for
     */
    get company() {
        return this._company;
    }
    /**
     The company the purchase authorization config is valid for
     */
    set company(value) {
        this._company = value;
    }
    /**
     The contact the purchase authorization config is valid for
     */
    get contact() {
        return this._contact;
    }
    /**
     The contact the purchase authorization config is valid for
     */
    set contact(value) {
        this._contact = value;
    }
}
exports.PurchaseAuthorizationConfig = PurchaseAuthorizationConfig;
//# sourceMappingURL=PurchaseAuthorizationConfig.js.map