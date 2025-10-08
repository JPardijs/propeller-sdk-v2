"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDefinition = void 0;
/**
 Object class for RoleDefinition
 */
class RoleDefinition {
    /**
     Creates a new instance of RoleDefinition
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._descriptions = data.descriptions;
        this._defaultAccess = data.defaultAccess;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._roles = data.roles;
    }
    /**
     The unique identifier of the role definition
     */
    get id() {
        return this._id;
    }
    /**
     The unique identifier of the role definition
     */
    set id(value) {
        this._id = value;
    }
    /**
     The domain name of the role definition
     */
    get name() {
        return this._name;
    }
    /**
     The domain name of the role definition
     */
    set name(value) {
        this._name = value;
    }
    /**
     The descriptions of the role definition
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     The descriptions of the role definition
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     The default access for the role definition
     */
    get defaultAccess() {
        return this._defaultAccess;
    }
    /**
     The default access for the role definition
     */
    set defaultAccess(value) {
        this._defaultAccess = value;
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
    /**
     roles field
     */
    get roles() {
        return this._roles;
    }
    /**
     roles field
     */
    set roles(value) {
        this._roles = value;
    }
}
exports.RoleDefinition = RoleDefinition;
//# sourceMappingURL=RoleDefinition.js.map