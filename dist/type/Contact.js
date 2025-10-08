"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
/**
 Object class for Contact
 */
class Contact {
    /**
     Creates a new instance of Contact
     */
    constructor(data = {}) {
        this._contactId = data.contactId;
        this._attributes = data.attributes;
        this._magicTokens = data.magicTokens;
        this._favoriteLists = data.favoriteLists;
        this._orderlists = data.orderlists;
        this._pricesheets = data.pricesheets;
        this._userId = data.userId;
        this._debtorId = data.debtorId;
        this._gender = data.gender;
        this._firstName = data.firstName;
        this._middleName = data.middleName;
        this._lastName = data.lastName;
        this._phone = data.phone;
        this._mobile = data.mobile;
        this._email = data.email;
        this._login = data.login;
        this._iban = data.iban;
        this._bankAccount = data.bankAccount;
        this._bic = data.bic;
        this._notes = data.notes;
        this._primaryLanguage = data.primaryLanguage;
        this._expires = data.expires;
        this._externalId = data.externalId;
        this._dateOfBirth = data.dateOfBirth;
        this._mailingList = data.mailingList;
        this._isLoggedIn = data.isLoggedIn;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._parentCompanyId = data.parentCompanyId;
        this._company = data.company;
        this._managedCompanies = data.managedCompanies;
        this._companies = data.companies;
        this._sources = data.sources;
        this._purchaseAuthorizationConfigs = data.purchaseAuthorizationConfigs;
    }
    /**
     The unique identifier of the contact.
     */
    get contactId() {
        return this._contactId;
    }
    /**
     The unique identifier of the contact.
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     Lists attributes for this contacts based on the search input.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Lists attributes for this contacts based on the search input.
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     Get all magic tokens for a contact
     */
    get magicTokens() {
        return this._magicTokens;
    }
    /**
     Get all magic tokens for a contact
     */
    set magicTokens(value) {
        this._magicTokens = value;
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
     The unique identifier of the user.
     */
    get userId() {
        return this._userId;
    }
    /**
     The unique identifier of the user.
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     The debtor ID of the contact.
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     The debtor ID of the contact.
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     The gender of the user.
     */
    get gender() {
        return this._gender;
    }
    /**
     The gender of the user.
     */
    set gender(value) {
        this._gender = value;
    }
    /**
     The first name of the user.
     */
    get firstName() {
        return this._firstName;
    }
    /**
     The first name of the user.
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     The middle name of the user.
     */
    get middleName() {
        return this._middleName;
    }
    /**
     The middle name of the user.
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     The last name of the user.
     */
    get lastName() {
        return this._lastName;
    }
    /**
     The last name of the user.
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     The phone number of the user.
     */
    get phone() {
        return this._phone;
    }
    /**
     The phone number of the user.
     */
    set phone(value) {
        this._phone = value;
    }
    /**
     The mobile number of the user.
     */
    get mobile() {
        return this._mobile;
    }
    /**
     The mobile number of the user.
     */
    set mobile(value) {
        this._mobile = value;
    }
    /**
     The email of the user.
     */
    get email() {
        return this._email;
    }
    /**
     The email of the user.
     */
    set email(value) {
        this._email = value;
    }
    /**
     The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
     */
    get login() {
        return this._login;
    }
    /**
     The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
     */
    set login(value) {
        this._login = value;
    }
    /**
     The International Bank Account Number of the user
     */
    get iban() {
        return this._iban;
    }
    /**
     The International Bank Account Number of the user
     */
    set iban(value) {
        this._iban = value;
    }
    /**
     The Bank Account Number of the user
     */
    get bankAccount() {
        return this._bankAccount;
    }
    /**
     The Bank Account Number of the user
     */
    set bankAccount(value) {
        this._bankAccount = value;
    }
    /**
     The Bank Identification Code of the user
     */
    get bic() {
        return this._bic;
    }
    /**
     The Bank Identification Code of the user
     */
    set bic(value) {
        this._bic = value;
    }
    /**
     notes field
     */
    get notes() {
        return this._notes;
    }
    /**
     notes field
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     The primary language of the user
     */
    get primaryLanguage() {
        return this._primaryLanguage;
    }
    /**
     The primary language of the user
     */
    set primaryLanguage(value) {
        this._primaryLanguage = value;
    }
    /**
     The expiration date of the contact. After this date expires contact will be disabled.
     */
    get expires() {
        return this._expires;
    }
    /**
     The expiration date of the contact. After this date expires contact will be disabled.
     */
    set expires(value) {
        this._expires = value;
    }
    /**
     External ID
     */
    get externalId() {
        return this._externalId;
    }
    /**
     External ID
     */
    set externalId(value) {
        this._externalId = value;
    }
    /**
     The date of birth of the contact.
     */
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    /**
     The date of birth of the contact.
     */
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    /**
     mailingList field
     */
    get mailingList() {
        return this._mailingList;
    }
    /**
     mailingList field
     */
    set mailingList(value) {
        this._mailingList = value;
    }
    /**
     isLoggedIn field
     */
    get isLoggedIn() {
        return this._isLoggedIn;
    }
    /**
     isLoggedIn field
     */
    set isLoggedIn(value) {
        this._isLoggedIn = value;
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
     The company id of parent company.
     */
    get parentCompanyId() {
        return this._parentCompanyId;
    }
    /**
     The company id of parent company.
     */
    set parentCompanyId(value) {
        this._parentCompanyId = value;
    }
    /**
     company field
     */
    get company() {
        return this._company;
    }
    /**
     company field
     */
    set company(value) {
        this._company = value;
    }
    /**
     Companies managed by the contact.
     */
    get managedCompanies() {
        return this._managedCompanies;
    }
    /**
     Companies managed by the contact.
     */
    set managedCompanies(value) {
        this._managedCompanies = value;
    }
    /**
     All the companies that a contact belongs to
     */
    get companies() {
        return this._companies;
    }
    /**
     All the companies that a contact belongs to
     */
    set companies(value) {
        this._companies = value;
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
     All purchase authorization config entities for this contact
     */
    get purchaseAuthorizationConfigs() {
        return this._purchaseAuthorizationConfigs;
    }
    /**
     All purchase authorization config entities for this contact
     */
    set purchaseAuthorizationConfigs(value) {
        this._purchaseAuthorizationConfigs = value;
    }
}
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map