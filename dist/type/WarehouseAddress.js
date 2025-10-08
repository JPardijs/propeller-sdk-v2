"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseAddress = void 0;
/**
 Object class for WarehouseAddress
 */
class WarehouseAddress {
    /**
     Creates a new instance of WarehouseAddress
     */
    constructor(data = {}) {
        this._id = data.id;
        this._firstName = data.firstName;
        this._middleName = data.middleName;
        this._lastName = data.lastName;
        this._gender = data.gender;
        this._company = data.company;
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
        this._fax = data.fax;
        this._code = data.code;
        this._notes = data.notes;
        this._icp = data.icp;
        this._url = data.url;
        this._name = data.name;
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
     Middle name the address applies to
     */
    get middleName() {
        return this._middleName;
    }
    /**
     Middle name the address applies to
     */
    set middleName(value) {
        this._middleName = value;
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
     Address gender
     */
    get gender() {
        return this._gender;
    }
    /**
     Address gender
     */
    set gender(value) {
        this._gender = value;
    }
    /**
     Company the address applies to
     */
    get company() {
        return this._company;
    }
    /**
     Company the address applies to
     */
    set company(value) {
        this._company = value;
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
     Fax number that applies to this address [min: 6, max: 30]
     */
    get fax() {
        return this._fax;
    }
    /**
     Fax number that applies to this address [min: 6, max: 30]
     */
    set fax(value) {
        this._fax = value;
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
     ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
     */
    get icp() {
        return this._icp;
    }
    /**
     ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
     */
    set icp(value) {
        this._icp = value;
    }
    /**
     Address company domain url
     */
    get url() {
        return this._url;
    }
    /**
     Address company domain url
     */
    set url(value) {
        this._url = value;
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
}
exports.WarehouseAddress = WarehouseAddress;
//# sourceMappingURL=WarehouseAddress.js.map