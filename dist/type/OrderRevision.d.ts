import { AdminUser } from './AdminUser';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Version control record for order modifications
 * Represents a specific version of an order at a point in time, including complete snapshot data and metadata about who created the revision and when. Used for audit trails, rollback capabilities, and tracking order evolution.
 */
export declare class OrderRevision {
    /** ID of the order this revision belongs to */
    private _orderId;
    /** Revision number */
    private _revisionNumber;
    /** ID of the contact who created this revision */
    private _createdByContactId?;
    /** ID of the customer who created this revision */
    private _createdByCustomerId?;
    /** ID of the admin user who created this revision */
    private _createdByAdminUserId?;
    /** Admin user that created the revision */
    private _createdByAdminUser?;
    /** Date and time when this revision was created */
    private _createdAt;
    /** The revision this was created from */
    private _createdFromRevisionNumber?;
    /** Complete snapshot of the order data at the time this revision was created */
    private _snapshot;
    /** Contact that created the revision */
    private _createdByContact?;
    /** Customer that created the revision */
    private _createdByCustomer?;
    /**
     Creates a new instance of OrderRevision
     */
    constructor(data?: Partial<OrderRevision>);
    /**
     ID of the order this revision belongs to
     */
    get orderId(): number;
    /**
     ID of the order this revision belongs to
     */
    set orderId(value: number);
    /**
     Revision number
     */
    get revisionNumber(): number;
    /**
     Revision number
     */
    set revisionNumber(value: number);
    /**
     ID of the contact who created this revision
     */
    get createdByContactId(): number | undefined;
    /**
     ID of the contact who created this revision
     */
    set createdByContactId(value: number | undefined);
    /**
     ID of the customer who created this revision
     */
    get createdByCustomerId(): number | undefined;
    /**
     ID of the customer who created this revision
     */
    set createdByCustomerId(value: number | undefined);
    /**
     ID of the admin user who created this revision
     */
    get createdByAdminUserId(): number | undefined;
    /**
     ID of the admin user who created this revision
     */
    set createdByAdminUserId(value: number | undefined);
    /**
     Admin user that created the revision
     */
    get createdByAdminUser(): AdminUser | undefined;
    /**
     Admin user that created the revision
     */
    set createdByAdminUser(value: AdminUser | undefined);
    /**
     Date and time when this revision was created
     */
    get createdAt(): string;
    /**
     Date and time when this revision was created
     */
    set createdAt(value: string);
    /**
     The revision this was created from
     */
    get createdFromRevisionNumber(): number | undefined;
    /**
     The revision this was created from
     */
    set createdFromRevisionNumber(value: number | undefined);
    /**
     Complete snapshot of the order data at the time this revision was created
     */
    get snapshot(): any;
    /**
     Complete snapshot of the order data at the time this revision was created
     */
    set snapshot(value: any);
    /**
     Contact that created the revision
     */
    get createdByContact(): Contact | undefined;
    /**
     Contact that created the revision
     */
    set createdByContact(value: Contact | undefined);
    /**
     Customer that created the revision
     */
    get createdByCustomer(): Customer | undefined;
    /**
     Customer that created the revision
     */
    set createdByCustomer(value: Customer | undefined);
}
//# sourceMappingURL=OrderRevision.d.ts.map