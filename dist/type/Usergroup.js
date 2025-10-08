"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usergroup = void 0;
/**
 Object class for Usergroup
 */
class Usergroup {
    /**
     Creates a new instance of Usergroup
     */
    constructor(data = {}) {
        this._usergroupId = data.usergroupId;
        this._name = data.name;
        this._hidden = data.hidden;
        this._inheritProductList = data.inheritProductList;
        this._path = data.path;
        this._slug = data.slug;
        this._tag = data.tag;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._parentUsergroupId = data.parentUsergroupId;
        this._companies = data.companies;
        this._customers = data.customers;
    }
    /**
     The id of the usergroup.
     */
    get usergroupId() {
        return this._usergroupId;
    }
    /**
     The id of the usergroup.
     */
    set usergroupId(value) {
        this._usergroupId = value;
    }
    /**
     The name of the usergroup.
     */
    get name() {
        return this._name;
    }
    /**
     The name of the usergroup.
     */
    set name(value) {
        this._name = value;
    }
    /**
     Shows whether this usergroup is hidden and should only be used for background operations.
     */
    get hidden() {
        return this._hidden;
    }
    /**
     Shows whether this usergroup is hidden and should only be used for background operations.
     */
    set hidden(value) {
        this._hidden = value;
    }
    /**
     inheritProductList field
     */
    get inheritProductList() {
        return this._inheritProductList;
    }
    /**
     inheritProductList field
     */
    set inheritProductList(value) {
        this._inheritProductList = value;
    }
    /**
     The path in id's to the root of the inheritance tree.
     */
    get path() {
        return this._path;
    }
    /**
     The path in id's to the root of the inheritance tree.
     */
    set path(value) {
        this._path = value;
    }
    /**
     The slug of the usergroup.
     */
    get slug() {
        return this._slug;
    }
    /**
     The slug of the usergroup.
     */
    set slug(value) {
        this._slug = value;
    }
    /**
     The slug of the usergroup.
     */
    get tag() {
        return this._tag;
    }
    /**
     The slug of the usergroup.
     */
    set tag(value) {
        this._tag = value;
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
     The id of parent usergroup.
     */
    get parentUsergroupId() {
        return this._parentUsergroupId;
    }
    /**
     The id of parent usergroup.
     */
    set parentUsergroupId(value) {
        this._parentUsergroupId = value;
    }
    /**
     Children companies of the usergroup.
     */
    get companies() {
        return this._companies;
    }
    /**
     Children companies of the usergroup.
     */
    set companies(value) {
        this._companies = value;
    }
    /**
     customers field
     */
    get customers() {
        return this._customers;
    }
    /**
     customers field
     */
    set customers(value) {
        this._customers = value;
    }
}
exports.Usergroup = Usergroup;
//# sourceMappingURL=Usergroup.js.map