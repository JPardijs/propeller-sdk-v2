"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartAddress = void 0;
/**
 Object class for CartAddress
 */
class CartAddress {
    /**
     Creates a new instance of CartAddress
     */
    constructor(data = {}) {
        this._company = data.company;
        this._gender = data.gender;
        this._firstName = data.firstName;
        this._middleName = data.middleName;
        this._lastName = data.lastName;
        this._street = data.street;
        this._number = data.number;
        this._numberExtension = data.numberExtension;
        this._postalCode = data.postalCode;
        this._city = data.city;
        this._region = data.region;
        this._country = data.country;
        this._code = data.code;
        this._email = data.email;
        this._mobile = data.mobile;
        this._phone = data.phone;
        this._icp = data.icp;
        this._notes = data.notes;
    }
    /**
     Company name
     */
    get company() {
        return this._company;
    }
    /**
     Company name
     */
    set company(value) {
        this._company = value;
    }
    /**
     Gender
     */
    get gender() {
        return this._gender;
    }
    /**
     Gender
     */
    set gender(value) {
        this._gender = value;
    }
    /**
     First name
     */
    get firstName() {
        return this._firstName;
    }
    /**
     First name
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     Middle name
     */
    get middleName() {
        return this._middleName;
    }
    /**
     Middle name
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     Last name
     */
    get lastName() {
        return this._lastName;
    }
    /**
     Last name
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     Street
     */
    get street() {
        return this._street;
    }
    /**
     Street
     */
    set street(value) {
        this._street = value;
    }
    /**
     Street number
     */
    get number() {
        return this._number;
    }
    /**
     Street number
     */
    set number(value) {
        this._number = value;
    }
    /**
     Street number extension
     */
    get numberExtension() {
        return this._numberExtension;
    }
    /**
     Street number extension
     */
    set numberExtension(value) {
        this._numberExtension = value;
    }
    /**
     Postal code
     */
    get postalCode() {
        return this._postalCode;
    }
    /**
     Postal code
     */
    set postalCode(value) {
        this._postalCode = value;
    }
    /**
     City
     */
    get city() {
        return this._city;
    }
    /**
     City
     */
    set city(value) {
        this._city = value;
    }
    /**
     Region
     */
    get region() {
        return this._region;
    }
    /**
     Region
     */
    set region(value) {
        this._region = value;
    }
    /**
     Country
     */
    get country() {
        return this._country;
    }
    /**
     Country
     */
    set country(value) {
        this._country = value;
    }
    /**
     Code
     */
    get code() {
        return this._code;
    }
    /**
     Code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Email
     */
    get email() {
        return this._email;
    }
    /**
     Email
     */
    set email(value) {
        this._email = value;
    }
    /**
     Mobile phone number
     */
    get mobile() {
        return this._mobile;
    }
    /**
     Mobile phone number
     */
    set mobile(value) {
        this._mobile = value;
    }
    /**
     Phone number
     */
    get phone() {
        return this._phone;
    }
    /**
     Phone number
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     Is this an ICP address?
     */
    get icp() {
        return this._icp;
    }
    /**
     Is this an ICP address?
     */
    set icp(value) {
        this._icp = value;
    }
    /**
     Notes
     */
    get notes() {
        return this._notes;
    }
    /**
     Notes
     */
    set notes(value) {
        this._notes = value;
    }
}
exports.CartAddress = CartAddress;
//# sourceMappingURL=CartAddress.js.map