"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderlist = void 0;
/**
 Object class for Orderlist
 */
class Orderlist {
    /**
     Creates a new instance of Orderlist
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._descriptions = data.descriptions;
        this._extras = data.extras;
        this._code = data.code;
        this._validFrom = data.validFrom;
        this._validTo = data.validTo;
        this._type = data.type;
        this._partnerEntity = data.partnerEntity;
        this._active = data.active;
        this._products = data.products;
        this._clusters = data.clusters;
        this._users = data.users;
        this._usersPaginated = data.usersPaginated;
        this._companies = data.companies;
        this._companiesPaginated = data.companiesPaginated;
    }
    /**
     Orderlist primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Orderlist primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Orderlist creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Orderlist creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Orderlist last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Orderlist last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Orderlist description per language
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     Orderlist description per language
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     Extra field per language
     */
    get extras() {
        return this._extras;
    }
    /**
     Extra field per language
     */
    set extras(value) {
        this._extras = value;
    }
    /**
     Orderlist code
     */
    get code() {
        return this._code;
    }
    /**
     Orderlist code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Valid from (Display only)
     */
    get validFrom() {
        return this._validFrom;
    }
    /**
     Valid from (Display only)
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     Valid to (Display only)
     */
    get validTo() {
        return this._validTo;
    }
    /**
     Valid to (Display only)
     */
    set validTo(value) {
        this._validTo = value;
    }
    /**
     Orderlist type
     */
    get type() {
        return this._type;
    }
    /**
     Orderlist type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Partner entity
     */
    get partnerEntity() {
        return this._partnerEntity;
    }
    /**
     Partner entity
     */
    set partnerEntity(value) {
        this._partnerEntity = value;
    }
    /**
     Shows if the orderlist is active
     */
    get active() {
        return this._active;
    }
    /**
     Shows if the orderlist is active
     */
    set active(value) {
        this._active = value;
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
     Use usersPaginated.
     */
    get users() {
        return this._users;
    }
    /**
     Use usersPaginated.
     */
    set users(value) {
        this._users = value;
    }
    /**
     usersPaginated field
     */
    get usersPaginated() {
        return this._usersPaginated;
    }
    /**
     usersPaginated field
     */
    set usersPaginated(value) {
        this._usersPaginated = value;
    }
    /**
     Use companiesPaginated.
     */
    get companies() {
        return this._companies;
    }
    /**
     Use companiesPaginated.
     */
    set companies(value) {
        this._companies = value;
    }
    /**
     companiesPaginated field
     */
    get companiesPaginated() {
        return this._companiesPaginated;
    }
    /**
     companiesPaginated field
     */
    set companiesPaginated(value) {
        this._companiesPaginated = value;
    }
}
exports.Orderlist = Orderlist;
//# sourceMappingURL=Orderlist.js.map