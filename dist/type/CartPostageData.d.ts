import { PriceMode } from '../enum/PriceMode';
import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for CartPostageData
 */
export declare class CartPostageData {
    /** Selected shipping method for this cart. Defaults to DELIVERY. */
    private _method;
    /** Tax percentage */
    private _taxPercentage?;
    /** Preferred delivery date for this order as requested by the user. */
    private _requestDate?;
    /** Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT. */
    private _price?;
    /** Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT. */
    private _priceNet?;
    /** Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally */
    private _priceMode?;
    /** Selected carrier for this cart. */
    private _carrier?;
    /** This order can be shipped in parts when items different delivery dates */
    private _partialDeliveryAllowed?;
    /** Pick up location ID */
    private _pickUpLocationId?;
    /** warehouse field */
    private _warehouse?;
    /**
     Creates a new instance of CartPostageData
     */
    constructor(data?: Partial<CartPostageData>);
    /**
     Selected shipping method for this cart. Defaults to DELIVERY.
     */
    get method(): string;
    /**
     Selected shipping method for this cart. Defaults to DELIVERY.
     */
    set method(value: string);
    /**
     Tax percentage
     */
    get taxPercentage(): number | undefined;
    /**
     Tax percentage
     */
    set taxPercentage(value: number | undefined);
    /**
     Preferred delivery date for this order as requested by the user.
     */
    get requestDate(): string | undefined;
    /**
     Preferred delivery date for this order as requested by the user.
     */
    set requestDate(value: string | undefined);
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
     */
    get price(): number | undefined;
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
     */
    set price(value: number | undefined);
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
     */
    get priceNet(): number | undefined;
    /**
     Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
     */
    set priceNet(value: number | undefined);
    /**
     Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
     */
    get priceMode(): PriceMode | undefined;
    /**
     Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
     */
    set priceMode(value: PriceMode | undefined);
    /**
     Selected carrier for this cart.
     */
    get carrier(): string | undefined;
    /**
     Selected carrier for this cart.
     */
    set carrier(value: string | undefined);
    /**
     This order can be shipped in parts when items different delivery dates
     */
    get partialDeliveryAllowed(): YesNo | undefined;
    /**
     This order can be shipped in parts when items different delivery dates
     */
    set partialDeliveryAllowed(value: YesNo | undefined);
    /**
     Pick up location ID
     */
    get pickUpLocationId(): number | undefined;
    /**
     Pick up location ID
     */
    set pickUpLocationId(value: number | undefined);
    /**
     warehouse field
     */
    get warehouse(): Warehouse | undefined;
    /**
     warehouse field
     */
    set warehouse(value: Warehouse | undefined);
}
//# sourceMappingURL=CartPostageData.d.ts.map