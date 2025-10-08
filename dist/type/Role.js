"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
/**
 Object class for Role
 */
class Role {
    /**
     Creates a new instance of Role
     */
    constructor(data = {}) {
        this._id = data.id;
        this._roleDefinition = data.roleDefinition;
        this._userId = data.userId;
        this._access = data.access;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
    }
    /**
     The unique identifier of the role
     */
    get id() {
        return this._id;
    }
    /**
     The unique identifier of the role
     */
    set id(value) {
        this._id = value;
    }
    /**
     The role definition for this role
     */
    get roleDefinition() {
        return this._roleDefinition;
    }
    /**
     The role definition for this role
     */
    set roleDefinition(value) {
        this._roleDefinition = value;
    }
    /**
     The id of the user this role belongs to
     */
    get userId() {
        return this._userId;
    }
    /**
     The id of the user this role belongs to
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     The access for this role
     */
    get access() {
        return this._access;
    }
    /**
     The access for this role
     */
    set access(value) {
        this._access = value;
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
}
exports.Role = Role;
//# sourceMappingURL=Role.js.map