"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
/**
 Object class for AdminUser
 */
class AdminUser {
    /**
     Creates a new instance of AdminUser
     */
    constructor(data = {}) {
        this._id = data.id;
        this._email = data.email;
        this._gender = data.gender;
        this._firstName = data.firstName;
        this._middleName = data.middleName;
        this._lastName = data.lastName;
        this._language = data.language;
        this._phone = data.phone;
        this._job = data.job;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
        this._tenants = data.tenants;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
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
     gender field
     */
    get gender() {
        return this._gender;
    }
    /**
     gender field
     */
    set gender(value) {
        this._gender = value;
    }
    /**
     firstName field
     */
    get firstName() {
        return this._firstName;
    }
    /**
     firstName field
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     middleName field
     */
    get middleName() {
        return this._middleName;
    }
    /**
     middleName field
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     lastName field
     */
    get lastName() {
        return this._lastName;
    }
    /**
     lastName field
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     language field
     */
    get language() {
        return this._language;
    }
    /**
     language field
     */
    set language(value) {
        this._language = value;
    }
    /**
     phone field
     */
    get phone() {
        return this._phone;
    }
    /**
     phone field
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     job field
     */
    get job() {
        return this._job;
    }
    /**
     job field
     */
    set job(value) {
        this._job = value;
    }
    /**
     createdAt field
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     createdAt field
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     createdBy field
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     createdBy field
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     lastModifiedAt field
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     lastModifiedAt field
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     lastModifiedBy field
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     lastModifiedBy field
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     tenants field
     */
    get tenants() {
        return this._tenants;
    }
    /**
     tenants field
     */
    set tenants(value) {
        this._tenants = value;
    }
}
exports.AdminUser = AdminUser;
//# sourceMappingURL=AdminUser.js.map