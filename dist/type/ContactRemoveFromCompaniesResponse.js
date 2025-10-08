"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRemoveFromCompaniesResponse = void 0;
/**
 Object class for ContactRemoveFromCompaniesResponse
 */
class ContactRemoveFromCompaniesResponse {
    /**
     Creates a new instance of ContactRemoveFromCompaniesResponse
     */
    constructor(data = {}) {
        this._contact = data.contact;
        this._actions = data.actions;
    }
    /**
     The contact object
     */
    get contact() {
        return this._contact;
    }
    /**
     The contact object
     */
    set contact(value) {
        this._contact = value;
    }
    /**
     Output messages about the actions performed.
     */
    get actions() {
        return this._actions;
    }
    /**
     Output messages about the actions performed.
     */
    set actions(value) {
        this._actions = value;
    }
}
exports.ContactRemoveFromCompaniesResponse = ContactRemoveFromCompaniesResponse;
//# sourceMappingURL=ContactRemoveFromCompaniesResponse.js.map