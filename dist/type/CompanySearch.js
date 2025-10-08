"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySearch = void 0;
/**
 Object class for CompanySearch
 */
class CompanySearch {
    /**
     Creates a new instance of CompanySearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._taxNumber = data.taxNumber;
        this._cocNumber = data.cocNumber;
        this._notes = data.notes;
        this._debtorId = data.debtorId;
        this._email = data.email;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._deletedAt = data.deletedAt;
        this._addresses = data.addresses;
        this._contacts = data.contacts;
        this._attributes = data.attributes;
    }
    /**
     Company id
     */
    get id() {
        return this._id;
    }
    /**
     Company id
     */
    set id(value) {
        this._id = value;
    }
    /**
     Company name
     */
    get name() {
        return this._name;
    }
    /**
     Company name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Company tax number
     */
    get taxNumber() {
        return this._taxNumber;
    }
    /**
     Company tax number
     */
    set taxNumber(value) {
        this._taxNumber = value;
    }
    /**
     Company coc number
     */
    get cocNumber() {
        return this._cocNumber;
    }
    /**
     Company coc number
     */
    set cocNumber(value) {
        this._cocNumber = value;
    }
    /**
     Notes of the company
     */
    get notes() {
        return this._notes;
    }
    /**
     Notes of the company
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Company debtor identifier
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     Company debtor identifier
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     Company email
     */
    get email() {
        return this._email;
    }
    /**
     Company email
     */
    set email(value) {
        this._email = value;
    }
    /**
     Company creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Company creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Company last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Company last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Company deletion date
     */
    get deletedAt() {
        return this._deletedAt;
    }
    /**
     Company deletion date
     */
    set deletedAt(value) {
        this._deletedAt = value;
    }
    /**
     Addresses assigned to this company.
     */
    get addresses() {
        return this._addresses;
    }
    /**
     Addresses assigned to this company.
     */
    set addresses(value) {
        this._addresses = value;
    }
    /**
     Contacts part of this company.
     */
    get contacts() {
        return this._contacts;
    }
    /**
     Contacts part of this company.
     */
    set contacts(value) {
        this._contacts = value;
    }
    /**
     Attributes of the company.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Attributes of the company.
     */
    set attributes(value) {
        this._attributes = value;
    }
}
exports.CompanySearch = CompanySearch;
//# sourceMappingURL=CompanySearch.js.map