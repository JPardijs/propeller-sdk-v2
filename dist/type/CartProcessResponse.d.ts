import { Cart } from './Cart';
import { Order } from './Order';
/**
 Object class for CartProcessResponse
 */
export declare class CartProcessResponse {
    /** Cart order unique identifier */
    private _cartOrderId;
    /** Cart object */
    private _cart;
    /** order field */
    private _order;
    /**
     Creates a new instance of CartProcessResponse
     */
    constructor(data?: Partial<CartProcessResponse>);
    /**
     Cart order unique identifier
     */
    get cartOrderId(): number;
    /**
     Cart order unique identifier
     */
    set cartOrderId(value: number);
    /**
     Cart object
     */
    get cart(): Cart;
    /**
     Cart object
     */
    set cart(value: Cart);
    /**
     order field
     */
    get order(): Order;
    /**
     order field
     */
    set order(value: Order);
}
//# sourceMappingURL=CartProcessResponse.d.ts.map