"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricesheet = void 0;
/**
 Object class for Pricesheet
 */
class Pricesheet {
    /**
     Creates a new instance of Pricesheet
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._code = data.code;
        this._names = data.names;
        this._descriptions = data.descriptions;
        this._priority = data.priority;
        this._readonly = data.readonly;
        this._usergroups = data.usergroups;
        this._contacts = data.contacts;
        this._contactsPaginated = data.contactsPaginated;
        this._customers = data.customers;
        this._customersPaginated = data.customersPaginated;
        this._companies = data.companies;
        this._companiesPaginated = data.companiesPaginated;
    }
    /**
     Primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Pricesheet code
     */
    get code() {
        return this._code;
    }
    /**
     Pricesheet code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Pricesheet name
     */
    get names() {
        return this._names;
    }
    /**
     Pricesheet name
     */
    set names(value) {
        this._names = value;
    }
    /**
     Pricesheet description
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     Pricesheet description
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     Pricesheet priority
     */
    get priority() {
        return this._priority;
    }
    /**
     Pricesheet priority
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     Readonly
     */
    get readonly() {
        return this._readonly;
    }
    /**
     Readonly
     */
    set readonly(value) {
        this._readonly = value;
    }
    /**
     usergroups field
     */
    get usergroups() {
        return this._usergroups;
    }
    /**
     usergroups field
     */
    set usergroups(value) {
        this._usergroups = value;
    }
    /**
     Use contactsPaginated.
     */
    get contacts() {
        return this._contacts;
    }
    /**
     Use contactsPaginated.
     */
    set contacts(value) {
        this._contacts = value;
    }
    /**
     contactsPaginated field
     */
    get contactsPaginated() {
        return this._contactsPaginated;
    }
    /**
     contactsPaginated field
     */
    set contactsPaginated(value) {
        this._contactsPaginated = value;
    }
    /**
     Use customersPaginated.
     */
    get customers() {
        return this._customers;
    }
    /**
     Use customersPaginated.
     */
    set customers(value) {
        this._customers = value;
    }
    /**
     customersPaginated field
     */
    get customersPaginated() {
        return this._customersPaginated;
    }
    /**
     customersPaginated field
     */
    set customersPaginated(value) {
        this._customersPaginated = value;
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
exports.Pricesheet = Pricesheet;
//# sourceMappingURL=Pricesheet.js.map