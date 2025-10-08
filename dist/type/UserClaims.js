"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClaims = void 0;
/**
 Object class for UserClaims
 */
class UserClaims {
    /**
     Creates a new instance of UserClaims
     */
    constructor(data = {}) {
        this._userId = data.userId;
        this._userDirectoryId = data.userDirectoryId;
        this._adminUserId = data.adminUserId;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._companyId = data.companyId;
        this._companyIds = data.companyIds;
        this._roles = data.roles;
        this._discounts = data.discounts;
        this._acllist = data.acllist;
        this._class = data.class;
        this._loginRoot = data.loginRoot;
        this._dateCreated = data.dateCreated;
    }
    /**
     userId field
     */
    get userId() {
        return this._userId;
    }
    /**
     userId field
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     userDirectoryId field
     */
    get userDirectoryId() {
        return this._userDirectoryId;
    }
    /**
     userDirectoryId field
     */
    set userDirectoryId(value) {
        this._userDirectoryId = value;
    }
    /**
     adminUserId field
     */
    get adminUserId() {
        return this._adminUserId;
    }
    /**
     adminUserId field
     */
    set adminUserId(value) {
        this._adminUserId = value;
    }
    /**
     contactId field
     */
    get contactId() {
        return this._contactId;
    }
    /**
     contactId field
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     customerId field
     */
    get customerId() {
        return this._customerId;
    }
    /**
     customerId field
     */
    set customerId(value) {
        this._customerId = value;
    }
    /**
     companyId field
     */
    get companyId() {
        return this._companyId;
    }
    /**
     companyId field
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     companyIds field
     */
    get companyIds() {
        return this._companyIds;
    }
    /**
     companyIds field
     */
    set companyIds(value) {
        this._companyIds = value;
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
    /**
     discounts field
     */
    get discounts() {
        return this._discounts;
    }
    /**
     discounts field
     */
    set discounts(value) {
        this._discounts = value;
    }
    /**
     acllist field
     */
    get acllist() {
        return this._acllist;
    }
    /**
     acllist field
     */
    set acllist(value) {
        this._acllist = value;
    }
    /**
     class field
     */
    get class() {
        return this._class;
    }
    /**
     class field
     */
    set class(value) {
        this._class = value;
    }
    /**
     loginRoot field
     */
    get loginRoot() {
        return this._loginRoot;
    }
    /**
     loginRoot field
     */
    set loginRoot(value) {
        this._loginRoot = value;
    }
    /**
     dateCreated field
     */
    get dateCreated() {
        return this._dateCreated;
    }
    /**
     dateCreated field
     */
    set dateCreated(value) {
        this._dateCreated = value;
    }
}
exports.UserClaims = UserClaims;
//# sourceMappingURL=UserClaims.js.map