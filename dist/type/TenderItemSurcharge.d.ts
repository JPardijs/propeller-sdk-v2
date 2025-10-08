import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for TenderItemSurcharge
 */
export declare class TenderItemSurcharge {
    /** names field */
    private _names;
    /** taxCode field */
    private _taxCode;
    /** taxPercentage field */
    private _taxPercentage;
    /** quantity field */
    private _quantity;
    /** price field */
    private _price;
    /** totalPrice field */
    private _totalPrice;
    /** priceNet field */
    private _priceNet;
    /** totalPriceNet field */
    private _totalPriceNet;
    /**
     Creates a new instance of TenderItemSurcharge
     */
    constructor(data?: Partial<TenderItemSurcharge>);
    /**
     names field
     */
    get names(): LocalizedString[];
    /**
     names field
     */
    set names(value: LocalizedString[]);
    /**
     taxCode field
     */
    get taxCode(): Taxcode;
    /**
     taxCode field
     */
    set taxCode(value: Taxcode);
    /**
     taxPercentage field
     */
    get taxPercentage(): number;
    /**
     taxPercentage field
     */
    set taxPercentage(value: number);
    /**
     quantity field
     */
    get quantity(): number;
    /**
     quantity field
     */
    set quantity(value: number);
    /**
     price field
     */
    get price(): number;
    /**
     price field
     */
    set price(value: number);
    /**
     totalPrice field
     */
    get totalPrice(): number;
    /**
     totalPrice field
     */
    set totalPrice(value: number);
    /**
     priceNet field
     */
    get priceNet(): number;
    /**
     priceNet field
     */
    set priceNet(value: number);
    /**
     totalPriceNet field
     */
    get totalPriceNet(): number;
    /**
     totalPriceNet field
     */
    set totalPriceNet(value: number);
}
//# sourceMappingURL=TenderItemSurcharge.d.ts.map