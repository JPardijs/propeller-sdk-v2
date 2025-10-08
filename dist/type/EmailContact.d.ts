/**
 Object class for EmailContact
 */
export declare class EmailContact {
    /** Email address of the contact */
    private _email?;
    /** Name of the contact */
    private _name?;
    /** Email address and name are taken from the the contact with the given contactId */
    private _contactId?;
    /** Email address and name are taken from the the contact with the given customerId */
    private _customerId?;
    /** Email address and name are taken from the the adminUser with the given adminUserId */
    private _adminUserId?;
    /**
     Creates a new instance of EmailContact
     */
    constructor(data?: Partial<EmailContact>);
    /**
     Email address of the contact
     */
    get email(): string | undefined;
    /**
     Email address of the contact
     */
    set email(value: string | undefined);
    /**
     Name of the contact
     */
    get name(): string | undefined;
    /**
     Name of the contact
     */
    set name(value: string | undefined);
    /**
     Email address and name are taken from the the contact with the given contactId
     */
    get contactId(): number | undefined;
    /**
     Email address and name are taken from the the contact with the given contactId
     */
    set contactId(value: number | undefined);
    /**
     Email address and name are taken from the the contact with the given customerId
     */
    get customerId(): number | undefined;
    /**
     Email address and name are taken from the the contact with the given customerId
     */
    set customerId(value: number | undefined);
    /**
     Email address and name are taken from the the adminUser with the given adminUserId
     */
    get adminUserId(): number | undefined;
    /**
     Email address and name are taken from the the adminUser with the given adminUserId
     */
    set adminUserId(value: number | undefined);
}
//# sourceMappingURL=EmailContact.d.ts.map