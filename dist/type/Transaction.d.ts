import { TransactionTypes } from '../enum/TransactionTypes';
import { TransactionStatuses } from '../enum/TransactionStatuses';
/**
 Object class for Transaction
 */
export declare class Transaction {
    /** Transaction primary identifier */
    private _id;
    /** Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier] */
    private _transactionId;
    /** Payment ID - usually provided by the PSP */
    private _paymentId?;
    /** Unique orderId reference for the Payment */
    private _orderId;
    /** Transaction amount */
    private _amount;
    /** Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
    private _currency;
    /** Description */
    private _description?;
    /** Transaction timestamp */
    private _timestamp?;
    /** Transaction type */
    private _type;
    /** PSP Provider Name */
    private _provider?;
    /** Transaction status */
    private _status;
    /**
     Creates a new instance of Transaction
     */
    constructor(data?: Partial<Transaction>);
    /**
     Transaction primary identifier
     */
    get id(): string | number;
    /**
     Transaction primary identifier
     */
    set id(value: string | number);
    /**
     Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
     */
    get transactionId(): string;
    /**
     Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
     */
    set transactionId(value: string);
    /**
     Payment ID - usually provided by the PSP
     */
    get paymentId(): string | undefined;
    /**
     Payment ID - usually provided by the PSP
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
     Transaction amount
     */
    get amount(): number;
    /**
     Transaction amount
     */
    set amount(value: number);
    /**
     Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    get currency(): string;
    /**
     Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    set currency(value: string);
    /**
     Description
     */
    get description(): string | undefined;
    /**
     Description
     */
    set description(value: string | undefined);
    /**
     Transaction timestamp
     */
    get timestamp(): string | undefined;
    /**
     Transaction timestamp
     */
    set timestamp(value: string | undefined);
    /**
     Transaction type
     */
    get type(): TransactionTypes;
    /**
     Transaction type
     */
    set type(value: TransactionTypes);
    /**
     PSP Provider Name
     */
    get provider(): string | undefined;
    /**
     PSP Provider Name
     */
    set provider(value: string | undefined);
    /**
     Transaction status
     */
    get status(): TransactionStatuses;
    /**
     Transaction status
     */
    set status(value: TransactionStatuses);
}
//# sourceMappingURL=Transaction.d.ts.map