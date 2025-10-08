"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserTenant = void 0;
/**
 Object class for AdminUserTenant
 */
class AdminUserTenant {
    /**
     Creates a new instance of AdminUserTenant
     */
    constructor(data = {}) {
        this._id = data.id;
        this._tenant = data.tenant;
        this._name = data.name;
        this._default = data.default;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
        this._user = data.user;
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
     default field
     */
    get default() {
        return this._default;
    }
    /**
     default field
     */
    set default(value) {
        this._default = value;
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
     user field
     */
    get user() {
        return this._user;
    }
    /**
     user field
     */
    set user(value) {
        this._user = value;
    }
}
exports.AdminUserTenant = AdminUserTenant;
//# sourceMappingURL=AdminUserTenant.js.map