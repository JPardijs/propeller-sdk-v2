import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactAddToCompaniesResponse
 */
export declare class ContactAddToCompaniesResponse {
    /** The contact object */
    private _contact;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of ContactAddToCompaniesResponse
     */
    constructor(data?: Partial<ContactAddToCompaniesResponse>);
    /**
     The contact object
     */
    get contact(): Contact;
    /**
     The contact object
     */
    set contact(value: Contact);
    /**
     Output messages about the actions performed.
     */
    get actions(): ContactActionsResponse;
    /**
     Output messages about the actions performed.
     */
    set actions(value: ContactActionsResponse);
}
//# sourceMappingURL=ContactAddToCompaniesResponse.d.ts.map