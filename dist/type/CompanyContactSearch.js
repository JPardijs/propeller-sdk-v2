"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyContactSearch = void 0;
/**
 Object class for CompanyContactSearch
 */
class CompanyContactSearch {
    /**
     Creates a new instance of CompanyContactSearch
     */
    constructor(data = {}) {
        this._id = data.id;
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._middleName = data.middleName;
        this._phone = data.phone;
        this._mobile = data.mobile;
        this._email = data.email;
        this._iban = data.iban;
        this._bankAccount = data.bankAccount;
        this._bic = data.bic;
        this._notes = data.notes;
        this._debtorId = data.debtorId;
        this._dateOfBirth = data.dateOfBirth;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._attributes = data.attributes;
    }
    /**
     Contact id
     */
    get id() {
        return this._id;
    }
    /**
     Contact id
     */
    set id(value) {
        this._id = value;
    }
    /**
     First name of the contact.
     */
    get firstName() {
        return this._firstName;
    }
    /**
     First name of the contact.
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     Last name of the contact.
     */
    get lastName() {
        return this._lastName;
    }
    /**
     Last name of the contact.
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     Middle name of the contact.
     */
    get middleName() {
        return this._middleName;
    }
    /**
     Middle name of the contact.
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     Phone number of the contact.
     */
    get phone() {
        return this._phone;
    }
    /**
     Phone number of the contact.
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     Mobile number of the contact.
     */
    get mobile() {
        return this._mobile;
    }
    /**
     Mobile number of the contact.
     */
    set mobile(value) {
        this._mobile = value;
    }
    /**
     Email of the contact.
     */
    get email() {
        return this._email;
    }
    /**
     Email of the contact.
     */
    set email(value) {
        this._email = value;
    }
    /**
     International Bank Account Number of the contact
     */
    get iban() {
        return this._iban;
    }
    /**
     International Bank Account Number of the contact
     */
    set iban(value) {
        this._iban = value;
    }
    /**
     Bank Account Number of the contact
     */
    get bankAccount() {
        return this._bankAccount;
    }
    /**
     Bank Account Number of the contact
     */
    set bankAccount(value) {
        this._bankAccount = value;
    }
    /**
     Bank Identification Code of the contact
     */
    get bic() {
        return this._bic;
    }
    /**
     Bank Identification Code of the contact
     */
    set bic(value) {
        this._bic = value;
    }
    /**
     Contact notes
     */
    get notes() {
        return this._notes;
    }
    /**
     Contact notes
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Contact debtor identifier
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     Contact debtor identifier
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     Date of birth of the contact.
     */
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    /**
     Date of birth of the contact.
     */
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    /**
     Contract creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Contract creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Contact last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Contact last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Attributes of the contact
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Attributes of the contact
     */
    set attributes(value) {
        this._attributes = value;
    }
}
exports.CompanyContactSearch = CompanyContactSearch;
//# sourceMappingURL=CompanyContactSearch.js.map