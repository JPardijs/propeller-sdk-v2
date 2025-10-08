"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderAddress = void 0;
/**
 Object class for TenderAddress
 */
class TenderAddress {
    /**
     Creates a new instance of TenderAddress
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
     Address company
     */
    get company() {
        return this._company;
    }
    /**
     Address company
     */
    set company(value) {
        this._company = value;
    }
    /**
     Address contact gender
     */
    get gender() {
        return this._gender;
    }
    /**
     Address contact gender
     */
    set gender(value) {
        this._gender = value;
    }
    /**
     Address contact first name
     */
    get firstName() {
        return this._firstName;
    }
    /**
     Address contact first name
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     Address contact middle name
     */
    get middleName() {
        return this._middleName;
    }
    /**
     Address contact middle name
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     Address contact last name
     */
    get lastName() {
        return this._lastName;
    }
    /**
     Address contact last name
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
     Number
     */
    get number() {
        return this._number;
    }
    /**
     Number
     */
    set number(value) {
        this._number = value;
    }
    /**
     Number extension
     */
    get numberExtension() {
        return this._numberExtension;
    }
    /**
     Number extension
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
     Country code
     */
    get country() {
        return this._country;
    }
    /**
     Country code
     */
    set country(value) {
        this._country = value;
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
     Address contact email
     */
    get email() {
        return this._email;
    }
    /**
     Address contact email
     */
    set email(value) {
        this._email = value;
    }
    /**
     Address contact mobile phone number
     */
    get mobile() {
        return this._mobile;
    }
    /**
     Address contact mobile phone number
     */
    set mobile(value) {
        this._mobile = value;
    }
    /**
     Address contact phone number
     */
    get phone() {
        return this._phone;
    }
    /**
     Address contact phone number
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     ICP is Yes when taxes do not apply for shipping to the given address/ country
     */
    get icp() {
        return this._icp;
    }
    /**
     ICP is Yes when taxes do not apply for shipping to the given address/ country
     */
    set icp(value) {
        this._icp = value;
    }
    /**
     Notes, remarks, etc.
     */
    get notes() {
        return this._notes;
    }
    /**
     Notes, remarks, etc.
     */
    set notes(value) {
        this._notes = value;
    }
}
exports.TenderAddress = TenderAddress;
//# sourceMappingURL=TenderAddress.js.map