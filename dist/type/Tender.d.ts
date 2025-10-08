import { OrderType } from '../enum/OrderType';
import { TenderAddress } from './TenderAddress';
import { TenderMainItem } from './TenderMainItem';
import { TenderPayment } from './TenderPayment';
import { TenderPostage } from './TenderPostage';
import { TenderTotal } from './TenderTotal';
import { TenderTaxLevel } from './TenderTaxLevel';
import { TenderCarrier } from './TenderCarrier';
import { TenderPaymethod } from './TenderPaymethod';
import { Contact } from './Contact';
import { Customer } from './Customer';
import { Company } from './Company';
/**
 Comprehensive tender entity representing a potential order in the system.
 * Tenders are draft orders that contain all necessary information for order processing including customer details, items, pricing, addresses, payment methods, and shipping information. They can be modified, processed into orders, or deleted as needed.
 */
export declare class Tender {
    /** Unique identifier for the tender.
     * This is the primary key used to reference and manage the tender throughout its lifecycle. */
    private _tenderId;
    /** Associated order identifier when tender was created from an existing order.
     * Links the tender to its source order for reference and audit purposes. */
    private _orderId?;
    /** Identifier of the user who owns this tender.
     * Represents the primary responsible party for the tender management and processing. */
    private _ownerId?;
    /** Classification of the tender type.
     * Determines the processing workflow and business rules that apply to this tender. */
    private _type;
    /** Legacy site identifier where the tender was created.
     * Historical reference maintained for compatibility purposes. */
    private _siteId?;
    /** Sales channel identifier where the tender originated.
     * Identifies the specific sales channel (website, mobile app, etc.) used to create this tender. */
    private _channelId?;
    /** Shop identifier that owns this tender.
     * Determines which business unit or location is responsible for fulfilling this tender. */
    private _shopId;
    /** Timestamp when the tender was initially created.
     * Records the exact moment this tender was first established in the system. */
    private _createdAt;
    /** Identifier of the user who created this tender.
     * Tracks the originator of the tender for audit and accountability purposes. */
    private _createdBy?;
    /** Timestamp of the most recent modification to the tender.
     * Updates automatically whenever any aspect of the tender is changed. */
    private _lastModifiedAt;
    /** Identifier of the user who last modified this tender.
     * Tracks the most recent editor for audit and accountability purposes. */
    private _lastModifiedBy?;
    /** Contact person identifier associated with this tender.
     * Used in combination with companyId to identify the specific contact person within a company who is responsible for this tender. */
    private _contactId?;
    /** Customer identifier for individual customer tenders.
     * Used for direct customer relationships where no company association is required. */
    private _customerId?;
    /** Company identifier for business-to-business tenders.
     * Used in combination with contactId to establish the company context for the tender. */
    private _companyId?;
    /** The invoice userId for this tender */
    private _invoiceUserId?;
    /** Tender/order status */
    private _status;
    /** User's first name */
    private _firstName?;
    /** User's middle name */
    private _middleName?;
    /** User's last name */
    private _lastName?;
    /** User's email */
    private _email;
    /** Invoice company debtor ID */
    private _debtorId?;
    /** The address the invoice for the order should be sent to */
    private _invoiceAddress?;
    /** The address the order should be shipped to */
    private _deliveryAddress?;
    /** Tender/order main item count */
    private _itemCount?;
    /** The tender/order items */
    private _items?;
    /** The tender/order bonusItems */
    private _bonusItems?;
    /** Payment data for this tender/order */
    private _paymentData?;
    /** Postage data for this tender/order */
    private _postageData?;
    /** Tender total */
    private _total?;
    /** Amount of tax that applies to this tender/order per tax code */
    private _taxLevels?;
    /** List of selectable carriers */
    private _carriers?;
    /** List of selectable payment methods for this tender, including non allowed for the applied user */
    private _payMethods?;
    /** Tender/order origin */
    private _source?;
    /** Total amount of valuePoints that apply to this tender/order */
    private _valuePoints?;
    /** Indicates whether incentives are already applied */
    private _incentivesApplied?;
    /** Tender/order accumulated credit points */
    private _creditPoints?;
    /** Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout */
    private _actionCode?;
    /** User's reference for this tender */
    private _reference?;
    /** User's remarks for this tender */
    private _remarks?;
    /** The language for this tender */
    private _language?;
    /** The currency for this tender */
    private _currency?;
    /** The currency ratio for this tender */
    private _currencyRatio?;
    /** The order's ID in an external system */
    private _externalId?;
    /** Additional information field that can be stored with a tender/order */
    private _extra3?;
    /** Additional information field that can be stored with a tender/order */
    private _extra4?;
    /** Indicates whether tender can be edited */
    private _isEditable?;
    /** Valid until date (Display Only!) */
    private _validUntil?;
    /** Contact person associated with this tender.
     * Returns the specific contact who is responsible for or involved in this tender process. Used for direct communication and relationship management. */
    private _contact?;
    /** Customer associated with this tender.
     * Returns the customer who initiated or is the subject of this tender. Used for customer relationship management and tender tracking. */
    private _customer?;
    /** Company associated with this tender.
     * Returns the company involved in this tender process. Used for organizational context and access control within the tender management system. */
    private _company?;
    /** List of tender revisions for version control and audit purposes */
    private _revisions?;
    /** Public visibility flag for tender sharing and collaboration */
    private _public?;
    /** Current revision number for version tracking */
    private _revisionNumber?;
    /** Public version number for external sharing */
    private _publicVersionNumber?;
    /** Invalid status flag indicating tender issues */
    private _invalid?;
    /** Reason for tender invalidation if applicable */
    private _invalidationReason?;
    /** Admin user ID who created this tender */
    private _createdByAdminUserId?;
    /** Contact user ID who created this tender */
    private _createdByContactId?;
    /** Customer user ID who created this tender */
    private _createdByCustomerId?;
    /** Source revision number when tender was created from existing revision */
    private _createdFromRevisionNumber?;
    /**
     Creates a new instance of Tender
     */
    constructor(data?: Partial<Tender>);
    /**
     The tender's primary identifier
     */
    get tenderId(): string;
    /**
     The tender's primary identifier
     */
    set tenderId(value: string);
    /**
     Tender's associated order ID
     */
    get orderId(): number | undefined;
    /**
     Tender's associated order ID
     */
    set orderId(value: number | undefined);
    /**
     Tender's associated owner ID
     */
    get ownerId(): number | undefined;
    /**
     Tender's associated owner ID
     */
    set ownerId(value: number | undefined);
    /**
     Order type
     */
    get type(): OrderType;
    /**
     Order type
     */
    set type(value: OrderType);
    /**
     The site id the tender/order is created from
     */
    get siteId(): number | undefined;
    /**
     The site id the tender/order is created from
     */
    set siteId(value: number | undefined);
    /**
     The channel id the tender/order is created from
     */
    get channelId(): number | undefined;
    /**
     The channel id the tender/order is created from
     */
    set channelId(value: number | undefined);
    /**
     The shop the tender/order belongs to
     */
    get shopId(): number;
    /**
     The shop the tender/order belongs to
     */
    set shopId(value: number);
    /**
     The date this tender/order has been created
     */
    get createdAt(): string;
    /**
     The date this tender/order has been created
     */
    set createdAt(value: string);
    /**
     User which created the tender.
     */
    get createdBy(): number | undefined;
    /**
     User which created the tender.
     */
    set createdBy(value: number | undefined);
    /**
     The date this tender/order has been last modified
     */
    get lastModifiedAt(): string;
    /**
     The date this tender/order has been last modified
     */
    set lastModifiedAt(value: string);
    /**
     User which last updated the tender.
     */
    get lastModifiedBy(): number | undefined;
    /**
     User which last updated the tender.
     */
    set lastModifiedBy(value: number | undefined);
    /**
     ContactId for this tender. Goes in combination with companyId
     */
    get contactId(): number | undefined;
    /**
     ContactId for this tender. Goes in combination with companyId
     */
    set contactId(value: number | undefined);
    /**
     CustomerId for this tender.
     */
    get customerId(): number | undefined;
    /**
     CustomerId for this tender.
     */
    set customerId(value: number | undefined);
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    get companyId(): number | undefined;
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    set companyId(value: number | undefined);
    /**
     The invoice userId for this tender
     */
    get invoiceUserId(): number | undefined;
    /**
     The invoice userId for this tender
     */
    set invoiceUserId(value: number | undefined);
    /**
     Tender/order status
     */
    get status(): string;
    /**
     Tender/order status
     */
    set status(value: string);
    /**
     User's first name
     */
    get firstName(): string | undefined;
    /**
     User's first name
     */
    set firstName(value: string | undefined);
    /**
     User's middle name
     */
    get middleName(): string | undefined;
    /**
     User's middle name
     */
    set middleName(value: string | undefined);
    /**
     User's last name
     */
    get lastName(): string | undefined;
    /**
     User's last name
     */
    set lastName(value: string | undefined);
    /**
     User's email
     */
    get email(): string;
    /**
     User's email
     */
    set email(value: string);
    /**
     Invoice company debtor ID
     */
    get debtorId(): string | undefined;
    /**
     Invoice company debtor ID
     */
    set debtorId(value: string | undefined);
    /**
     The address the invoice for the order should be sent to
     */
    get invoiceAddress(): TenderAddress | undefined;
    /**
     The address the invoice for the order should be sent to
     */
    set invoiceAddress(value: TenderAddress | undefined);
    /**
     The address the order should be shipped to
     */
    get deliveryAddress(): TenderAddress | undefined;
    /**
     The address the order should be shipped to
     */
    set deliveryAddress(value: TenderAddress | undefined);
    /**
     Tender/order main item count
     */
    get itemCount(): number | undefined;
    /**
     Tender/order main item count
     */
    set itemCount(value: number | undefined);
    /**
     The tender/order items
     */
    get items(): TenderMainItem[] | undefined;
    /**
     The tender/order items
     */
    set items(value: TenderMainItem[] | undefined);
    /**
     The tender/order bonusItems
     */
    get bonusItems(): TenderMainItem[] | undefined;
    /**
     The tender/order bonusItems
     */
    set bonusItems(value: TenderMainItem[] | undefined);
    /**
     Payment data for this tender/order
     */
    get paymentData(): TenderPayment | undefined;
    /**
     Payment data for this tender/order
     */
    set paymentData(value: TenderPayment | undefined);
    /**
     Postage data for this tender/order
     */
    get postageData(): TenderPostage | undefined;
    /**
     Postage data for this tender/order
     */
    set postageData(value: TenderPostage | undefined);
    /**
     Tender total
     */
    get total(): TenderTotal | undefined;
    /**
     Tender total
     */
    set total(value: TenderTotal | undefined);
    /**
     Amount of tax that applies to this tender/order per tax code
     */
    get taxLevels(): TenderTaxLevel[] | undefined;
    /**
     Amount of tax that applies to this tender/order per tax code
     */
    set taxLevels(value: TenderTaxLevel[] | undefined);
    /**
     List of selectable carriers
     */
    get carriers(): TenderCarrier[] | undefined;
    /**
     List of selectable carriers
     */
    set carriers(value: TenderCarrier[] | undefined);
    /**
     List of selectable payment methods for this tender, including non allowed for the applied user
     */
    get payMethods(): TenderPaymethod[] | undefined;
    /**
     List of selectable payment methods for this tender, including non allowed for the applied user
     */
    set payMethods(value: TenderPaymethod[] | undefined);
    /**
     Tender/order origin
     */
    get source(): string | undefined;
    /**
     Tender/order origin
     */
    set source(value: string | undefined);
    /**
     Total amount of valuePoints that apply to this tender/order
     */
    get valuePoints(): number | undefined;
    /**
     Total amount of valuePoints that apply to this tender/order
     */
    set valuePoints(value: number | undefined);
    /**
     Indicates whether incentives are already applied
     */
    get incentivesApplied(): boolean | undefined;
    /**
     Indicates whether incentives are already applied
     */
    set incentivesApplied(value: boolean | undefined);
    /**
     Tender/order accumulated credit points
     */
    get creditPoints(): number | undefined;
    /**
     Tender/order accumulated credit points
     */
    set creditPoints(value: number | undefined);
    /**
     Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
     */
    get actionCode(): string | undefined;
    /**
     Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
     */
    set actionCode(value: string | undefined);
    /**
     User's reference for this tender
     */
    get reference(): string | undefined;
    /**
     User's reference for this tender
     */
    set reference(value: string | undefined);
    /**
     User's remarks for this tender
     */
    get remarks(): string | undefined;
    /**
     User's remarks for this tender
     */
    set remarks(value: string | undefined);
    /**
     The language for this tender
     */
    get language(): string | undefined;
    /**
     The language for this tender
     */
    set language(value: string | undefined);
    /**
     The currency for this tender
     */
    get currency(): string | undefined;
    /**
     The currency for this tender
     */
    set currency(value: string | undefined);
    /**
     The currency ratio for this tender
     */
    get currencyRatio(): number | undefined;
    /**
     The currency ratio for this tender
     */
    set currencyRatio(value: number | undefined);
    /**
     The order's ID in an external system
     */
    get externalId(): string | undefined;
    /**
     The order's ID in an external system
     */
    set externalId(value: string | undefined);
    /**
     Additional information field that can be stored with a tender/order
     */
    get extra3(): string | undefined;
    /**
     Additional information field that can be stored with a tender/order
     */
    set extra3(value: string | undefined);
    /**
     Additional information field that can be stored with a tender/order
     */
    get extra4(): string | undefined;
    /**
     Additional information field that can be stored with a tender/order
     */
    set extra4(value: string | undefined);
    /**
     Indicates whether tender can be edited
     */
    get isEditable(): boolean | undefined;
    /**
     Indicates whether tender can be edited
     */
    set isEditable(value: boolean | undefined);
    /**
     Valid until date (Display Only!)
     */
    get validUntil(): string | undefined;
    /**
     Valid until date (Display Only!)
     */
    set validUntil(value: string | undefined);
    /**
     Tender Contact
     */
    get contact(): Contact | undefined;
    /**
     Tender Contact
     */
    set contact(value: Contact | undefined);
    /**
     Tender Customer
     */
    get customer(): Customer | undefined;
    /**
     Tender Customer
     */
    set customer(value: Customer | undefined);
    /**
     Tender Company
     */
    get company(): Company | undefined;
    /**
     Tender Company
     */
    set company(value: Company | undefined);
    /**
     List of tender revisions for version control and audit purposes
     */
    get revisions(): any[] | undefined;
    /**
     List of tender revisions for version control and audit purposes
     */
    set revisions(value: any[] | undefined);
    /**
     Public visibility flag for tender sharing and collaboration
     */
    get public(): boolean | undefined;
    /**
     Public visibility flag for tender sharing and collaboration
     */
    set public(value: boolean | undefined);
    /**
     Current revision number for version tracking
     */
    get revisionNumber(): number | undefined;
    /**
     Current revision number for version tracking
     */
    set revisionNumber(value: number | undefined);
    /**
     Public version number for external sharing
     */
    get publicVersionNumber(): number | undefined;
    /**
     Public version number for external sharing
     */
    set publicVersionNumber(value: number | undefined);
    /**
     Invalid status flag indicating tender issues
     */
    get invalid(): boolean | undefined;
    /**
     Invalid status flag indicating tender issues
     */
    set invalid(value: boolean | undefined);
    /**
     Reason for tender invalidation if applicable
     */
    get invalidationReason(): string | undefined;
    /**
     Reason for tender invalidation if applicable
     */
    set invalidationReason(value: string | undefined);
    /**
     Admin user ID who created this tender
     */
    get createdByAdminUserId(): number | undefined;
    /**
     Admin user ID who created this tender
     */
    set createdByAdminUserId(value: number | undefined);
    /**
     Contact user ID who created this tender
     */
    get createdByContactId(): number | undefined;
    /**
     Contact user ID who created this tender
     */
    set createdByContactId(value: number | undefined);
    /**
     Customer user ID who created this tender
     */
    get createdByCustomerId(): number | undefined;
    /**
     Customer user ID who created this tender
     */
    set createdByCustomerId(value: number | undefined);
    /**
     Source revision number when tender was created from existing revision
     */
    get createdFromRevisionNumber(): number | undefined;
    /**
     Source revision number when tender was created from existing revision
     */
    set createdFromRevisionNumber(value: number | undefined);
}
//# sourceMappingURL=Tender.d.ts.map