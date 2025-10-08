import { PaymentStatuses } from '../enum/PaymentStatuses';
import { Transaction } from './Transaction';
/**
 Object class for Payment
 */
export declare class Payment {
    /** Payment primary identifier */
    private _id;
    /** Logged in User ID */
    private _userId?;
    /** Guest User ID */
    private _anonymousId?;
    /** Unique paymentId reference for the Payment - provided by the PSP */
    private _paymentId?;
    /** Unique orderId reference for the Payment */
    private _orderId;
    /** Payment amount [denomination in cents] */
    private _amount;
    /** Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
    private _currency;
    /** Payment method used by the PSP */
    private _method;
    /** Payment status */
    private _status;
    /** Transaction(s) related to the specified payment */
    private _transactions?;
    /** Payment initial creation timestamp */
    private _createdAt;
    /** Reference to the user that created the payment initially */
    private _createdBy?;
    /** Payment last update timestamp */
    private _lastModifiedAt;
    /** Reference to the user that last modified the payment */
    private _lastModifiedBy?;
    /**
     Creates a new instance of Payment
     */
    constructor(data?: Partial<Payment>);
    /**
     Payment primary identifier
     */
    get id(): string | number;
    /**
     Payment primary identifier
     */
    set id(value: string | number);
    /**
     Logged in User ID
     */
    get userId(): number | undefined;
    /**
     Logged in User ID
     */
    set userId(value: number | undefined);
    /**
     Guest User ID
     */
    get anonymousId(): number | undefined;
    /**
     Guest User ID
     */
    set anonymousId(value: number | undefined);
    /**
     Unique paymentId reference for the Payment - provided by the PSP
     */
    get paymentId(): string | undefined;
    /**
     Unique paymentId reference for the Payment - provided by the PSP
     */
    set paymentId(value: string | undefined);
    /**
     Unique orderId reference for the Payment
     */
    get orderId(): number;
    /**
     Unique orderId reference for the Payment
     */
    set orderId(value: number);
    /**
     Payment amount [denomination in cents]
     */
    get amount(): number;
    /**
     Payment amount [denomination in cents]
     */
    set amount(value: number);
    /**
     Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    get currency(): string;
    /**
     Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    set currency(value: string);
    /**
     Payment method used by the PSP
     */
    get method(): string;
    /**
     Payment method used by the PSP
     */
    set method(value: string);
    /**
     Payment status
     */
    get status(): PaymentStatuses;
    /**
     Payment status
     */
    set status(value: PaymentStatuses);
    /**
     Transaction(s) related to the specified payment
     */
    get transactions(): Transaction[] | undefined;
    /**
     Transaction(s) related to the specified payment
     */
    set transactions(value: Transaction[] | undefined);
    /**
     Payment initial creation timestamp
     */
    get createdAt(): string;
    /**
     Payment initial creation timestamp
     */
    set createdAt(value: string);
    /**
     Reference to the user that created the payment initially
     */
    get createdBy(): string | undefined;
    /**
     Reference to the user that created the payment initially
     */
    set createdBy(value: string | undefined);
    /**
     Payment last update timestamp
     */
    get lastModifiedAt(): string;
    /**
     Payment last update timestamp
     */
    set lastModifiedAt(value: string);
    /**
     Reference to the user that last modified the payment
     */
    get lastModifiedBy(): string | undefined;
    /**
     Reference to the user that last modified the payment
     */
    set lastModifiedBy(value: string | undefined);
}
//# sourceMappingURL=Payment.d.ts.map