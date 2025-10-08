"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
/**
 Object class for Company
 */
class Company {
    /**
     Creates a new instance of Company
     */
    constructor(data = {}) {
        this._companyId = data.companyId;
        this._addresses = data.addresses;
        this._attributes = data.attributes;
        this._favoriteLists = data.favoriteLists;
        this._orderlists = data.orderlists;
        this._pricesheets = data.pricesheets;
        this._name = data.name;
        this._taxNumber = data.taxNumber;
        this._cocNumber = data.cocNumber;
        this._debtorId = data.debtorId;
        this._phone = data.phone;
        this._email = data.email;
        this._notes = data.notes;
        this._hidden = data.hidden;
        this._inheritProductList = data.inheritProductList;
        this._path = data.path;
        this._slug = data.slug;
        this._tag = data.tag;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._parentUsergroupId = data.parentUsergroupId;
        this._usergroup = data.usergroup;
        this._contacts = data.contacts;
        this._managers = data.managers;
        this._sources = data.sources;
        this._usergroupPath = data.usergroupPath;
        this._purchaseAuthorizationConfigs = data.purchaseAuthorizationConfigs;
    }
    /**
     The id of the company.
     */
    get companyId() {
        return this._companyId;
    }
    /**
     The id of the company.
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     addresses field
     */
    get addresses() {
        return this._addresses;
    }
    /**
     addresses field
     */
    set addresses(value) {
        this._addresses = value;
    }
    /**
     Lists attributes for this company based on the search input.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Lists attributes for this company based on the search input.
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     favoriteLists field
     */
    get favoriteLists() {
        return this._favoriteLists;
    }
    /**
     favoriteLists field
     */
    set favoriteLists(value) {
        this._favoriteLists = value;
    }
    /**
     orderlists field
     */
    get orderlists() {
        return this._orderlists;
    }
    /**
     orderlists field
     */
    set orderlists(value) {
        this._orderlists = value;
    }
    /**
     pricesheets field
     */
    get pricesheets() {
        return this._pricesheets;
    }
    /**
     pricesheets field
     */
    set pricesheets(value) {
        this._pricesheets = value;
    }
    /**
     The name of the company.
     */
    get name() {
        return this._name;
    }
    /**
     The name of the company.
     */
    set name(value) {
        this._name = value;
    }
    /**
     The tax number of the company.
     */
    get taxNumber() {
        return this._taxNumber;
    }
    /**
     The tax number of the company.
     */
    set taxNumber(value) {
        this._taxNumber = value;
    }
    /**
     The coc number of the company.
     */
    get cocNumber() {
        return this._cocNumber;
    }
    /**
     The coc number of the company.
     */
    set cocNumber(value) {
        this._cocNumber = value;
    }
    /**
     The debtor ID of the company.
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     The debtor ID of the company.
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     The phone number of the company.
     */
    get phone() {
        return this._phone;
    }
    /**
     The phone number of the company.
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     The email of the company.
     */
    get email() {
        return this._email;
    }
    /**
     The email of the company.
     */
    set email(value) {
        this._email = value;
    }
    /**
     Notes of the company.
     */
    get notes() {
        return this._notes;
    }
    /**
     Notes of the company.
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Shows whether this company is hidden and should only be used for background operations.
     */
    get hidden() {
        return this._hidden;
    }
    /**
     Shows whether this company is hidden and should only be used for background operations.
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
     The slug of the company.
     */
    get slug() {
        return this._slug;
    }
    /**
     The slug of the company.
     */
    set slug(value) {
        this._slug = value;
    }
    /**
     The tag of the company.
     */
    get tag() {
        return this._tag;
    }
    /**
     The tag of the company.
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
     parentUsergroupId field
     */
    get parentUsergroupId() {
        return this._parentUsergroupId;
    }
    /**
     parentUsergroupId field
     */
    set parentUsergroupId(value) {
        this._parentUsergroupId = value;
    }
    /**
     Parent usergroup of the company.
     */
    get usergroup() {
        return this._usergroup;
    }
    /**
     Parent usergroup of the company.
     */
    set usergroup(value) {
        this._usergroup = value;
    }
    /**
     Children contacts of the company.
     */
    get contacts() {
        return this._contacts;
    }
    /**
     Children contacts of the company.
     */
    set contacts(value) {
        this._contacts = value;
    }
    /**
     Users/ contacts which are account managers of the company.
     */
    get managers() {
        return this._managers;
    }
    /**
     Users/ contacts which are account managers of the company.
     */
    set managers(value) {
        this._managers = value;
    }
    /**
     sources field
     */
    get sources() {
        return this._sources;
    }
    /**
     sources field
     */
    set sources(value) {
        this._sources = value;
    }
    /**
     usergroupPath field
     */
    get usergroupPath() {
        return this._usergroupPath;
    }
    /**
     usergroupPath field
     */
    set usergroupPath(value) {
        this._usergroupPath = value;
    }
    /**
     All purchase authorization config entities for this company
     */
    get purchaseAuthorizationConfigs() {
        return this._purchaseAuthorizationConfigs;
    }
    /**
     All purchase authorization config entities for this company
     */
    set purchaseAuthorizationConfigs(value) {
        this._purchaseAuthorizationConfigs = value;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map