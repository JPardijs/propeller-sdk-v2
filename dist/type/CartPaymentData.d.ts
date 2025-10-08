import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartPaymentData
 */
export declare class CartPaymentData {
    /** Selected paymethod for this cart. Defaults to ACCOUNT. */
    private _method;
    /** Costs associated with the selected paymethod on this cart. Excluding VAT. */
    private _price?;
    /** Costs associated with the selected paymethod on this cart. Including VAT. */
    private _priceNet?;
    /** priceMode field */
    private _priceMode?;
    /** Tax associated with the selected paymethod on this cart. */
    private _tax;
    /** Tax percentage associated with the selected paymethod on this cart. */
    private _taxPercentage?;
    /** Payment status */
    private _status?;
    /** Payment status date */
    private _statusDate?;
    /**
     Creates a new instance of CartPaymentData
     */
    constructor(data?: Partial<CartPaymentData>);
    /**
     Selected paymethod for this cart. Defaults to ACCOUNT.
     */
    get method(): string;
    /**
     Selected paymethod for this cart. Defaults to ACCOUNT.
     */
    set method(value: string);
    /**
     Costs associated with the selected paymethod on this cart. Excluding VAT.
     */
    get price(): number | undefined;
    /**
     Costs associated with the selected paymethod on this cart. Excluding VAT.
     */
    set price(value: number | undefined);
    /**
     Costs associated with the selected paymethod on this cart. Including VAT.
     */
    get priceNet(): number | undefined;
    /**
     Costs associated with the selected paymethod on this cart. Including VAT.
     */
    set priceNet(value: number | undefined);
    /**
     priceMode field
     */
    get priceMode(): PriceMode | undefined;
    /**
     priceMode field
     */
    set priceMode(value: PriceMode | undefined);
    /**
     Tax associated with the selected paymethod on this cart.
     */
    get tax(): number;
    /**
     Tax associated with the selected paymethod on this cart.
     */
    set tax(value: number);
    /**
     Tax percentage associated with the selected paymethod on this cart.
     */
    get taxPercentage(): number | undefined;
    /**
     Tax percentage associated with the selected paymethod on this cart.
     */
    set taxPercentage(value: number | undefined);
    /**
     Payment status
     */
    get status(): string | undefined;
    /**
     Payment status
     */
    set status(value: string | undefined);
    /**
     Payment status date
     */
    get statusDate(): string | undefined;
    /**
     Payment status date
     */
    set statusDate(value: string | undefined);
}
//# sourceMappingURL=CartPaymentData.d.ts.map