import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactRemoveFromCompaniesResponse
 */
export declare class ContactRemoveFromCompaniesResponse {
    /** The contact object */
    private _contact;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of ContactRemoveFromCompaniesResponse
     */
    constructor(data?: Partial<ContactRemoveFromCompaniesResponse>);
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
//# sourceMappingURL=ContactRemoveFromCompaniesResponse.d.ts.map