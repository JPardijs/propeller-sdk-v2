import { OrderType } from '../enum/OrderType';
import { OrderExportStatus } from '../enum/OrderExportStatus';
import { OrderMedia } from './OrderMedia';
import { OrderPostageData } from './OrderPostageData';
import { OrderPaymentData } from './OrderPaymentData';
import { OrderTotals } from './OrderTotals';
import { OrderItem } from './OrderItem';
import { Shipment } from './Shipment';
import { Address } from './Address';
import { OrderAddress } from './OrderAddress';
/**
 Object class for Order
 */
export declare class Order {
    /** The auto-incremental id for this order */
    private _id;
    /** media field */
    private _media?;
    /** The userId of the user that placed this order */
    private _userId?;
    /** The id of the Owner/Account Manager that will handle this order */
    private _accountManagerId?;
    /** The cartId of the cart that this order is created from. */
    private _cartId?;
    /** The channel identifier of the webshop this order originated from */
    private _channelId;
    /** The ID of the shop the Order belongs to */
    private _shopId;
    /** Unique identifier for this order */
    private _uuid;
    /** External identifier for this order from an external source like an ERP system */
    private _externalId?;
    /** The debtorId of the Customer or Company that placed this Order */
    private _debtorId?;
    /** The processing status for this order */
    private _status;
    /** The type of this order */
    private _type;
    /** The source this order originates from */
    private _source?;
    /** The email address for transactional emails */
    private _email;
    /** The date the last transactional email was sent for this order */
    private _emailDate?;
    /** Remarks added by the customer about this order */
    private _remarks?;
    /** Reference added by the customer about this order */
    private _reference?;
    /** extra3: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
    private _extra3?;
    /** extra4: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
    private _extra4?;
    /** Currency used to place this order */
    private _currency;
    /** The currency's exchange rate at the time the order was placed */
    private _currencyRatio;
    /** The selected language on the webshop at the time the order was placed */
    private _language;
    /** The date and time the order was placed */
    /** @deprecated Deprecated in favour of createdAt */
    private _date;
    /** The date and time the order was placed */
    private _createdAt;
    /** The date and time the status of the order was last changed */
    private _statusDate?;
    /** The postage data of the order */
    private _postageData;
    /** The payment data of the order */
    private _paymentData;
    /** The totals of the order */
    private _total;
    /** The items included in the order */
    private _items;
    /** The shipments for the order */
    private _shipments?;
    /** The addresses for the order */
    private _addresses?;
    /** The id of the User, contact or Customer that should receive the invoice for this Order */
    private _invoiceUserId?;
    /** The date and time until the order is valid */
    private _validUntil?;
    /** The companyId of the company that placed this order */
    private _companyId?;
    /** The date and time the order was last modified */
    private _lastModifiedAt;
    /** Original order id */
    private _originalOrderId?;
    /** The date and time the order was exported */
    private _exportedAt?;
    /** Order export status of this order */
    private _exportStatus?;
    /** Order export message */
    private _exportMessage?;
    /** orderAddresses field */
    private _orderAddresses;
    /**
     Creates a new instance of Order
     */
    constructor(data?: Partial<Order>);
    /**
     The auto-incremental id for this order
     */
    get id(): number;
    /**
     The auto-incremental id for this order
     */
    set id(value: number);
    /**
     media field
     */
    get media(): OrderMedia | undefined;
    /**
     media field
     */
    set media(value: OrderMedia | undefined);
    /**
     The userId of the user that placed this order
     */
    get userId(): number | undefined;
    /**
     The userId of the user that placed this order
     */
    set userId(value: number | undefined);
    /**
     The id of the Owner/Account Manager that will handle this order
     */
    get accountManagerId(): number | undefined;
    /**
     The id of the Owner/Account Manager that will handle this order
     */
    set accountManagerId(value: number | undefined);
    /**
     The cartId of the cart that this order is created from.
     */
    get cartId(): string | undefined;
    /**
     The cartId of the cart that this order is created from.
     */
    set cartId(value: string | undefined);
    /**
     The channel identifier of the webshop this order originated from
     */
    get channelId(): number;
    /**
     The channel identifier of the webshop this order originated from
     */
    set channelId(value: number);
    /**
     The ID of the shop the Order belongs to
     */
    get shopId(): number;
    /**
     The ID of the shop the Order belongs to
     */
    set shopId(value: number);
    /**
     Unique identifier for this order
     */
    get uuid(): string;
    /**
     Unique identifier for this order
     */
    set uuid(value: string);
    /**
     External identifier for this order from an external source like an ERP system
     */
    get externalId(): string | undefined;
    /**
     External identifier for this order from an external source like an ERP system
     */
    set externalId(value: string | undefined);
    /**
     The debtorId of the Customer or Company that placed this Order
     */
    get debtorId(): string | undefined;
    /**
     The debtorId of the Customer or Company that placed this Order
     */
    set debtorId(value: string | undefined);
    /**
     The processing status for this order
     */
    get status(): string;
    /**
     The processing status for this order
     */
    set status(value: string);
    /**
     The type of this order
     */
    get type(): OrderType;
    /**
     The type of this order
     */
    set type(value: OrderType);
    /**
     The source this order originates from
     */
    get source(): string | undefined;
    /**
     The source this order originates from
     */
    set source(value: string | undefined);
    /**
     The email address for transactional emails
     */
    get email(): string;
    /**
     The email address for transactional emails
     */
    set email(value: string);
    /**
     The date the last transactional email was sent for this order
     */
    get emailDate(): string | undefined;
    /**
     The date the last transactional email was sent for this order
     */
    set emailDate(value: string | undefined);
    /**
     Remarks added by the customer about this order
     */
    get remarks(): string | undefined;
    /**
     Remarks added by the customer about this order
     */
    set remarks(value: string | undefined);
    /**
     Reference added by the customer about this order
     */
    get reference(): string | undefined;
    /**
     Reference added by the customer about this order
     */
    set reference(value: string | undefined);
    /**
     extra3: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    get extra3(): string | undefined;
    /**
     extra3: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    set extra3(value: string | undefined);
    /**
     extra4: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    get extra4(): string | undefined;
    /**
     extra4: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    set extra4(value: string | undefined);
    /**
     Currency used to place this order
     */
    get currency(): string;
    /**
     Currency used to place this order
     */
    set currency(value: string);
    /**
     The currency's exchange rate at the time the order was placed
     */
    get currencyRatio(): number;
    /**
     The currency's exchange rate at the time the order was placed
     */
    set currencyRatio(value: number);
    /**
     The selected language on the webshop at the time the order was placed
     */
    get language(): string;
    /**
     The selected language on the webshop at the time the order was placed
     */
    set language(value: string);
    /**
     The date and time the order was placed
     */
    get date(): string;
    /**
     The date and time the order was placed
     */
    set date(value: string);
    /**
     The date and time the order was placed
     */
    get createdAt(): string;
    /**
     The date and time the order was placed
     */
    set createdAt(value: string);
    /**
     The date and time the status of the order was last changed
     */
    get statusDate(): string | undefined;
    /**
     The date and time the status of the order was last changed
     */
    set statusDate(value: string | undefined);
    /**
     The postage data of the order
     */
    get postageData(): OrderPostageData;
    /**
     The postage data of the order
     */
    set postageData(value: OrderPostageData);
    /**
     The payment data of the order
     */
    get paymentData(): OrderPaymentData;
    /**
     The payment data of the order
     */
    set paymentData(value: OrderPaymentData);
    /**
     The totals of the order
     */
    get total(): OrderTotals;
    /**
     The totals of the order
     */
    set total(value: OrderTotals);
    /**
     The items included in the order
     */
    get items(): OrderItem[];
    /**
     The items included in the order
     */
    set items(value: OrderItem[]);
    /**
     The shipments for the order
     */
    get shipments(): Shipment[] | undefined;
    /**
     The shipments for the order
     */
    set shipments(value: Shipment[] | undefined);
    /**
     The addresses for the order
     */
    get addresses(): Address[] | undefined;
    /**
     The addresses for the order
     */
    set addresses(value: Address[] | undefined);
    /**
     The id of the User, contact or Customer that should receive the invoice for this Order
     */
    get invoiceUserId(): number | undefined;
    /**
     The id of the User, contact or Customer that should receive the invoice for this Order
     */
    set invoiceUserId(value: number | undefined);
    /**
     The date and time until the order is valid
     */
    get validUntil(): string | undefined;
    /**
     The date and time until the order is valid
     */
    set validUntil(value: string | undefined);
    /**
     The companyId of the company that placed this order
     */
    get companyId(): number | undefined;
    /**
     The companyId of the company that placed this order
     */
    set companyId(value: number | undefined);
    /**
     The date and time the order was last modified
     */
    get lastModifiedAt(): string;
    /**
     The date and time the order was last modified
     */
    set lastModifiedAt(value: string);
    /**
     Original order id
     */
    get originalOrderId(): number | undefined;
    /**
     Original order id
     */
    set originalOrderId(value: number | undefined);
    /**
     The date and time the order was exported
     */
    get exportedAt(): string | undefined;
    /**
     The date and time the order was exported
     */
    set exportedAt(value: string | undefined);
    /**
     Order export status of this order
     */
    get exportStatus(): OrderExportStatus | undefined;
    /**
     Order export status of this order
     */
    set exportStatus(value: OrderExportStatus | undefined);
    /**
     Order export message
     */
    get exportMessage(): string | undefined;
    /**
     Order export message
     */
    set exportMessage(value: string | undefined);
    /**
     orderAddresses field
     */
    get orderAddresses(): OrderAddress[];
    /**
     orderAddresses field
     */
    set orderAddresses(value: OrderAddress[]);
}
//# sourceMappingURL=Order.d.ts.map