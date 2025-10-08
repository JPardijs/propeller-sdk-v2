import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for CartItemIncentive
 */
export declare class CartItemIncentive {
    /** Cart item incentive name */
    private _name?;
    /** Quantity of cart items to be affected by the incentive */
    private _quantity;
    /** Cart item incentive price */
    private _price;
    /** Cart item incentive code */
    private _code;
    /**
     Creates a new instance of CartItemIncentive
     */
    constructor(data?: Partial<CartItemIncentive>);
    /**
     Cart item incentive name
     */
    get name(): string | undefined;
    /**
     Cart item incentive name
     */
    set name(value: string | undefined);
    /**
     Quantity of cart items to be affected by the incentive
     */
    get quantity(): number;
    /**
     Quantity of cart items to be affected by the incentive
     */
    set quantity(value: number);
    /**
     Cart item incentive price
     */
    get price(): number;
    /**
     Cart item incentive price
     */
    set price(value: number);
    /**
     Cart item incentive code
     */
    get code(): OrderItemIncentiveCode;
    /**
     Cart item incentive code
     */
    set code(value: OrderItemIncentiveCode);
}
//# sourceMappingURL=CartItemIncentive.d.ts.map