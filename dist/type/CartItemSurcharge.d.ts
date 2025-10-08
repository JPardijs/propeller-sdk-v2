import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for CartItemSurcharge
 */
export declare class CartItemSurcharge {
    /** Localized names */
    private _names;
    /** Localized descriptions */
    private _descriptions;
    /** Type */
    private _type;
    /** Value */
    private _value;
    /** Tax code */
    private _taxCode;
    /** Tax percentage */
    private _taxPercentage?;
    /** Quantity */
    private _quantity?;
    /** Price */
    private _price?;
    /** Total price */
    private _totalPrice?;
    /** Net price */
    private _priceNet?;
    /** Total net price */
    private _totalPriceNet?;
    /**
     Creates a new instance of CartItemSurcharge
     */
    constructor(data?: Partial<CartItemSurcharge>);
    /**
     Localized names
     */
    get names(): LocalizedString[];
    /**
     Localized names
     */
    set names(value: LocalizedString[]);
    /**
     Localized descriptions
     */
    get descriptions(): LocalizedString[];
    /**
     Localized descriptions
     */
    set descriptions(value: LocalizedString[]);
    /**
     Type
     */
    get type(): string;
    /**
     Type
     */
    set type(value: string);
    /**
     Value
     */
    get value(): number;
    /**
     Value
     */
    set value(value: number);
    /**
     Tax code
     */
    get taxCode(): Taxcode;
    /**
     Tax code
     */
    set taxCode(value: Taxcode);
    /**
     Tax percentage
     */
    get taxPercentage(): number | undefined;
    /**
     Tax percentage
     */
    set taxPercentage(value: number | undefined);
    /**
     Quantity
     */
    get quantity(): number | undefined;
    /**
     Quantity
     */
    set quantity(value: number | undefined);
    /**
     Price
     */
    get price(): number | undefined;
    /**
     Price
     */
    set price(value: number | undefined);
    /**
     Total price
     */
    get totalPrice(): number | undefined;
    /**
     Total price
     */
    set totalPrice(value: number | undefined);
    /**
     Net price
     */
    get priceNet(): number | undefined;
    /**
     Net price
     */
    set priceNet(value: number | undefined);
    /**
     Total net price
     */
    get totalPriceNet(): number | undefined;
    /**
     Total net price
     */
    set totalPriceNet(value: number | undefined);
}
//# sourceMappingURL=CartItemSurcharge.d.ts.map