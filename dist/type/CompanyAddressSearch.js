"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAddressSearch = void 0;
/**
 Object class for CompanyAddressSearch
 */
class CompanyAddressSearch {
    /**
     Creates a new instance of CompanyAddressSearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._street = data.street;
        this._number = data.number;
        this._numberExtension = data.numberExtension;
        this._postalCode = data.postalCode;
        this._city = data.city;
        this._region = data.region;
        this._country = data.country;
        this._phone = data.phone;
        this._mobile = data.mobile;
        this._email = data.email;
        this._code = data.code;
        this._notes = data.notes;
        this._name = data.name;
        this._isDefault = data.isDefault;
        this._type = data.type;
        this._active = data.active;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
    }
    /**
     Address primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Address primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     First name the address applies to
     */
    get firstName() {
        return this._firstName;
    }
    /**
     First name the address applies to
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     Last name the address applies to
     */
    get lastName() {
        return this._lastName;
    }
    /**
     Last name the address applies to
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     Address street
     */
    get street() {
        return this._street;
    }
    /**
     Address street
     */
    set street(value) {
        this._street = value;
    }
    /**
     Address street number
     */
    get number() {
        return this._number;
    }
    /**
     Address street number
     */
    set number(value) {
        this._number = value;
    }
    /**
     Address street number extension
     */
    get numberExtension() {
        return this._numberExtension;
    }
    /**
     Address street number extension
     */
    set numberExtension(value) {
        this._numberExtension = value;
    }
    /**
     Address postal code
     */
    get postalCode() {
        return this._postalCode;
    }
    /**
     Address postal code
     */
    set postalCode(value) {
        this._postalCode = value;
    }
    /**
     Address city
     */
    get city() {
        return this._city;
    }
    /**
     Address city
     */
    set city(value) {
        this._city = value;
    }
    /**
     Address region
     */
    get region() {
        return this._region;
    }
    /**
     Address region
     */
    set region(value) {
        this._region = value;
    }
    /**
     Address country
     */
    get country() {
        return this._country;
    }
    /**
     Address country
     */
    set country(value) {
        this._country = value;
    }
    /**
     Fixed phone number that applies to this address [min: 6, max: 30]
     */
    get phone() {
        return this._phone;
    }
    /**
     Fixed phone number that applies to this address [min: 6, max: 30]
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     Mobile phone number that applies to this address [min: 6, max: 30]
     */
    get mobile() {
        return this._mobile;
    }
    /**
     Mobile phone number that applies to this address [min: 6, max: 30]
     */
    set mobile(value) {
        this._mobile = value;
    }
    /**
     Email that applies to this address [valid email format needed]
     */
    get email() {
        return this._email;
    }
    /**
     Email that applies to this address [valid email format needed]
     */
    set email(value) {
        this._email = value;
    }
    /**
     Address code
     */
    get code() {
        return this._code;
    }
    /**
     Address code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Address delivery notes
     */
    get notes() {
        return this._notes;
    }
    /**
     Address delivery notes
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Address friendly descriptive name
     */
    get name() {
        return this._name;
    }
    /**
     Address friendly descriptive name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Indicates whether the address is default for its type
     */
    get isDefault() {
        return this._isDefault;
    }
    /**
     Indicates whether the address is default for its type
     */
    set isDefault(value) {
        this._isDefault = value;
    }
    /**
     Address type [one of 'home', 'delivery', 'invoice']
     */
    get type() {
        return this._type;
    }
    /**
     Address type [one of 'home', 'delivery', 'invoice']
     */
    set type(value) {
        this._type = value;
    }
    /**
     Indicates whether the address is active
     */
    get active() {
        return this._active;
    }
    /**
     Indicates whether the address is active
     */
    set active(value) {
        this._active = value;
    }
    /**
     Date when the address was created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Date when the address was created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Date when the address was last modified
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Date when the address was last modified
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
}
exports.CompanyAddressSearch = CompanyAddressSearch;
//# sourceMappingURL=CompanyAddressSearch.js.map