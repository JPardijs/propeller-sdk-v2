import { LocalizedString } from './LocalizedString';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for SparePart
 */
export declare class SparePart {
    /** Spare Part identifier */
    private _id;
    /** Spare Part SKU */
    private _sku;
    /** Spare Part quantity */
    private _quantity;
    /** Spare Part name */
    private _name?;
    /** product field */
    private _product?;
    /**
     Creates a new instance of SparePart
     */
    constructor(data?: Partial<SparePart>);
    /**
     Spare Part identifier
     */
    get id(): string | number;
    /**
     Spare Part identifier
     */
    set id(value: string | number);
    /**
     Spare Part SKU
     */
    get sku(): string;
    /**
     Spare Part SKU
     */
    set sku(value: string);
    /**
     Spare Part quantity
     */
    get quantity(): number;
    /**
     Spare Part quantity
     */
    set quantity(value: number);
    /**
     Spare Part name
     */
    get name(): LocalizedString[] | undefined;
    /**
     Spare Part name
     */
    set name(value: LocalizedString[] | undefined);
    /**
     product field
     */
    get product(): IBaseProduct | undefined;
    /**
     product field
     */
    set product(value: IBaseProduct | undefined);
}
//# sourceMappingURL=SparePart.d.ts.map