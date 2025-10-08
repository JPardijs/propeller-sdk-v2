import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderPayment
 */
export declare class TenderPayment {
    /** The costs associated with the selected paymethod on this tender/order. VAT including */
    private _price;
    /** The costs associated with the selected paymethod on this tender/order. VAT excluding */
    private _priceNet;
    /** If false, shipping costs are automatically calculated */
    private _overruled?;
    /** The tax associated with the selected paymethod on this tender/order */
    private _tax;
    /** The tax percentage associated with the selected paymethod on this tender/order */
    private _taxPercentage;
    /** The selected payment method for this tender/order */
    private _method;
    /** Payment status for this tender/order */
    private _status?;
    /** Payment status change date for this tender/order */
    private _statusDate?;
    /** Accounting ID for this tender/order */
    private _accountingId?;
    /**
     Creates a new instance of TenderPayment
     */
    constructor(data?: Partial<TenderPayment>);
    /**
     The costs associated with the selected paymethod on this tender/order. VAT including
     */
    get price(): number;
    /**
     The costs associated with the selected paymethod on this tender/order. VAT including
     */
    set price(value: number);
    /**
     The costs associated with the selected paymethod on this tender/order. VAT excluding
     */
    get priceNet(): number;
    /**
     The costs associated with the selected paymethod on this tender/order. VAT excluding
     */
    set priceNet(value: number);
    /**
     If false, shipping costs are automatically calculated
     */
    get overruled(): YesNo | undefined;
    /**
     If false, shipping costs are automatically calculated
     */
    set overruled(value: YesNo | undefined);
    /**
     The tax associated with the selected paymethod on this tender/order
     */
    get tax(): number;
    /**
     The tax associated with the selected paymethod on this tender/order
     */
    set tax(value: number);
    /**
     The tax percentage associated with the selected paymethod on this tender/order
     */
    get taxPercentage(): number;
    /**
     The tax percentage associated with the selected paymethod on this tender/order
     */
    set taxPercentage(value: number);
    /**
     The selected payment method for this tender/order
     */
    get method(): string;
    /**
     The selected payment method for this tender/order
     */
    set method(value: string);
    /**
     Payment status for this tender/order
     */
    get status(): string | undefined;
    /**
     Payment status for this tender/order
     */
    set status(value: string | undefined);
    /**
     Payment status change date for this tender/order
     */
    get statusDate(): string | undefined;
    /**
     Payment status change date for this tender/order
     */
    set statusDate(value: string | undefined);
    /**
     Accounting ID for this tender/order
     */
    get accountingId(): string | undefined;
    /**
     Accounting ID for this tender/order
     */
    set accountingId(value: string | undefined);
}
//# sourceMappingURL=TenderPayment.d.ts.map