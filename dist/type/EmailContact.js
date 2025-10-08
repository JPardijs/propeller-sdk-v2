"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailContact = void 0;
/**
 Object class for EmailContact
 */
class EmailContact {
    /**
     Creates a new instance of EmailContact
     */
    constructor(data = {}) {
        this._email = data.email;
        this._name = data.name;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._adminUserId = data.adminUserId;
    }
    /**
     Email address of the contact
     */
    get email() {
        return this._email;
    }
    /**
     Email address of the contact
     */
    set email(value) {
        this._email = value;
    }
    /**
     Name of the contact
     */
    get name() {
        return this._name;
    }
    /**
     Name of the contact
     */
    set name(value) {
        this._name = value;
    }
    /**
     Email address and name are taken from the the contact with the given contactId
     */
    get contactId() {
        return this._contactId;
    }
    /**
     Email address and name are taken from the the contact with the given contactId
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     Email address and name are taken from the the contact with the given customerId
     */
    get customerId() {
        return this._customerId;
    }
    /**
     Email address and name are taken from the the contact with the given customerId
     */
    set customerId(value) {
        this._customerId = value;
    }
    /**
     Email address and name are taken from the the adminUser with the given adminUserId
     */
    get adminUserId() {
        return this._adminUserId;
    }
    /**
     Email address and name are taken from the the adminUser with the given adminUserId
     */
    set adminUserId(value) {
        this._adminUserId = value;
    }
}
exports.EmailContact = EmailContact;
//# sourceMappingURL=EmailContact.js.map