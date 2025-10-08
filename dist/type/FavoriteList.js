"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteList = void 0;
/**
 Object class for FavoriteList
 */
class FavoriteList {
    /**
     Creates a new instance of FavoriteList
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._companyId = data.companyId;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._isDefault = data.isDefault;
        this._slug = data.slug;
        this._createdAt = data.createdAt;
        this._updatedAt = data.updatedAt;
        this._products = data.products;
        this._clusters = data.clusters;
        this._company = data.company;
        this._contact = data.contact;
        this._customer = data.customer;
    }
    /**
     Favorite List unique identifier
     */
    get id() {
        return this._id;
    }
    /**
     Favorite List unique identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Favorite List name
     */
    get name() {
        return this._name;
    }
    /**
     Favorite List name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Favorite List company ID
     */
    get companyId() {
        return this._companyId;
    }
    /**
     Favorite List company ID
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     Favorite List contact ID
     */
    get contactId() {
        return this._contactId;
    }
    /**
     Favorite List contact ID
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     Favorite List customer ID
     */
    get customerId() {
        return this._customerId;
    }
    /**
     Favorite List customer ID
     */
    set customerId(value) {
        this._customerId = value;
    }
    /**
     Default Favorite List
     */
    get isDefault() {
        return this._isDefault;
    }
    /**
     Default Favorite List
     */
    set isDefault(value) {
        this._isDefault = value;
    }
    /**
     Favorite List slug
     */
    get slug() {
        return this._slug;
    }
    /**
     Favorite List slug
     */
    set slug(value) {
        this._slug = value;
    }
    /**
     Favorite List date created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Favorite List date created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Favorite List date modified
     */
    get updatedAt() {
        return this._updatedAt;
    }
    /**
     Favorite List date modified
     */
    set updatedAt(value) {
        this._updatedAt = value;
    }
    /**
     products field
     */
    get products() {
        return this._products;
    }
    /**
     products field
     */
    set products(value) {
        this._products = value;
    }
    /**
     clusters field
     */
    get clusters() {
        return this._clusters;
    }
    /**
     clusters field
     */
    set clusters(value) {
        this._clusters = value;
    }
    /**
     company field
     */
    get company() {
        return this._company;
    }
    /**
     company field
     */
    set company(value) {
        this._company = value;
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
exports.FavoriteList = FavoriteList;
//# sourceMappingURL=FavoriteList.js.map