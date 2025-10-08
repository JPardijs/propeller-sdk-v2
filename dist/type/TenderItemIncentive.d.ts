import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for TenderItemIncentive
 */
export declare class TenderItemIncentive {
    /** name field */
    private _name?;
    /** quantity field */
    private _quantity;
    /** price field */
    private _price;
    /** code field */
    private _code;
    /**
     Creates a new instance of TenderItemIncentive
     */
    constructor(data?: Partial<TenderItemIncentive>);
    /**
     name field
     */
    get name(): string | undefined;
    /**
     name field
     */
    set name(value: string | undefined);
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
     code field
     */
    get code(): OrderItemIncentiveCode;
    /**
     code field
     */
    set code(value: OrderItemIncentiveCode);
}
//# sourceMappingURL=TenderItemIncentive.d.ts.map