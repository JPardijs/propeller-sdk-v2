import { Taxcode } from '../enum/Taxcode';
/**
 Object class for CartPaymethod
 */
export declare class CartPaymethod {
    /** Paymethod code */
    private _code;
    /** Paymethod name */
    private _name;
    /** External code */
    private _externalCode?;
    /** Paymethod type */
    private _type?;
    /** Tax code */
    private _taxCode?;
    /** Paymethod price */
    private _price;
    /**
     Creates a new instance of CartPaymethod
     */
    constructor(data?: Partial<CartPaymethod>);
    /**
     Paymethod code
     */
    get code(): string;
    /**
     Paymethod code
     */
    set code(value: string);
    /**
     Paymethod name
     */
    get name(): string;
    /**
     Paymethod name
     */
    set name(value: string);
    /**
     External code
     */
    get externalCode(): string | undefined;
    /**
     External code
     */
    set externalCode(value: string | undefined);
    /**
     Paymethod type
     */
    get type(): string | undefined;
    /**
     Paymethod type
     */
    set type(value: string | undefined);
    /**
     Tax code
     */
    get taxCode(): Taxcode | undefined;
    /**
     Tax code
     */
    set taxCode(value: Taxcode | undefined);
    /**
     Paymethod price
     */
    get price(): number;
    /**
     Paymethod price
     */
    set price(value: number);
}
//# sourceMappingURL=CartPaymethod.d.ts.map